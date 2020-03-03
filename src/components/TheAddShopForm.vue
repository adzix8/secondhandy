<template>
  <div class="col-lg-12 offset-lg-0 col-md-8 offset-md-2 col-12
          justify-center-section section__login">
    <h2 class="form__title">Dodaj secondhand do bazy danych</h2>
    <form @submit="add">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="group__title">Dane sklepu</h3>
          <div class="form-group mb-3">
            <input type="text"
                   class="form__input"
                   id="email"
                   v-model.trim="$v.name.$model"
                   :class="{ 'form__valid': !$v.name.$dirty ? null : !$v.name.$error,
                   'form__invalid': $v.name.$error }">
            <label class="form__label" for="email">Nazwa</label>
            <span class="form__input--error"
                  v-if="!$v.name.$dirty ? null : !$v.name.required">
              Pole jest wymagane.
            </span>
            <span class="form__input--error"
                  v-if="!$v.name.minLength">
              Nazwa musi składać się z minimum 4 znaków.
            </span>
          </div>
          <div class="form-group mb-3">
            <input type="text"
                   class="form__input"
                   id="address"
                   v-model="$v.address.$model"
                   :class="{ 'form__valid': !$v.address.$dirty ? null : !$v.address.$error,
                   'form__invalid': $v.address.$error }">
            <label class="form__label" for="address">Adres</label>
            <span class="form__input--error"
                  v-if="!$v.address.$dirty ? null : !$v.address.required">
              Pole jest wymagane.
            </span>
            <span class="form__input--error"
                  v-if="!$v.address.minLength">
              Adres musi składać się z minimum 6 znaków.
            </span>
          </div>
          <div class="row">
            <div class="col">
              <div class="form-group mb-3">
                <input type="text"
                       class="form__input"
                       id="city"
                       v-model="$v.city.$model"
                       :class="{ 'form__valid': !$v.city.$dirty ? null : !$v.city.$error,
                       'form__invalid': $v.city.$error }">
                <label class="form__label" for="city">Miasto</label>
                <span class="form__input--error"
                      v-if="!$v.city.$dirty ? null : !$v.city.required">
                  Pole jest wymagane.
                </span>
                    <span class="form__input--error"
                          v-if="!$v.city.minLength">
                  Miasto musi składać się z minimum 3 znaków.
                </span>
              </div>
            </div>
            <div class="col">
              <div class="form-group mb-3">
                <input type="text"
                       class="form__input"
                       id="postcode"
                       v-model="$v.postCode.$model"
                       :class="{ 'form__valid': !$v.postCode.$dirty ? null : !$v.postCode.$error,
                       'form__invalid': $v.postCode.$error }">
                <label class="form__label" for="postcode">Kod pocztowy</label>
                <span class="form__input--error"
                      v-if="!$v.postCode.$dirty ? null : !$v.postCode.required">
                  Pole jest wymagane.
                </span>
                <span class="form__input--error"
                      v-if="!$v.postCode.numeric">
                  Dopuszczalne tylko cyfry (0-9).
                </span>
                <span class="form__input--error"
                      v-if="!$v.postCode.minLength || !$v.postCode.maxLength">
                  Kod pocztowy musi składać się z 5 cyfr.
                </span>
              </div>
            </div>
          </div>
          <h3 class="group__title">Dni dostawy</h3>
          <div class="group__box">
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="deliveryMonday"
                     value="1"
                     v-model="deliveryDay">
              <label class="custom-control-label" for="deliveryMonday">Poniedziałek</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="deliveryTuesday"
                     value="2"
                     v-model="deliveryDay">
              <label class="custom-control-label" for="deliveryTuesday">Wtorek</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="deliveryWednesday"
                     value="3"
                     v-model="deliveryDay">
              <label class="custom-control-label" for="deliveryWednesday">Środa</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="deliveryThursday"
                     value="4"
                     v-model="deliveryDay">
              <label class="custom-control-label" for="deliveryThursday">Czwartek</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="deliveryFriday"
                     value="5"
                     v-model="deliveryDay">
              <label class="custom-control-label" for="deliveryFriday">Piątek</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="deliverySaturday"
                     value="6"
                     v-model="deliveryDay">
              <label class="custom-control-label" for="deliverySaturday">Sobota</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="deliverySunday"
                     value="7"
                     v-model="deliveryDay">
              <label class="custom-control-label" for="deliverySunday">Niedziela</label>
            </div>
            <p>Zaznaczone: {{ deliveryDay }}</p>
          </div>
          <h3 class="group__title">Płatność kartą</h3>
          <div class="group__box">
            <div class="custom-control custom-radio">
              <input type="radio"
                     id="noPaymentCard"
                     name="payment"
                     class="custom-control-input"
                     value="false"
                     v-model="cardAllowed">
              <label class="custom-control-label" for="noPaymentCard">Nie</label>
            </div>
            <div class="custom-control custom-radio">
              <input type="radio"
                     id="paymentCard"
                     name="payment"
                     class="custom-control-input"
                     value="true"
                     v-model="cardAllowed">
              <label class="custom-control-label" for="paymentCard">Tak</label>
            </div>
            <p>Zaznaczone: {{ cardAllowed }}</p>
          </div>
          <h3 class="group__title">Asortyment</h3>
          <div class="group__box">
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="stock1"
                     value="1"
                     v-model="stock">
              <label class="custom-control-label" for="stock1">Odzież męska</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="stock2"
                     value="2"
                     v-model="stock">
              <label class="custom-control-label" for="stock2">Odzież damska</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="stock3"
                     value="3"
                     v-model="stock">
              <label class="custom-control-label" for="stock3">Odzież dziecięca</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="stock4"
                     value="4"
                     v-model="stock">
              <label class="custom-control-label" for="stock4">XXL</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="stock5"
                     value="5"
                     v-model="stock">
              <label class="custom-control-label" for="stock5">Kostiumy</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="stock6"
                     value="6"
                     v-model="stock">
              <label class="custom-control-label" for="stock6">Galanteria</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="stock7"
                     value="7"
                     v-model="stock">
              <label class="custom-control-label" for="stock7">Pościel</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="stock8"
                     value="8"
                     v-model="stock">
              <label class="custom-control-label" for="stock8">Gry i zabawki</label>
            </div>
            <p>Wybrane: {{ stock }}</p>
          </div>
        </div>
        <div class="col-lg-6">
          <h3 class="group__title">Godziny otwarcia</h3>
          <div class="group__box group__align">
            <span class="group__name">Poniedziałek</span>
            <div class="row">
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text" class="form__input" id="mondayOpen">
                  <label class="form__label" for="mondayOpen">Od</label>
                </div>
              </div>
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text" class="form__input" id="mondayClose">
                  <label class="form__label" for="mondayClose">Do</label>
                </div>
              </div>
            </div>
          </div>
          <div class="group__box group__align">
            <span class="group__name">Wtorek</span>
            <div class="row">
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text" class="form__input" id="tuesdayOpen">
                  <label class="form__label" for="tuesdayOpen">Od</label>
                </div>
              </div>
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text" class="form__input" id="tuesdayClose">
                  <label class="form__label" for="tuesdayClose">Do</label>
                </div>
              </div>
            </div>
          </div>
          <div class="group__box group__align">
            <span class="group__name">Środa</span>
            <div class="row">
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text" class="form__input" id="wednesdayOpen">
                  <label class="form__label" for="wednesdayOpen">Od</label>
                </div>
              </div>
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text" class="form__input" id="wednesdayClose">
                  <label class="form__label" for="wednesdayClose">Do</label>
                </div>
              </div>
            </div>
          </div>
          <div class="group__box group__align">
            <span class="group__name">Czwartek</span>
            <div class="row">
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text" class="form__input" id="thursdayOpen">
                  <label class="form__label" for="thursdayOpen">Od</label>
                </div>
              </div>
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text" class="form__input" id="thursdayClose">
                  <label class="form__label" for="thursdayClose">Do</label>
                </div>
              </div>
            </div>
          </div>
          <div class="group__box group__align">
            <span class="group__name">Piątek</span>
            <div class="row">
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text" class="form__input" id="fridayOpen">
                  <label class="form__label" for="fridayOpen">Od</label>
                </div>
              </div>
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text" class="form__input" id="fridayClose">
                  <label class="form__label" for="fridayClose">Do</label>
                </div>
              </div>
            </div>
          </div>
          <div class="group__box group__align">
            <span class="group__name">Sobota</span>
            <div class="row">
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text" class="form__input" id="saturdayOpen">
                  <label class="form__label" for="saturdayOpen">Od</label>
                </div>
              </div>
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text" class="form__input" id="saturdayClose">
                  <label class="form__label" for="saturdayClose">Do</label>
                </div>
              </div>
            </div>
          </div>
          <div class="group__box group__align">
            <span class="group__name">Niedziela</span>
            <div class="row">
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text" class="form__input" id="sundayOpen">
                  <label class="form__label" for="sundayOpen">Od</label>
                </div>
              </div>
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text" class="form__input" id="sundayClose">
                  <label class="form__label" for="sundayClose">Do</label>
                </div>
              </div>
            </div>
          </div>
          <the-upload-photo></the-upload-photo>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-lg-6 offset-lg-3">
          <button type="submit" class="btn btn--primary m-0">
            <i class="fas fa-plus margin-right"></i>Dodaj
          </button>
        </div>
      </div>
    </form>
    <pre>{{ output }}</pre>
  </div>
