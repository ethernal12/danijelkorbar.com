
<template>
  <div class="container px-5 my-5">
    <form action="https://formspree.io/f/mzboywvp" method="POST" id="contactForm" >
      <h3>Get in touch with me!</h3>
      <div class="form-floating mb-3">
        <input class="form-control" id="emailAddress" type="email" placeholder="email Address" name="email" required />

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
           required>
</textarea>
        <label style="color:black" for="message">Your message:</label>
        
      </div>
 
    
      <div class="d-grid">
        <button class="btn btn-primary btn-lg" id="submitButton" type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>




</template>





