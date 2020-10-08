<template>
  <div class="search__item">
    <img class="item__img" src="https://via.placeholder.com/500x500.png?text=Photo" alt="">
    <div class="item__content">
      <div class="item__row">
        <div class="item__col--left">
          <h2 class="item__title">{{name}}</h2>
          <span class="item__address">{{ fullAddress }}</span>
        </div>
        <div class="item__col--right">
          <span class="item__open">Otwarte</span>
          <span class="item__location"><i class="fas fa-location-arrow"></i>1.8 km</span>
        </div>
      </div>
      <ul class="item__list-1">
        <li><i class="fas fa-cart-arrow-down"></i><span>za 3dni</span></li>
        <li><i class="fas fa-tag"></i><span>30 zł/kg</span></li>
        <li v-if="cardAllowed"><i class="far fa-credit-card"></i></li>
      </ul>
      <ul class="item__list-2">
        <li v-if="stock.includes('odzież męska')"><i class="fas fa-male"></i></li>
        <li v-if="stock.includes('odzież damska')"><i class="fas fa-female"></i></li>
        <li v-if="stock.includes('odzież dziecięca')"><i class="fas fa-baby"></i></li>
        <li v-if="stock.includes('XXL')">XXL</li>
        <li v-if="stock.includes('kostiumy')"><i class="fas fa-mask"></i></li>
        <li v-if="stock.includes('pościel')"><i class="fas fa-bed"></i></li>
        <li v-if="stock.includes('galanteria')"><i class="fas fa-shopping-bag"></i></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheShopDetails',
  props: {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    cardAllowed: {
      type: Boolean,
    },
    stock: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    fullAddress() {
      return `${this.address}, ${this.city}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .search__list {
    background-color: #fbbd72;
  }

  .search__item {
    background-color: white;
    margin: 1rem 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    cursor: pointer;
  }

  .item__img {
    width: 40%; }
  @media (min-width: 992px) {
    .item__img {
      width: 20%; } }

  .item__content {
    width: 60%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: .5rem; }
  @media (min-width: 992px) {
    .item__content {
      width: 80%;
      flex-direction: row;
      flex-wrap: nowrap; } }

  .item__title {
    font-size: 1rem;
    margin-bottom: .5rem; }

  .item__address, .item__location {
    font-size: .75rem;
    line-height: 1.2rem; }

  .item__location {
    line-height: 1rem;
    padding-left: .5rem;
    text-align: right; }
  .item__location i {
    margin: .25rem; }

  .item__open, .item__close {
    color: #228b22;
    font-size: .8rem;
    text-align: right; }

  .item__close {
    color: #ff0000; }

  .item__x {
    color: #000000;
    font-size: 2rem;
    padding: .5rem;
    position: absolute;
    top: -1.25rem;
    right: 0;
    cursor: pointer; }

  .item__list-1, .item__list-2 {
    color: #f68903;
    padding-left: 0;
    margin: 0;
    list-style: none; }
  .item__list-1 li, .item__list-2 li {
    margin-right: .25rem;
    display: inline-flex; }
  .item__list-1 li span, .item__list-2 li span {
    font-size: .75rem;
    margin-left: .25rem; }
  @media (min-width: 992px) {
    .item__list-1, .item__list-2 {
      margin-left: 1rem;
      text-align: right; } }
  .item__row {
    margin-bottom: .5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between; }

  .item__col--left, .item__col--right {
    display: flex;
    flex-direction: column; }

  .item__col--right {
    justify-content: right; }
</style>
