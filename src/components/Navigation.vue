<template>
  <header id="header" class="container-fluid">
    <div class="row" id="nav">
      <div class="col-12">
        <nav :class="[{'navbar--fixed': showShadow}, 'navbar navbar-expand-lg']">
          <router-link to="/" class="navbar-brand">
            <h1 class="navbar-brand-header">SecondHandy</h1>
            <img class="navbar-brand-img"
                 src="../assets/secondhandy.svg"
                 alt="SecondHandy logo"
                 @click="scrollToTop">
          </router-link>
          <button :class="[{'hamburger--active': navOpen}, 'hamburger']"
                  @click="toggleNavigation">
            <span class="hamburger__container">
              <span class="hamburger__inner"></span>
            </span>
          </button>
          <div class="navbar-links">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link">
                  <span @click="scrollAndCloseNavigation">Home</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/szukaj" class="nav-link">
                  <span @click="scrollAndCloseNavigation">Szukaj</span>
                </router-link>
              </li>
            </ul>
            <div class="container-buttons">
              <router-link to="/dodaj-secondhand">
                <button type="button" class="btn btn--primary"
                        @click="scrollAndCloseNavigation">
                  <i class="fas fa-map-marker-alt margin-right"></i>Dodaj sklep
                </button>
              </router-link>
              <router-link to="/logowanie" v-if="!auth">
                <button type="button" class="btn btn--secondary"
                        @click="scrollAndCloseNavigation">
                  <i class="fas fa-sign-in-alt margin-right"></i>Logowanie
                </button>
              </router-link>
              <router-link to="/rejestracja">
                <button type="button" class="btn btn--secondary"
                        @click="scrollAndCloseNavigation">
                  <i class="fas fa-user-plus margin-right"></i>Rejestracja
                </button>
              </router-link>
              <button type="button"
                      class="btn btn--secondary"
                      v-if="auth"
                      @click="logout">
                <i class="fas fa-sign-out-alt margin-right"></i>Wyloguj
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div :class="[{'navbar--clicked': navOpen}, 'wrapper__shadow']"></div>
  </header>
</template>

<script>
import debounce from 'lodash.debounce';

