<template>
  <div class="search__item" @click="show">
    <img class="item__img" src="https://via.placeholder.com/500x500.png?text=Photo" alt="">
    <div class="item__content">
      <div class="item__col--left">
        <h2 class="item__title">{{name}}</h2>
        <span class="item__address">{{ fullAddress }}</span>
      </div>
      <div class="item__col--right">
        <span class="item__open">Otwarte</span>
        <span class="item__location"><i class="fas fa-location-arrow"></i>1.8 km</span>
      </div>
      <ul class="item__list-1">
        <li v-if="nearDelivery !== null">
          <i class="fas fa-cart-arrow-down"></i>
          <span v-if="nearDelivery === 0">dzisiaj</span>
          <span v-else>za {{ nearDelivery }} dni</span>
        </li>
        <li v-if="getPriceToday">
          <i class="fas fa-tag"></i>
          <span>{{ getPriceToday }}</span>
        </li>
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
  name: 'Shop',
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
    days: {
      type: Object,
      default: () => {},
    },
    shopNode: {
      type: String,
    },
    deliveryDay: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    fullAddress() {
      return `${this.address}, ${this.city}`;
    },
    nearDelivery() {
      if (this.deliveryDay.length === 0) return null;
      const today = new Date().getDay();
      const days = [
        'niedziela',
        'poniedziałek',
        'wtorek',
        'środa',
        'czwartek',
        'piątek',
        'sobota',
      ];
      const delivery = [];
      this.deliveryDay.forEach((element, index) => {
        delivery[index] = days.indexOf(element);
      });
      delivery.forEach((element, index) => {
        if (element - today < 0) {
          delivery[index] = element - today + 7;
        } else {
          delivery[index] = element - today;
        }
      });
      const near = delivery.reduce((a, b) => {
        const aDiff = Math.abs(a - today);
        const bDiff = Math.abs(b - today);

        if (aDiff === bDiff) return a < b ? a : b;
        return bDiff < aDiff ? b : a;
      });
      return near;
    },
    getPriceToday() {
      const days = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
      ];
      const today = new Date().getDay();
      const day = days[today];
      const price = this.days[day].priceList;
      switch (price.method) {
        case 'sztuka':
          price.method = 'szt.';
          break;
        default:
          price.method = 'kg';
      }

      if (!price) return null;
      return `${price.price} zł / ${price.method}`;
    },
  },
  methods: {
    show(event) {
      this.$emit('click', event);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../scss/vars";

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
    opacity: 0;
    -webkit-transform: translateY(1rem);
    -moz-transform: translateY(1rem);
    -ms-transform: translateY(1rem);
    -o-transform: translateY(1rem);
    transform: translateY(1rem);
    animation: showItem .4s ease-in-out;
    animation-fill-mode: forwards;
  }

  .item__img {
    width: 40%;
    @media #{$desktop} {
        width: 20%;
    }
  }

  .item__content {
    width: 60%;
    padding: .5rem;
    display: grid;
    grid-template-columns: 4fr 2fr;
    grid-template-rows: .75fr .25fr .25fr;
    grid-template-areas:
            'title location'
            'list-1 list-1'
            'list-2 list-2';
    grid-gap: .25rem;

    @media #{$desktop} {
      width: 80%;
      grid-template-columns: 4fr 2fr 2fr 2fr;
      grid-template-rows: none;
      grid-template-areas:
              'title location list-1 list-2';
      grid-gap: 1rem;
    }
  }

  .item__title {
    font-size: 1rem;
    line-height: 1.15rem;
    height: 2.3rem;
    margin-bottom: .25rem;
  }

  .item__address, .item__location, .item__open, .item__close {
    display: block;
    font-size: .75rem;
    line-height: .9rem;
  }

  .item__location {
    line-height: 1rem;
    padding-left: .5rem;
    text-align: right;

    @media #{$desktop} {
      text-align: center;
    }

    i {
      margin: .25rem;
    }
  }

  .item__open, .item__close {
    color: #228b22;
    text-align: right;

    @media #{$desktop} {
      text-align: center;
    }
  }

  .item__close {
    color: #ff0000;
  }

  .item__x {
    color: #000000;
    font-size: 2rem;
    padding: .5rem;
    position: absolute;
    top: -1.25rem;
    right: 0;
    cursor: pointer;
  }

  .item__list-1, .item__list-2 {
    color: #f68903;
    padding-left: 0;
    margin: 0;
    list-style: none;

    li {
      margin-right: .25rem;
      display: inline-block;

      span {
        font-size: .75rem;
        margin-left: .25rem;
      }
    }
  }

  .item__list-1 {
    grid-area: list-1;
    justify-self: center;

    li {
      margin-right: .5rem;
    }

    @media #{$desktop} {
      li {
        line-height: 1rem;
        display: flex;
        margin-bottom: .5rem;
      }
    }
  }

  .item__list-2 {
    grid-area: list-2;
    justify-self: center;
  }

  .item__col--left {
    grid-area: title;
  }

  .item__col--right {
    grid-area: location;
  }

  @keyframes showItem {
    from {
      opacity: 0;
      -webkit-transform: translateY(1rem);
      -moz-transform: translateY(1rem);
      -ms-transform: translateY(1rem);
      -o-transform: translateY(1rem);
      transform: translateY(1rem);
    }
    to {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }
</style>
