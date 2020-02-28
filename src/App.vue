<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
@import "scss/vars";

/* Custom styles*/
body {
  color: black;
  background-color: #e6e6e6;
  font: normal 1rem/1.5rem "Helvetica Neue", Arial, sans-serif;
}
a {
  color: inherit;
  &:hover {
    color: inherit;
    text-decoration: none;
  }
}
.margin-right {
  margin-right: .75rem;
}
.justify-center-section {
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
}
.bg--white {
  background-color: #ffffff;
}
.section__bg {
  min-height: calc(100vh - #{$navbar-height});
}
.section__login {
  min-height: calc(100vh - #{$navbar-height});
}
.content__margin-top {
  margin-top: #{$navbar-height};
}

/* Buttons */
.btn {
  width: 100%;
  margin-bottom: .5rem;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  white-space: nowrap;
  -webkit-transition: background-color .4s, color .4s;
  -moz-transition: background-color .4s, color .4s;
  -ms-transition: background-color .4s, color .4s;
  -o-transition: background-color .4s, color .4s;
  transition: background-color .4s, color .4s;
  @media #{$desktop} {
    margin-left: .75rem;
    margin-bottom: 0;
  }
}
.btn--secondary {
  background-color: white;
  color: $color-primary;
  border: 2px solid $color-primary;
  &:hover {
    background-color: $color-primary;
    color: white;
  }
}
.btn--primary {
  background-color: $color-primary;
  color: white;
  border: 2px solid $color-primary;
  &:hover {
    background-color: $color-primary-light;
    color: white;
  }
}
.form__title {
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
  &.form__valid {
    border-bottom-color: $color-primary;
  }
  &:focus ~ .form__label, &.form__valid ~ .form__label, &.form__invalid ~ .form__label {
    color: $color-primary;
    font-size: .75rem;
    -webkit-transform: translateY(-1rem);
    -moz-transform: translateY(-1rem);
    -ms-transform: translateY(-1rem);
    -o-transform: translateY(-1rem);
    transform: translateY(-1rem);
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
.form__input--error {
  color: #ff0000;
  font-size: .75rem;
}

/* First bg - content section */
.first-bg {
  background: url("assets/bg-first.svg") white no-repeat fixed;
  background-size: cover;
}

/*Content*/
.logo-svg {
  width: auto;
  height: 20vh;
  margin-bottom: 1rem;
}
.form-group {
  position: relative;
  font-size: 1.2rem;
  margin: 0;
}
.fa-left {
  position: absolute;
  top: .9rem;
  left: .9rem;
}
.fa-right {
  position: absolute;
  top: .9rem;
  right: .9rem;
}
.form__height--small {
  height: 3rem;
}
.control--primary {
  background-color: white;
  color: black;
  border: none;
  height: 3rem;
  padding: 0 2.5rem 0 2rem;
  -webkit-box-shadow: $box-shadow;
  -moz-box-shadow: $box-shadow;
  box-shadow: $box-shadow;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  border-radius: 50px;
  &:focus {
    border: none;
    -webkit-box-shadow: $box-shadow-focus;
    -moz-box-shadow: $box-shadow-focus;
    box-shadow: $box-shadow-focus;
  }
}
.control--primary[placeholder] {
  font-size: .9rem;
  text-align: center;
}
.custom-control-input, .custom-control-label {
  &:hover {
    cursor: pointer;
  }
}
.custom-control-input:checked ~ .custom-control-label::before {
  background-color: $color-primary;
  border-color: $color-primary;
}
.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {
  border-color: $color-primary;
}
.custom-control-input:focus ~ .custom-control-label::before {
  box-shadow: 0 0 0 0.2rem $color-primary-light;
}
</style>
