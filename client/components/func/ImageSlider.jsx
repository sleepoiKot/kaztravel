import React, { Component } from 'react';

class Slider extends Component {
  render() {
    const { id, images } = this.props

    images.map(imgFile => {
      Meteor.call('get.link', imgFile, (err, res) => {
        if(err) {
          toastr.error(err.reason)
        }
        else {
          const img = document.querySelector(`#img-poster-${imgFile._id}`)
          if(img) img.src = res
        }
      })
    })

    return images ? (
      <div id={id} className="carousel slide carousel-fade" data-ride="carousel">
          <ol className="carousel-indicators">
            {images.map((img, index) => (
              <li key={img._id} data-target={`#${id}`} data-slide-to={index} className={index === 0 ? "active" : null}/>
            ))}
          </ol>
          <div className="carousel-inner" role="listbox">
            {images.map((img, index) => (
              <div key={img._id} className={index === 0 ? "carousel-item active" : "carousel-item"}>
                <img id={`img-poster-${img._id}`} className="d-block w-100" src="#" alt={img.name} />
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" href={`#${id}`} role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href={`#${id}`} role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
    ) : null
  }
}

export default Slider;
