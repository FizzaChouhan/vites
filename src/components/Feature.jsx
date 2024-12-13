import React from 'react'

function Feature() {
  return (
   <>
   <section className="py-5 bg-light">
  <div className="container">
    <div className="row">
      <div className="col-md-4 text-center">
        <i className="bi bi-laptop fs-1 text-primary"></i>
        <h4>Responsive Design</h4>
        <p>Our website looks great on all devices.</p>
      </div>
      <div className="col-md-4 text-center">
        <i className="bi bi-shield-lock fs-1 text-success"></i>
        <h4>Secure</h4>
        <p>We prioritize your data privacy and security.</p>
      </div>
      <div className="col-md-4 text-center">
        <i className="bi bi-speedometer2 fs-1 text-danger"></i>
        <h4>Performance</h4>
        <p>Experience fast loading and smooth navigation.</p>
      </div>
    </div>
  </div>
</section>

   </>
  )
}

export default Feature