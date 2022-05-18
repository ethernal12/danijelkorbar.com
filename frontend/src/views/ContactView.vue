<template>
  <div class="container px-5 my-5">
    <form
      action="https://formspree.io/f/mzboywvp"
      method="POST"
      id="contactForm"
  
    >
      <div class="form-floating mb-3">
        <input
          class="form-control"
          id="emailAddress"
          type="email"
          name="email"
          data-sb-validations="required,email"
        />
        <label for="emailAddress" style="color: black">Email Address</label>
        <div class="invalid-feedback" data-sb-feedback="emailAddress:required">
          Email Address is required.
        </div>
        <div class="invalid-feedback" data-sb-feedback="emailAddress:email">
          Email Address Email is not valid.
        </div>
      </div>
      <div class="form-floating mb-3">
        <textarea
          class="form-control"
          id="message"
          name="message"
          type="text"
          style="height: 10rem;"
          data-sb-validations="required"
        >
</textarea
        >
        <label style="color:black" for="message">Message</label>
        <div class="invalid-feedback" data-sb-feedback="message:required">
          Message is required.
        </div>
      </div>
      <div class="d-none" id="submitSuccessMessage">
        <div class="text-center mb-3">
          <div class="fw-bolder">Form submission successful!</div>
          <p>To activate this form, sign up at</p>
          <a href="https://startbootstrap.com/solution/contact-forms"
            >https://startbootstrap.com/solution/contact-forms</a
          >
        </div>
      </div>
      <div class="d-none" id="submitErrorMessage">
        <div class="text-center text-danger mb-3">Error sending message!</div>
      </div>
      <div class="d-grid">
        <button
          class="btn btn-primary btn-lg"
          id="submitButton"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
