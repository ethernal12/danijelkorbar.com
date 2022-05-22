
<template>
  <div class="container px-5 my-5">
    <form action="https://formspree.io/f/mzboywvp" method="POST" id="contactForm" data-sb-form-api-token=be6a58b7-f669-4ee4-8f8d-5e1989a93ee9>
      <h3>process.env.FORM_ACCESS_KEY</h3>
      <div class="form-floating mb-3">
        <input class="form-control" id="emailAddress" type="email" placeholder="email Address" name="email" data-sb-validations="required,email"  />

        <label for="emailAddress" style="color: black">Your email address:</label>
        <div class="invalid-feedback" data-sb-feedback="emailAddress:required">
          Please type in your email address.
        </div>
        <div class="invalid-feedback" data-sb-feedback="emailAddress:email">
          Email address is not in the right format.
        </div>

      </div>
      <div class="form-floating mb-3">
        <textarea class="form-control" id="message" name="message" placeholder="message"  type="text" style="height: 10rem;"
          data-sb-validations="required">
</textarea>
        <label style="color:black" for="message">Your message:</label>
        <div class="invalid-feedback" data-sb-feedback="message:required">
          Message is required.
        </div>
      </div>
      <div class="d-none" id="submitSuccessMessage">
        <div class="text-center mb-3">
          <div class="fw-bolder">Form submission successful!</div>
          <p>To activate this form, sign up at</p>
          <a
            href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
        </div>
      </div>
      <div class="d-none" id="submitErrorMessage">
        <div class="text-center text-danger mb-3">Error sending message!</div>
      </div>
      <div class="d-grid">
        <button class="btn btn-primary btn-lg" id="submitButton" type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>




</template>





