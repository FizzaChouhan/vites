import React from 'react'

function Card() {
  return (
    <>
    <div className="container my-5">
  <h2 className="text-center text-light mb-4">Our Services</h2>
  <div className="row g-4">
    <div className="col-md-4">
      <div className="card bg-dark text-light">
        <img src="public/download (6).jpg" className="card-img-top" alt="Service 1"/>
        <div className="card-body">
          <h5 className="card-title">Watches</h5>
          <p className="card-text">Timeless precision, crafted for those who value every moment.</p>
          <a href="#" className="btn btn-outline-light">Add To Cart</a>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card bg-dark text-light">
        <img src="public/download (1).jpg" className="card-img-top" alt="Service 2"/>
        <div className="card-body">
          <h5 className="card-title">Shades</h5>
          <p className="card-text">See the world through the lens of sophistication and clarity.</p>
          <a href="#" className="btn btn-outline-light">Add To Cart</a>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card bg-dark text-light">
        <img src="public/download (2).jpg" className="card-img-top" alt="Service 3"/>
        <div className="card-body">
          <h5 className="card-title">Moneyholders</h5>
          <p className="card-text">Where style meets function — the perfect balance of elegance and utility.</p>
          <a href="#" className="btn btn-outline-light">Add To Cart</a>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Card