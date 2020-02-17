<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

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
