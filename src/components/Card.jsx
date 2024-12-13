import React from 'react'

function Card() {
  return (
    <>
    <div className="container my-5">
  <div className="row g-4">
    <div className="col-md-4">
      <div className="card">
        <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Service 1"/>
        <div className="card-body">
          <h5 className="card-title">Service 1</h5>
          <p className="card-text">Description of service 1 goes here.</p>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Service 2"/>
        <div className="card-body">
          <h5 className="card-title">Service 2</h5>
          <p className="card-text">Description of service 2 goes here.</p>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Service 3"/>
        <div className="card-body">
          <h5 className="card-title">Service 3</h5>
          <p className="card-text">Description of service 3 goes here.</p>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Card