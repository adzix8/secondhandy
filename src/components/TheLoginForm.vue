<template>
  <div class="row">
    <div class="col-lg-4 offset-lg-4 col-md-8 offset-md-2 col-12
    justify-center-section section__login">
      <h2 class="form__title">Zaloguj się przez e-mail</h2>
      <form class="mb-3">
        <div class="form-group mb-3">
          <input type="text"
                 class="form__input"
                 id="email"
                 autocomplete="username"
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
                 autocomplete="current-password"
                 v-model="$v.password.$model"
                 :class="{ 'form__valid': !$v.password.$dirty ? null : !$v.email.$error,
                 'form__invalid': $v.password.$error }">
          <label class="form__label" for="password">Hasło</label>
          <span class="form__input--error"
                v-if="!$v.password.$dirty ? null : !$v.password.required">
            Hasło jest wymagane.
          </span>
          <span class="form__input--error"
                v-if="!$v.password.minLength">
            Hasło powinno zawierać min. 8 znaków.
          </span>
        </div>
        <button type="submit" class="btn btn--primary m-0" @click="onSubmit">
          <i class="fas fa-sign-in-alt margin-right"></i>Zaloguj
        </button>
      </form>
      <p class="mb-2">Nie masz jeszcze konta?</p>
      <router-link to="/rejestracja">
        <button type="button" class="btn btn--secondary m-0 mb-3">
          <i class="fas fa-user-plus margin-right"></i>Załóż darmowe konto
        </button>
      </router-link>
      <button type="button" class="btn btn--fb m-0 mb-3">
        <i class="fab fa-facebook-f margin-right"></i>Zaloguj się przez Facebooka
      </button>
      <button type="button" class="btn btn--google m-0">
        <i class="fab fa-google margin-right"></i>Zaloguj się przez Google
      </button>
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
  name: 'Login',
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
      await this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
        returnSecureToken: true,
      });
      this.$router.push({ name: 'add-shop' });
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../scss/vars";

  .btn--fb {
    background-color: white;
    color: #3b5998;
    border: 2px solid #3b5998;
    &:hover {
      background-color: #3b5998;
      color: white;
    }
  }
  .btn--google {
    background-color: white;
    color: #db4437;
    border: 2px solid #db4437;
    &:hover {
      background-color: #db4437;
      color: white;
    }
  }
</style>
