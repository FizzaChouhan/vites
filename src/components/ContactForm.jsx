import React from 'react'

function ContactForm() {
  return (
    <>
   <section className="py-5">
  <div className="container">
    <h2 className="text-center mb-4">Contact Us</h2>
    <form>
      <div className="mb-3">
        <label for="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
      </div>
      <div className="mb-3">
        <label for="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
      </div>
      <div className="mb-3">
        <label for="message" className="form-label">Message</label>
        <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
</section>

    </>
  )
}

export default ContactForm