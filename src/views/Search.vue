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
                      @change="changeCity">
                <option value="">Wszystkie miasta</option>
                <option v-for="city in cities" :key="city.id">{{ city }}</option>
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
        <div class="col-12" v-if="filterShops.length === 0 && !loading">
          <p class="text-danger text-center">Nie znaleziono żadnych pasujących wyników</p>
        </div>
        <div class="col-lg-6 col-12">
          <div class="row justify-content-center">
            <the-spinner v-if="loading"/>
            <div class="col-12"
                 v-else
                 v-for="(shop) in filterShops"
                 :key="shop.id">
              <Shop :name="shop.name"
                    :address="shop.address"
                    :city="shop.city"
                    :card-allowed="shop.cardAllowed"
                    :stock="shop.stock"
                    :shop-node="shop.id"
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
      loading: true,
      auth: '',
      shops: [],
      cities: [],
      city: '',
      searchValue: '',
    };
  },
  async created() {
    try {
      const { data } = await this.axios.get('locals.json');
      this.shops = data;
      this.loading = false;
      this.getCities(this.shops);
    } catch (error) {
      console.log(error);
    }
    this.locatorButtonPressed();
  },
  computed: {
    /* eslint-disable*/
    filterShops: function() {
      const keys = Object.keys(this.shops);
      let shops = Object.values(this.shops);
      shops.forEach((value,index) => {
        shops[index]['id'] = keys[index];
      });

      if (this.searchValue === '' && this.city === '') {
        // console.log('First', shops);
        return shops;
      }

      shops = shops.filter(shop => shop.city.toString().toLowerCase().includes(this.city.toString().toLowerCase()));
      console.log(shops);
      shops = shops.filter(shop => shop.name.toString().toLowerCase().includes(this.searchValue.toString().toLowerCase()));

      this.loading = true;
      window.setTimeout(() => {
        this.loading = false;
      }, 100);

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
    },
    /* eslint-enable */
    showDetails(id) {
      this.$router.push(`/sklep/${id}`);
    },
    getCities(shops) {
      const shopsList = (Object.values(shops));
      for (let i = 0; i < shopsList.length; i += 1) {
        if (!this.cities.includes(shopsList[i].city)) {
          this.cities.push(shopsList[i].city);
        }
      }
    },
    changeCity(event) {
      this.city = event.target.value;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
