<template>
  <div class="container content__margin-top">
    <div class="row justify-content-center">
      <the-spinner v-if="loading"/>
      <div class="col-12" v-else>
        <the-shop-details :name="shop.name"
                          :address="shop.address"
                          :city="shop.city"
                          :card-allowed="shop.cardAllowed"
                          :stock="shop.stock"/>
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
    };
  },
  async created() {
    try {
      const { data } = await this.axios.get(`locals/${this.$route.params.id}.json`);
      console.log();
      this.shop = data;
      console.log(this.shop);
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
