import React from 'react'

function Card() {
  return (
    <>
    <div className="container my-5">
  <h2 className="text-center text-light mb-4">Our Services</h2>
  <div className="row g-4">
    <div className="col-md-4">
      <div className="card bg-dark text-light">
        <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Service 1"/>
        <div className="card-body">
          <h5 className="card-title">Service 1</h5>
          <p className="card-text">High-quality service tailored to your needs.</p>
          <a href="#" className="btn btn-outline-light">Learn More</a>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card bg-dark text-light">
        <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Service 2"/>
        <div className="card-body">
          <h5 className="card-title">Service 2</h5>
          <p className="card-text">Expert solutions delivered with precision.</p>
          <a href="#" className="btn btn-outline-light">Learn More</a>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card bg-dark text-light">
        <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Service 3"/>
        <div className="card-body">
          <h5 className="card-title">Service 3</h5>
          <p className="card-text">Innovative ideas to drive your success.</p>
          <a href="#" className="btn btn-outline-light">Learn More</a>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Card