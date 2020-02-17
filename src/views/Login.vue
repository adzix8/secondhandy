<template>
  <main>
    <section class="bg--white content__margin-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-lg-4 col-md-8 offset-md-2 col-12
          justify-center-section section__login">
            <h2 class="title-login">Zaloguj się przez e-mail</h2>
            <form class="mb-3">
              <div class="form-group mb-3">
                <input type="text" class="form__input" id="email" required>
                <label class="form__label" for="email">E-mail</label>
              </div>
              <div class="form-group mb-3">
                <input type="password" class="form__input" id="password" required>
                <label class="form__label" for="password">Hasło</label>
              </div>
              <button type="submit" class="btn btn--primary m-0">
                <i class="fas fa-sign-in-alt margin-right"></i>Zaloguj
              </button>
            </form>
            <p class="mb-2">Nie masz jeszcze konta?</p>
            <button type="button" class="btn btn--secondary m-0 mb-3">
              <i class="fas fa-user-plus margin-right"></i>Załóż darmowe konto
            </button>
            <button type="button" class="btn btn--fb m-0 mb-3">
              <i class="fab fa-facebook-f margin-right"></i>Zaloguj się przez Facebooka
            </button>
            <button type="button" class="btn btn--google m-0">
              <i class="fab fa-google margin-right"></i>Zaloguj się przez Google
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "../scss/vars";

.title-login {
  font-size: 1.5rem;
  text-align: center;
}
.form__input {
  color: #000000;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid $color-secondary;
  font-size: 1rem;
  width: 100%;
  padding: .5rem 0 .25rem;
  margin-top: .5rem;
  -webkit-transition: border-bottom-color .4s;
  -moz-transition: border-bottom-color .4s;
  -ms-transition: border-bottom-color .4s;
  -o-transition: border-bottom-color .4s;
  transition: border-bottom-color .4s;
  &:focus {
    outline: none;
    border-bottom-color: $color-primary;
  }
  &:focus, &:valid {
    & ~ .form__label {
      color: $color-primary;
      font-size: .75rem;
      -webkit-transform: translateY(-1rem);
      -moz-transform: translateY(-1rem);
      -ms-transform: translateY(-1rem);
      -o-transform: translateY(-1rem);
      transform: translateY(-1rem);
    }
  }
}
.form__label {
  font-size: 1rem;
  position: absolute;
  top: .85rem;
  left: 0;
  -webkit-transition: transform .4s, font-size .4s, color .4s;
  -moz-transition: transform .4s, font-size .4s, color .4s;
  -ms-transition: transform .4s, font-size .4s, color .4s;
  -o-transition: transform .4s, font-size .4s, color .4s;
  transition: transform .4s, font-size .4s, color .4s;
}
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