export default {
  name: 'Navigation',
  data() {
    return {
      navOpen: false,
      showShadow: false,
    };
  },
  methods: {
    toggleNavigation() {
      // console.log('Open navigation'); // to delete
      if (this.navOpen) {
        this.navOpen = false;
        return this.navOpen;
      }
      this.navOpen = true;
      return this.navOpen;
    },
    showShadowOnScroll() {
      // console.log('Scroll'); // to delete
      if (window.pageYOffset > 1) {
        this.showShadow = true;
        return this.showShadow;
      }
      this.showShadow = false;
      return this.showShadow;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    scrollAndCloseNavigation() {
      this.toggleNavigation();
      this.scrollToTop();
    },
    logout() {
      this.$store.dispatch('logout');
      this.scrollAndCloseNavigation();
    },
  },
  computed: {
    auth() {
      return this.$store.getters.isAuth;
    },
  },
  created() {
    this.handleDebouncedScroll = debounce(this.showShadowOnScroll, 50);
    window.addEventListener('scroll', this.handleDebouncedScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.showShadowOnScroll);
  },
};
</script>

<style lang="scss" scoped>
  @import "../scss/vars";

  /* Navigation */
  .navbar {
    background-color: white;
    height: #{$navbar-height};
    width: 100%;
    padding: 0 15px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    justify-content: space-between;

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      opacity: 0;
      -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .3);
      -moz-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .3);
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .3);
      -webkit-transition: opacity .1s;
      -moz-transition: opacity .1s;
      -ms-transition: opacity .1s;
      -o-transition: opacity .1s;
      transition: opacity .1s;
      will-change: opacity;
    }
  }

  .navbar--fixed {
    &::after {
      opacity: 1;
    }
  }

  /** Brand **/
  .navbar-brand {
    max-width: 50%;
    padding: 0;
  }

  .navbar-brand-header {
    margin: 0;
    padding: 0;
    height: 0;
    text-indent: -9999px;
  }

  .navbar-brand-img {
    width: auto;
    max-width: 100%;
    height: 3rem;
    margin: .5rem 0;
  }

  /** Hamburger **/
  .hamburger {
    background-color: transparent;
    border: 0;
    margin: 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:focus {
      outline: none;
    }

    @media #{$desktop} {
      display: none;
    }
  }

  .hamburger__container {
    width: 30px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  @mixin hamburger_line {
    background-color: black;
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
  }

  .hamburger__inner {
    @include hamburger_line;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: background-color .2s .2s ease-in-out;
    -moz-transition: background-color .2s .2s ease-in-out;
    -ms-transition: background-color .2s .2s ease-in-out;
    -o-transition: background-color .2s .2s ease-in-out;
    transition: background-color .2s .2s ease-in-out;

    &::before, &::after {
      @include hamburger_line;
      content: '';
      -webkit-transition: transform .2s .2s ease-in-out;
      -moz-transition: transform .2s .2s ease-in-out;
      -ms-transition: transform .2s .2s ease-in-out;
      -o-transition: transform .2s .2s ease-in-out;
      transition: transform .2s .2s ease-in-out;
    }

    &::before {
      top: -8px;
    }

    &::after {
      top: 8px;
    }
  }

  .hamburger--active {
    .hamburger__inner {
      background-color: transparent;
      -webkit-transition: background-color .2s ease-in-out;
      -moz-transition: background-color .2s ease-in-out;
      -ms-transition: background-color .2s ease-in-out;
      -o-transition: background-color .2s ease-in-out;
      transition: background-color .2s ease-in-out;

      &::before {
        -webkit-transform: translateY(8px) rotate(45deg);
        -moz-transform: translateY(8px) rotate(45deg);
        -ms-transform: translateY(8px) rotate(45deg);
        -o-transform: translateY(8px) rotate(45deg);
        transform: translateY(8px) rotate(45deg);
        -webkit-transition: transform .2s ease-in-out;
        -moz-transition: transform .2s ease-in-out;
        -ms-transition: transform .2s ease-in-out;
        -o-transition: transform .2s ease-in-out;
        transition: transform .2s ease-in-out;
      }

      &::after {
        -webkit-transform: translateY(-8px) rotate(-45deg);
        -moz-transform: translateY(-8px) rotate(-45deg);
        -ms-transform: translateY(-8px) rotate(-45deg);
        -o-transform: translateY(-8px) rotate(-45deg);
        transform: translateY(-8px) rotate(-45deg);
        -webkit-transition: transform .2s ease-in-out;
        -moz-transition: transform .2s ease-in-out;
        -ms-transition: transform .2s ease-in-out;
        -o-transition: transform .2s ease-in-out;
        transition: transform .2s ease-in-out;
      }
    }
  }

  /** Links **/
  .navbar-links {
    background-color: white;
    display: flex;
    @media #{$tablet} {
      width: 80vw;
      height: calc(100vh - #{$navbar-height});
      padding: 1rem 0 3.5rem;
      position: absolute;
      top: 4rem;
      left: 0;
      z-index: -1;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-around;
      -webkit-transform: translateX(-130%);
      -moz-transform: translateX(-130%);
      -ms-transform: translateX(-130%);
      -o-transform: translateX(-130%);
      transform: translateX(-130%);
      -webkit-transition: transform .5s .2s ease-in-out;
      -moz-transition: transform .5s .2s ease-in-out;
      -ms-transition: transform .5s .2s ease-in-out;
      -o-transition: transform .5s .2s ease-in-out;
      transition: transform .5s .2s ease-in-out;
    }
    @media #{$tablet-min} and #{$tablet} {
      width: 40vw;
    }
    @media #{$tablet} and (orientation: landscape) {
      width: 60vw;
    }
    @media #{$desktop} {
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
    }
  }

  .nav-item {
    -webkit-transition: color .4s;
    -moz-transition: color .4s;
    -ms-transition: color .4s;
    -o-transition: color .4s;
    transition: color .4s;

    &:hover {
      color: $color-primary;
    }

    span {
      @media #{$tablet} {
        display: block;
      }
    }

    @media #{$tablet} {
      padding: 0 1.5rem;
    }
  }

  @media #{$tablet} {
    .hamburger--active ~ .navbar-links {
      -webkit-transform: translateX(0);
      -moz-transform: translateX(0);
      -ms-transform: translateX(0);
      -o-transform: translateX(0);
      transform: translateX(0);
      -webkit-transition: transform .5s .2s ease-in-out;
      -moz-transition: transform .5s .2s ease-in-out;
      -ms-transition: transform .5s .2s ease-in-out;
      -o-transition: transform .5s .2s ease-in-out;
      transition: transform .5s .2s ease-in-out;
    }
    .hamburger--active ~ .navbar-links::before {
      opacity: 1;
      -webkit-transition: opacity .2s .6s;
      -moz-transition: opacity .2s .6s;
      -ms-transition: opacity .2s .6s;
      -o-transition: opacity .2s .6s;
      transition: opacity .2s .6s;
    }
  }

  .container-buttons {
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @media #{$desktop} {
      padding-right: 0;
      flex-direction: row;
      a {
        margin-right: .5rem;
      }
    }
  }

  .wrapper__shadow {
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, .6);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    z-index: -10;
    -webkit-transition: opacity .3s .2s;
    -moz-transition: opacity .3s .2s;
    -ms-transition: opacity .3s .2s;
    -o-transition: opacity .3s .2s;
    transition: opacity .3s .2s;
  }
  @media #{$tablet} {
    .navbar--clicked {
      opacity: 1;
      z-index: 10;
    }
  }

  .router-link-exact-active {
    color: $color-primary;
  }
</style>
