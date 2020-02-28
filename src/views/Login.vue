<template>
  <main>
    <section class="bg--white content__margin-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-lg-4 col-md-8 offset-md-2 col-12
          justify-center-section section__login">
            <h2 class="form__title">Zaloguj się przez e-mail</h2>
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
