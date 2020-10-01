<template>
  <main>
    <section class="bg--white content__margin-top">
      <div class="container">
        <div class="row">
          <the-add-shop-form></the-add-shop-form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TheAddShopForm from '../components/TheAddShopForm.vue';

export default {
  name: 'AddShop',
  components: { TheAddShopForm },
};
</script>

<style lang="scss" scoped>
</style>
