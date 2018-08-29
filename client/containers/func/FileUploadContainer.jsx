import React, { Component } from 'react'
import gm from 'gm';

import FileUpload from '/client/components/func/FileUpload'
import { Images } from '/api/docs'

const SIZE_LIMIT = 25000000
const PHEXT = ['jpg', 'jpeg', 'png']

export default class FileUploadContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      progress: 0
    }
  }

  componentDidUpdate() {
    const {
      context,
      stateName,
      main
    } = this.props

    let uploadingFiles = []

    if(main){
      uploadingFiles.push(context.state[stateName])
    } else {
      uploadingFiles = [...context.state[stateName]]
    }

    uploadingFiles.map( file => {
      if(file){
        Meteor.call('get.link', file, (err, res) => {
          if(err) {
            toastr.error(err.reason)
          }
          else {
            const link = document.querySelector(`#link-${file._id}`)
            if(link) link.href = res
          }
        })
        Meteor.call('get.thumbnail', file, (err, res) => {
          if(err) {
            toastr.error(err.reason)
          } else {
            const img = document.querySelector(`#img-${file._id}`)
            if(img) img.src = res
          }
        })
      }
    })
  }

  uploaderChangeHandler(e) {
    const files = e.currentTarget.files
    const { context, stateName, multi, main } = this.props
    const { user } = context.props

    if(files.length > 8 || multi && context.state[stateName].length > 7) {
      toastr.warning('Допускается не более 8 изображений', 'Количество загруженных файлов превышено')
      return
    }

    for(let i = 0, len = files.length; i < len; i++) {
      const theFile = files[i]

      const mime = theFile.type.split('/')[0]
      const type = theFile.type.split('/')[1]

      let isPic = PHEXT.some( ext => ext === type)
      if(!isPic || mime !== 'image'){
        toastr.error("Загружаемый файл не является изображением")
        continue
      }

      if(theFile.size > SIZE_LIMIT) {
        toastr.error("Загружаемый файл не должен превышать 25 мб")
        continue
      }

      const uploadingFile = {}

      const upload = Images.insert({
        file: theFile
      }, false)

      upload.on('progress', (progress, fileObj) => {
        uploadingFile.progress = progress
        this.setState({ progress })
      })

      upload.on('start', () => {
        let userInfo = {
          _id: user._id,
          profile: {
            name: user.profile.name,
            email: user.emails[0].address,
          }
        }

        uploadingFile._id = upload.config.fileId
        uploadingFile.name = theFile.name
        uploadingFile.uploader = userInfo
        uploadingFile.createdAt = new Date()
        uploadingFile.progress = 0
        uploadingFile.abort = upload.abort

        if(multi) {
          context.state[stateName].push(uploadingFile)
        } else {
          context.setState({ [stateName]: uploadingFile })
        }
      })

      upload.on('uploaded', function (error, fileObj) {
        if (!error) {
          Meteor.call('get.link', fileObj, (err, res) => {
            if(err) {
              toastr.error(err.reason)
            }
            else {
              const link = document.querySelector(`#link-${fileObj._id}`)
              if(link) link.href = res
            }
          })
          Meteor.call('get.thumbnail', fileObj, (err, res) => {
            if(err) {
              toastr.error(err.reason)
            } else {
              const img = document.querySelector(`#img-${fileObj._id}`)
              if(img) img.src = res

              let uploadingFileLink = {}
              if(multi) {
                const linkedArrayOfImages = [...context.state[stateName]]
                const pos = linkedArrayOfImages.map(img => img._id).indexOf(fileObj._id)

                uploadingFileLink = {
                  ...linkedArrayOfImages[pos],
                  link: res
                }

                linkedArrayOfImages[pos] = uploadingFileLink
                context.setState({ [stateName]: linkedArrayOfImages })
              } else {
                uploadingFileLink = {
                  ...context.state[stateName],
                  link: res
                }
                context.setState({ [stateName]: uploadingFileLink })
              }
            }
          })
        }
     });

      upload.on('end', function (error, fileObj) {
        if (error) {
          toastr.error('Error during upload: ' + error)
        } else if(fileObj){
            uploadingFile.progress = 100
            context.forceUpdate()
          }
        })

      upload.start()
    }
  }

  render() {
    const {
      context,
      stateName,
      multi,
      title,
      buttonName,
      main
    } = this.props

    return (
      <FileUpload
        main={main}
        parentContext={ this }
        uploaderChangeHandler={ this.uploaderChangeHandler.bind(this) }
        context={ context }
        stateName={ stateName }
        multi={multi}
        title={title}
        buttonName={buttonName}
      />
    )
  }
}
