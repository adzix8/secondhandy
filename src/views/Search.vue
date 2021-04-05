<template>
  <section class="search__list content__margin-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12 justify-center-section">
          <form @submit="onSubmit">
            <div class="form-group mb-2">
              <select class="form-control"
                      id="cities"
                      placeholder="Wybierz miasto"
                      v-model="city">
                <option value="">Wszystkie miasta</option>
                <option v-for="city in getCities" :key="city.id">{{ city }}</option>
              </select>
            </div>
            <div class="form-group">
                <i class="fas fa-search fa-right"></i>
                <input type="text"
                       class="form-control control--primary search-control"
                       placeholder="Wpisz nazwę secondhandu"
                       v-model="searchValue">
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12" v-if="getShops.length === 0 && !loading">
          <p class="text-danger text-center">Nie znaleziono żadnych pasujących wyników</p>
        </div>
        <div class="col-lg-6 col-12">
          <div class="row justify-content-center">
            <the-spinner v-if="loading"/>
            <div class="col-12"
                 v-else
                 v-for="(shop) in getShops"
                 :key="shop.id">
              <Shop :name="shop.name"
                    :address="shop.address"
                    :city="shop.city"
                    :card-allowed="shop.cardAllowed"
                    :stock="shop.stock"
                    :days="shop.days"
                    :shop-node="shop.id"
                    :delivery-day="shop.deliveryDay"
                    @click="showDetails(shop.id)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Shop from '../components/Shop.vue';
import TheSpinner from '../components/TheSpinner.vue';

export default {
  name: 'Search',
  components: {
    TheSpinner,
    Shop,
  },
  data() {
    return {
      loading: false,
      auth: '',
    };
  },
  async created() {
    this.loading = true;
    await this.$store.dispatch('getShops');
    this.loading = false;
    this.locatorButtonPressed();
  },
  computed: {
    getShops() {
      return this.$store.getters.shops;
    },
    getCities() {
      return this.$store.getters.cities;
    },
    searchValue: {
      get() {
        return this.$store.getters.searchValue;
      },
      async set(value) {
        this.loading = true;
        await this.$store.commit('changeSearchValue', value);
        await this.$store.dispatch('getShops');
        this.loading = false;
      },
    },
    city: {
      get() {
        return this.$store.getters.city;
      },
      async set(value) {
        this.loading = true;
        await this.$store.commit('changeCity', value);
        await this.$store.dispatch('getShops');
        this.loading = false;
      },
    },
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
    },
    /* eslint-enable */
    showDetails(id) {
      this.$router.push(`/sklep/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
