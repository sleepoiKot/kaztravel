import React, { Component } from 'react'
import gm from 'gm';

import FileUpload from '/client/components/func/FileUpload'
import { DocsCollection } from '/api/docs'

const SIZE_LIMIT = 5000000
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
      }
    })
  }

  uploaderChangeHandler(e) {
    const files = e.currentTarget.files
    const { context, stateName, multi, main, ext } = this.props
    const { user } = context.props

    if(files.length > 10 || multi && context.state[stateName].length > 9) {
      toastr.warning('Допускается не более 10 изображений', 'Количество загруженных файлов превышено')
      return
    }

    for(let i = 0, len = files.length; i < len; i++) {
      const theFile = files[i]

      const mime = theFile.type.split('/')[0]
      const type = theFile.type.split('/')[1]

      if(theFile.size > SIZE_LIMIT) {
        toastr.error("Загружаемый файл не должен превышать 5 мб")
        continue
      }

      if(ext === 'pdf' && type !== 'pdf'){
        toastr.error("Загружаемый файл не является файлом формата \"PDF\"")
        continue
      }

      const uploadingFile = {}

      const upload = DocsCollection.insert({
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
