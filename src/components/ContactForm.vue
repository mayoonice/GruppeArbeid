<template>
  <div class="contact-form">
    <h3>Contact Us!</h3>
    <form
      class="contact-form__form"
      action=""
      ref="form"
      @submit.prevent="sendEmail"
    >
      <div class="contact-form__name">
        <!--<label>Name</label>-->
        <input type="text" name="name" placeholder="Name" />
      </div>
      <div class="contact-form__email">
        <!--<label>Email</label>-->
        <input type="text" name="email" placeholder="Email" />
      </div>
      <div class="contact-form__message">
        <!--<label>Message</label>-->
        <input
          class="contact-form__message--textbox"
          type="text"
          name="message"
          placeholder="Your Message"
        />
        <input
          class="contact-form__message--submit"
          type="submit"
          value="Send"
        />
      </div>
    </form>
  </div>
</template>

<script>
</script>

<style>
.contact-form {
  margin-left: 1em;
  margin-top: 1em;
}

.contact-form__form {
  display: grid;
}

.contact-form div {
  padding: 50px;
}

.contact-form__message {
  display: flex;
  align-items: flex-end;
}
.contact-form__message--textbox {
  height: 40vh;
  width: 50vw;
}
</style>