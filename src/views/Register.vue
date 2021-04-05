<template>
  <main>
    <section class="bg--white content__margin-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-lg-4 col-md-8 offset-md-2 col-12
    justify-center-section section__login">
            <h2 class="form__title">Załóż konto</h2>
            <form class="mb-3">
              <div class="form-group mb-3">
                <input type="text"
                       class="form__input"
                       id="email"
                       v-model.trim="$v.email.$model"
                       :class="{ 'form__valid': !$v.email.$dirty ? null : !$v.email.$error,
                 'form__invalid': $v.email.$error }">
                <label class="form__label" for="email">E-mail</label>
                <span class="form__input--error"
                      v-if="!$v.email.$dirty ? null : !$v.email.required">
                  E-mail jest wymagany.
                </span>
                <span class="form__input--error"
                      v-if="!$v.email.$dirty ? null : !$v.email.email">
                  Niepoprawny email.
                </span>
              </div>
              <div class="form-group mb-3">
                <input type="password"
                       class="form__input"
                       id="password"
                       v-model="$v.password.$model"
                       :class="{ 'form__valid': !$v.password.$dirty ? null : !$v.email.$error,
                 'form__invalid': $v.password.$error }">
                <label class="form__label" for="password">Hasło</label>
                <span class="form__input--error"
                      v-if="!$v.password.$dirty ? null : !$v.password.required">
                  E-mail jest wymagany.
                </span>
                <span class="form__input--error"
                      v-if="!$v.password.minLength">
                  Hasło powinno zawierać min. 8 znaków.
                </span>
              </div>
              <button type="submit" class="btn btn--primary m-0" @click="onSubmit">
                <i class="fas fa-sign-in-alt margin-right"></i>Zarejestruj
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
    },
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      this.$v.$touch();
      if (!this.$v.$invalid) {
        await this.$store.dispatch('register', {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        });
        await this.$router.push({ name: 'add-shop' });
      }
    },
  },
};
</script>

<style scoped>

</style>
