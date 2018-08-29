import React from 'react'

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
      <div className="row">
        <div className="col-md-8 col-lg-7 col-xl-5">
          <form className="md-form mb-0">
            <div className="file-field">
              {context.state[stateName] && file.progress === 100 ? (
                <a
                  style={{ boxShadow: 'none'}}
                  id={ `link-${file._id}` }
                  className="z-depth-1-half mb-4"
                  href="#"
                  data-lightbox="cover"
                  data-title={file.name}>
                  <img
                    className="img-fluid hoverable"
                    id={ `img-${file._id}` }
                    src="#"
                    alt="Обложка книги" />
                </a>
              ) : context.state[stateName] && file.progress !== 100 ? (
                <span
                  className="col-md-2"
                  style={ {
                    display: file.progress === 100 ? 'none' : ''
                  } }
                >
                  <i className={iconClassName} /> &nbsp; &nbsp; { file.progress }%
                </span>
              ) : (
                <img className="img-fluid hoverable" src="/img/blocks/l-site-fileUpload/file-input-placeholder.jpg" alt="Обложка книги"/>
              )}
              <br />
              <div className="d-flex justify-content-center">
                <div
                  className="btn btn-mdb-color btn-rounded float-left"
                  onClick={ () => parentContext.fus.click() }>
                  <span>{buttonName}</span>
                  <input
                    style={ { display: 'none' } }
                    ref={ fus => parentContext.fus = fus }
                    type="file"
                    onChange={ uploaderChangeHandler }
                    multiple={ multi }
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
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
        <div className="col-md-3" key={ index }>
          <div className="col">
            {file.progress !== 100 ? (
              <span
                className="col-md-2"
                style={ {
                  display: file.progress === 100 ? 'none' : ''
                } }
              >
                <i className={iconClassName} /> &nbsp; &nbsp; { file.progress }%
              </span>
            ) : (
              <a id={ `link-${file._id}` } href="#" data-lightbox={stateName} data-title={file.name}>
                <img className="img-fluid hoverable" id={ `img-${file._id}` } src="#" alt={file.name} />
              </a>
            )}
          </div>
          <div className="d-flex justify-content-center">
              <a
                style={{display: file.progress === 100 ? '' : 'none'}}
                onClick={() => {
                let arrayOfImages = [...context.state[stateName]]
                const newArrayOfImages = arrayOfImages.filter((_, i) => i !== index)

                context.setState({ [stateName]: newArrayOfImages })
              }}><i className="fa fa-close" style={{color: '#dc3545'}}/>
              </a>
          </div>
          <br/>
        </div>
      )
    })
  }

  return (
    main ? renderUploadingFile()
      :
      (
        <div className="row">
          <div className="col-3">
            <div className="md-form m-0">
              <i className="fas fa-image prefix" style={{marginTop: '0.3rem'}}/>
              <label style={{color: '#000', marginTop: '0.3rem'}}>{title}</label>
              <input
                style={ { display: 'none' } }
                ref={ fu => parentContext.fu = fu }
                type="file"
                onChange={ uploaderChangeHandler }
                multiple={multi}
              />
            </div>
          </div>
          <div className="col-3">
            <div className="md-form m-0">
              <button
                type="button"
                className="btn btn-default"
                onClick={ () => parentContext.fu.click() }
              >
                <i className="fa fa-download" />
                {buttonName}
              </button>
            </div>
          </div>
          <div className="row mb-1 ml-1 mr-1">
            { renderUploadingFiles() }
          </div>
      </div>
    )
  )
}
