<template>
  <main>
    <section class="bg--white content__margin-top">
      <div class="container">
        <the-login-form></the-login-form>
      </div>
    </section>
  </main>
</template>

<script>
import TheLoginForm from '../components/TheLoginForm.vue';

export default {
  name: 'Login',
  components: { TheLoginForm },
};
</script>

<style lang="scss" scoped>
</style>
