import React from 'react'
import IMG from './assest/slider.jpg';
import IMG2 from './assest/slider.jpg'
import IMG3 from './assest/slider.jpg'
import'./slider.css';
function Slider() {
  return (
    <>
<div
  id="carouselExampleControls"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={IMG} className="d-block w-100 " alt="..." />
    </div>
    <div className="carousel-item">
      <img src={IMG2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={IMG3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}

export default Slider