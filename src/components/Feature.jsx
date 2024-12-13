import React from 'react'

function Feature() {
  return (
   <>
   <section className="bg-black text-light py-5">
  <div className="container">
    <h2 className="text-center mb-4">Why Choose Us</h2>
    <div className="row text-center">
      <div className="col-md-4">
        <i className="bi bi-laptop fs-1 text-primary"></i>
        <h4 className="mt-3">Modern Design</h4>
        <p>Beautiful, responsive designs for all devices.</p>
      </div>
      <div className="col-md-4">
        <i className="bi bi-shield-lock fs-1 text-success"></i>
        <h4 className="mt-3">Secure</h4>
        <p>Top-notch security for all your data.</p>
      </div>
      <div className="col-md-4">
        <i className="bi bi-speedometer2 fs-1 text-danger"></i>
        <h4 className="mt-3">Fast Performance</h4>
        <p>Lightning-fast speeds and optimized for SEO.</p>
      </div>
    </div>
  </div>
</section>


   </>
  )
}

export default Feature