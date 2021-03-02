<template>
  <div class="shop__card">
    <img class="shop__img" src="https://via.placeholder.com/500x500.png?text=Photo" alt="">
    <div class="shop__details">
      <h2 class="shop__title">{{name}}</h2>
      <p class="shop__address">{{ fullAddress }}</p>
      <span class="shop__open">Otwarte</span>
      <span class="shop__location"><i class="fas fa-location-arrow"></i>1.8 km</span>
    </div>
    <div class="shop__info__container">
      <p class="shop__header">Informacje</p>
      <ul class="shop__info">
        <li v-if="nearDelivery !== null">
          <i class="fas fa-cart-arrow-down"></i>
          <span v-if="nearDelivery === 0">dzisiaj</span>
          <span v-else>za {{ nearDelivery }} dni</span>
        </li>
        <li><i class="fas fa-tag"></i><span>cena 30 zł/kg</span></li>
        <li v-if="cardAllowed"><i class="far fa-credit-card"></i><span>Płatność kartą</span></li>
      </ul>
    </div>
    <div class="shop__stock__container">
      <p class="shop__header">Asortyment</p>
      <ul class="shop__stock" v-if="stock.length > 0">
        <li v-if="stock.includes('odzież męska')">
          <i class="fas fa-male"></i><span>Odzież męska</span>
        </li>
        <li v-if="stock.includes('odzież damska')">
          <i class="fas fa-female"></i><span>Odzież damska</span>
        </li>
        <li v-if="stock.includes('odzież dziecięca')">
          <i class="fas fa-baby"></i><span>Odzież dziecięca</span>
        </li>
        <li v-if="stock.includes('XXL')">XXL</li>
        <li v-if="stock.includes('kostiumy')">
          <i class="fas fa-mask"></i><span>Kostiumy</span>
        </li>
        <li v-if="stock.includes('pościel')">
          <i class="fas fa-bed"></i><span>Pościel</span>
        </li>
        <li v-if="stock.includes('galanteria')">
          <i class="fas fa-shopping-bag"></i><span>Galanteria</span>
        </li>
      </ul>
      <p class="shop__alert" v-else>Brak informacji o asortymencie</p>
    </div>
    <div v-if="days" class="shop__opening-hours">
      <p class="shop__header">Godziny otwarcia</p>
      <ul>
        <li><span>Poniedziałek:</span><span>{{ openingHours(days.monday) }}</span></li>
        <li><span>Wtorek:</span><span>{{ openingHours(days.tuesday) }}</span></li>
        <li><span>Środa:</span><span>{{ openingHours(days.wednesday) }}</span></li>
        <li><span>Czwartek:</span><span>{{ openingHours(days.thursday) }}</span></li>
        <li><span>Piątek:</span><span>{{ openingHours(days.friday) }}</span></li>
        <li><span>Sobota:</span><span>{{ openingHours(days.saturday) }}</span></li>
        <li><span>Niedziela:</span><span>{{ openingHours(days.sunday) }}</span></li>
      </ul>
    </div>
    <div></div>
    <div>
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
    days: {
      type: Object,
      default: () => {},
    },
    deliveryDay: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    openingHours(day) {
      if (!day.open || !day.close) {
        return '';
      }
      return `${day.open} - ${day.close}`;
    },
  },
  computed: {
    fullAddress() {
      return `${this.address}, ${this.city}`;
    },
    nearDelivery() {
      if (this.deliveryDay.length === 0) {
        return null;
      }
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

        if (aDiff === bDiff) {
          return a < b ? a : b;
        }
        return bDiff < aDiff ? b : a;
      });
      return near;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../scss/vars';

  .shop__card {
    background-color: white;
    margin: 1rem 0;
    padding: 1rem;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-gap: 1rem;

    @media #{$desktop} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: .5fr 1fr;
      grid-template-areas: 'img details info stock'
      'opening-hours opening-hours new new2';
      align-content: start;
    }
  }

  .shop__img {
    width: 100%;
    @media #{$desktop} {
      grid-area: img;
    }
  }

  .shop__details {
    @media #{$desktop} {
      grid-area: details;
    }
  }

  .shop__info__container {
    @media #{$desktop} {
      grid-area: info;
    }
  }

  .shop__stock__container {
    @media #{$desktop} {
      grid-area: stock;
    }
  }

  .shop__opening-hours {
    background-color: $color-third;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    padding: 1rem;
    width: 100%;
    height: auto;
    @media #{$desktop} {
      grid-area: opening-hours;
      align-self: start;
    }

    ul {
      font-size: .9rem;
      padding-left: 0;
      list-style-type: none;

      li {
        display: grid;
        grid-template-columns: .75fr 1fr;
        grid-gap: 1rem;
      }
    }
  }

  .shop__title {
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.4rem;
    margin-bottom: 1rem;
  }

  .shop__header {
    margin-bottom: .5rem;
  }

  .shop__address, .shop__location {
    font-size: 1rem;
    line-height: 1.2rem;
  }

  .shop__location {
    line-height: 1rem;
    padding-left: .5rem;
    text-align: right;

    i {
      margin: .25rem;
    }
  }

  .shop__open, .shop__close {
    color: #228b22;
    font-size: 1rem;
    text-align: right;
  }

  .shop__close {
    color: #ff0000;
  }

  .shop__alert {
    color: #ff0000;
    font-size: .75rem;
    line-height: .9rem;
  }

  .shop__info, .shop__stock {
    color: #f68903;
    padding-left: 0;
    margin: 0;
    list-style: none;

    li {
      margin-right: .25rem;

      span {
        font-size: .75rem;
        vertical-align: middle;
      }

      i {
        margin-right: .5rem;
      }
    }
  }
</style>