</template>

<script>
import {
  required, minLength, maxLength, numeric,
} from 'vuelidate/lib/validators';
import TheUploadPhoto from './TheUploadPhoto.vue';

const API = 'https://secondhandy-e3052.firebaseio.com';

export default {
  name: 'TheAddShopForm',
  components: {
    TheUploadPhoto,
  },
  data() {
    return {
      name: '',
      address: '',
      city: '',
      postCode: '',
      deliveryDay: [],
      cardAllowed: false,
      stock: [],
      output: '',
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    address: {
      required,
      minLength: minLength(6),
    },
    city: {
      required,
      minLength: minLength(3),
    },
    postCode: {
      required,
      numeric,
      minLength: minLength(5),
      maxLength: maxLength(5),
    },
  },
  methods: {
    add(event) {
      event.preventDefault();
      const currentObj = this;
      const config = {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: '40fb22c9-28f1-4219-bcde-24df755e575a',
        },
      };
      this.axios.post(`${API}/locals.json`, {
        name: this.name,
        address: this.address,
        city: this.city,
        postcode: this.postcode,
        deliveryDay: this.deliveryDay,
        cardAllowed: this.cardAllowed,
        stock: this.stock,
      }, config)
        .then((response) => {
          currentObj.output = response.data;
        })
        .catch((error) => {
          currentObj.output = error;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";

.group__name {
  width: 100%;
  @media #{$tablet-min} {
    width: auto;
    margin-right: .75rem;
  }
}
.group__box {
  display: flex;
  flex-direction: column;
  @media #{$tablet-min} {
    flex-direction: row;
    flex-wrap: wrap;
  }
  &.group__align {
    justify-content: space-between;
    align-items: center;
  }
}
.custom-checkbox, .custom-radio {
  margin-right: .75rem;
}
</style>
