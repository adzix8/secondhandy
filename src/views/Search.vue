<template>
  <section class="search__list content__margin-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12 justify-center-section">
          <form class="form__height--small" @submit="onSubmit">
            <div class="form-group">
                <i class="fas fa-search fa-right"></i>
                <input type="text"
                       class="form-control control--primary search-control"
                       placeholder="Podaj nazwę miasta"
                       v-model="searchValue">
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12" v-if="filterShops.length === 0 && !loading">
          <p class="text-danger text-center">Nie znaleziono żadnych pasujących wyników</p>
        </div>
        <div class="col-lg-6 col-12">
          <div class="row justify-content-center">
            <div class="loadingio-spinner-double-ring-b0m3dgw7ual" v-if="loading">
              <div class="ldio-c8hs6rv92mh">
                <div></div><div></div><div><div></div></div><div><div></div></div>
              </div>
            </div>
            <div class="col-12"
                 v-else
                 v-for="(shop, nodeId) in filterShops"
                 :key="nodeId">
              <Shop :name="shop.name"
                    :address="shop.address"
                    :city="shop.city"
                    :card-allowed="shop.cardAllowed"
                    :stock="shop.stock"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import debounce from 'lodash.debounce';
import Shop from '../components/Shop.vue';

export default {
  name: 'Search',
  components: {
    Shop,
  },
  data() {
    return {
      loading: true,
      auth: '',
      shops: [],
      searchValue: '',
    };
  },
  async created() {
    try {
      // const url = firebase.db.ref('locals').equalTo('Szczecin');
      // const { data } = await this.axios.get(url, {
      //   headers: {
      //     'Access-Control-Allow-Origin': '*',
      //   },
      // });
      const { data } = await this.axios.get('locals.json');
      this.shops = data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
    this.locatorButtonPressed();
  },
  computed: {
    /* eslint-disable*/
    filterShops: function() {
      if (!this.searchValue) {
        return this.shops;
      }

      let shops = Object.values(this.shops);
      const cities = shops.filter(shop => shop.city.toString().toLowerCase().includes(this.searchValue.toString().toLowerCase()));
      const names = shops.filter(shop => shop.name.toString().toLowerCase().includes(this.searchValue.toString().toLowerCase()));

      if (cities.length > 0 && names.length > 0) {
        shops = shops.filter(shop => shop.city.toString().toLowerCase().includes(this.searchValue.toString().toLowerCase()));
        shops = shops.filter(shop => shop.name.toString().toLowerCase().includes(this.searchValue.toString().toLowerCase()));
      } else if (cities.length > 0) {
        shops = shops.filter(shop => shop.city.toString().toLowerCase().includes(this.searchValue.toString().toLowerCase()));
      } else {
        shops = shops.filter(shop => shop.name.toString().toLowerCase().includes(this.searchValue.toString().toLowerCase()));
      }

      console.log(shops);
      return shops;
    },
    /* eslint-enable */
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
    },
    /* eslint-disable*/
    locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position.coords.latitude);
          console.log(position.coords.longitude);
        },
        error => {
          console.log(error.message);
        },
      )
    }
    /* eslint-enable */

  },
};
</script>

<style lang="scss" scoped>
  @keyframes ldio-c8hs6rv92mh {
    0% { transform: rotate(0) }
    100% { transform: rotate(360deg) }
  }
  .ldio-c8hs6rv92mh div { box-sizing: border-box!important }
  .ldio-c8hs6rv92mh > div {
    position: absolute;
    width: 138px;
    height: 138px;
    top: 31px;
    left: 31px;
    border-radius: 50%;
    border: 10px solid #000;
    border-color: #f68903 transparent #f68903 transparent;
    animation: ldio-c8hs6rv92mh 1.2658227848101264s linear infinite;
  }

  .ldio-c8hs6rv92mh > div:nth-child(2), .ldio-c8hs6rv92mh > div:nth-child(4) {
    width: 114px;
    height: 114px;
    top: 43px;
    left: 43px;
    animation: ldio-c8hs6rv92mh 1.2658227848101264s linear infinite reverse;
  }
  .ldio-c8hs6rv92mh > div:nth-child(2) {
    border-color: transparent #fbbd72 transparent #fbbd72
  }
  .ldio-c8hs6rv92mh > div:nth-child(3) { border-color: transparent }
  .ldio-c8hs6rv92mh > div:nth-child(3) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }
  .ldio-c8hs6rv92mh > div:nth-child(3) div:before, .ldio-c8hs6rv92mh > div:nth-child(3) div:after {
    content: "";
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    top: -10px;
    left: 54px;
    background: #f68903;
    border-radius: 50%;
    box-shadow: 0 128px 0 0 #f68903;
  }
  .ldio-c8hs6rv92mh > div:nth-child(3) div:after {
    left: -10px;
    top: 54px;
    box-shadow: 128px 0 0 0 #f68903;
  }

  .ldio-c8hs6rv92mh > div:nth-child(4) { border-color: transparent; }
  .ldio-c8hs6rv92mh > div:nth-child(4) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }
  .ldio-c8hs6rv92mh > div:nth-child(4) div:before, .ldio-c8hs6rv92mh > div:nth-child(4) div:after {
    content: "";
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    top: -10px;
    left: 42px;
    background: #fbbd72;
    border-radius: 50%;
    box-shadow: 0 104px 0 0 #fbbd72;
  }
  .ldio-c8hs6rv92mh > div:nth-child(4) div:after {
    left: -10px;
    top: 42px;
    box-shadow: 104px 0 0 0 #fbbd72;
  }
  .loadingio-spinner-double-ring-b0m3dgw7ual {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: none;
  }
  .ldio-c8hs6rv92mh {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-c8hs6rv92mh div { box-sizing: content-box; }
</style>
