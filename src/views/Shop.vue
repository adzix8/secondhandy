<template>
  <div class="container content__margin-top">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <the-spinner v-if="loading"/>
      </div>
      <div class="col-lg-2 btn__wrapper" v-if="!loading">
        <button type="button" class="btn btn--back" @click="back">
          <i class="fas fa-chevron-left fa-2x margin-right"></i>
        </button>
      </div>
      <div class="col-lg-8" v-if="!loading && shop">
        <div class="shop__container">
          <the-shop-details :name="shop.name"
                            :address="shop.address"
                            :city="shop.city"
                            :card-allowed="shop.cardAllowed"
                            :stock="shop.stock"
                            :days="shop.days"
                            :delivery-day="shop.deliveryDay" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheShopDetails from '../components/TheShopDetails.vue';
import TheSpinner from '../components/TheSpinner.vue';

export default {
  name: 'Shop',
  components: {
    TheSpinner,
    TheShopDetails,
  },
  data() {
    return {
      loading: true,
      shop: {},
      shopNode: null,
    };
  },
  async created() {
    try {
      const { data } = await this.axios.get(`locals/${this.$route.params.id}.json`);
      console.log();
      this.shop = data;
      console.log(data);
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    back() {
      window.scrollTo(0, 0);
      this.$router.push({ name: 'search' });
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../scss/vars';

  .btn__wrapper {
    margin-top: 1rem;
  }

  .btn--back {
    text-align: left;
    margin-bottom: 0;
    @media #{$desktop} {
      text-align: right;
    }
  }
</style>
