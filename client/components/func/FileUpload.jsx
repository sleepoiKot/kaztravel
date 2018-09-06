import React from 'react'

import Aux from '/client/hoc/Aux/Aux'

export default FileUpload = ({
  uploaderChangeHandler,
  context,
  stateName,
  parentContext,
  multi,
  title,
  buttonName,
  main
}) => {
  const {
    userId,
    user,
  } = context.props

  renderUploadingFile = () => {
    const file = context.state[stateName]

    let iconClassName

    if(file.progress < 100) {
      iconClassName = 'fa fa-spin fa-spinner'
    }
    else {
      iconClassName = ''
    }

    return (
      <div className="file-path-wrapper">
        {file.progress === 100 ?
          <Aux classNameAux="c-form-img-caption">
            <input
              value={file.name}
              className="file-path validate"
              disabled
              type="text"
              style={{height: 37, fontSize: 14}}/>
              <a
                onClick={() => context.setState({[stateName]: ''})}
                style={{color: "#000"}}
                className="file-path validate"><i className="fa fa-remove" /></a>
          </Aux>
            :
          <span className="file-path validate">
            <i className={iconClassName} /> &nbsp; &nbsp; { file.progress }%
          </span>
        }
      </div>
    )
  }

  const renderUploadingFiles = () => {
    let uploadingFiles = []

    uploadingFiles = context.state[stateName]

    return uploadingFiles.map((file, index) => {
      let iconClassName

      if(file.progress < 100) {
        iconClassName = 'fa fa-spin fa-spinner'
      }
      else {
        iconClassName = ''
      }

      return (
        <div key={file._id} className="file-path-wrapper">
          {file.progress === 100 ?
            <Aux classNameAux="c-form-img-caption">
              <input
                value={file.name}
                className="file-path validate"
                disabled
                type="text"
                style={{height: 37, fontSize: 14}}/>
              <a
                onClick={() => {
                  let arrayOfImages = [...context.state[stateName]],
                      newArrayOfImages = arrayOfImages.filter( img => img._id !== file._id)

                  context.setState({[stateName]: newArrayOfImages})
                }}
                style={{color: "#000"}}
                className="file-path validate"><i className="fa fa-remove" /></a>
            </Aux>
              :
            <span className="file-path validate">
              <i className={iconClassName} /> &nbsp; &nbsp; { file.progress }%
            </span>
          }
        </div>
      )
    })
  }

  return (
    <div>
      <input
        style={{display: 'none'}}
        ref={ fu => parentContext.fu = fu }
        type="file"
        onChange={ uploaderChangeHandler }
        multiple={multi}
      />
      <button onClick={(e) => {
        e.preventDefault()
        parentContext.fu.click()
      }}
      className="c-button-1 -color-black-default -hover-black-outline -size-small">
        {buttonName}
      </button>
      {multi ? context.state[stateName].length !== 0 ? renderUploadingFiles() : null : context.state[stateName] ? renderUploadingFile() : null}
    </div>
  )
}
