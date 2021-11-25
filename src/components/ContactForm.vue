<template>
  <form action="" ref="form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="name" />
    <label>Email</label>
    <input type="text" name="email" />
    <label>Message</label>
    <input type="submit" value="Send" />
  </form>
</template>

<script>
export default {
  components: {
    ContactForm,
  },

  data() {
    return {};
  },

  methods: {
    log() {},
  },
};
</script>

<style>
</style>