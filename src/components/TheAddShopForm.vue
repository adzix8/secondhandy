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
            <label class="form__label" for="email">Nazwa *</label>
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
            <label class="form__label" for="address">Adres *</label>
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
                <label class="form__label" for="city">Miasto *</label>
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
                <label class="form__label" for="postcode">Kod pocztowy *</label>
                <span class="form__input--error"
                      v-if="!$v.postCode.$dirty ? null : !$v.postCode.required">
                  Pole jest wymagane.
                </span>
                <span class="form__input--error"
                      v-if="!$v.postCode.helpers">
                  Niepoprawny format, np. 11-111.
                </span>
              </div>
            </div>
          </div>
          <p>* Pola wymagane</p>
          <h3 class="group__title">Dni dostawy</h3>
          <div class="group__box">
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="deliveryMonday"
                     value="poniedziałek"
                     v-model="deliveryDay">
              <label class="custom-control-label" for="deliveryMonday">Poniedziałek</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="deliveryTuesday"
                     value="wtorek"
                     v-model="deliveryDay">
              <label class="custom-control-label" for="deliveryTuesday">Wtorek</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="deliveryWednesday"
                     value="środa"
                     v-model="deliveryDay">
              <label class="custom-control-label" for="deliveryWednesday">Środa</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="deliveryThursday"
                     value="czwartek"
                     v-model="deliveryDay">
              <label class="custom-control-label" for="deliveryThursday">Czwartek</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="deliveryFriday"
                     value="piatek"
                     v-model="deliveryDay">
              <label class="custom-control-label" for="deliveryFriday">Piątek</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="deliverySaturday"
                     value="sobota"
                     v-model="deliveryDay">
              <label class="custom-control-label" for="deliverySaturday">Sobota</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="deliverySunday"
                     value="niedziela"
                     v-model="deliveryDay">
              <label class="custom-control-label" for="deliverySunday">Niedziela</label>
            </div>
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
          </div>
          <h3 class="group__title">Asortyment</h3>
          <div class="group__box">
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="stock1"
                     value="odzież męska"
                     v-model="stock">
              <label class="custom-control-label" for="stock1">Odzież męska</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="stock2"
                     value="odzież damska"
                     v-model="stock">
              <label class="custom-control-label" for="stock2">Odzież damska</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="stock3"
                     value="odzież dziecięca"
                     v-model="stock">
              <label class="custom-control-label" for="stock3">Odzież dziecięca</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="stock4"
                     value="XXL"
                     v-model="stock">
              <label class="custom-control-label" for="stock4">XXL</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="stock5"
                     value="kostiumy"
                     v-model="stock">
              <label class="custom-control-label" for="stock5">Kostiumy</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="stock6"
                     value="galanteria"
                     v-model="stock">
              <label class="custom-control-label" for="stock6">Galanteria</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="stock7"
                     value="pościel"
                     v-model="stock">
              <label class="custom-control-label" for="stock7">Pościel</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox"
                     class="custom-control-input"
                     id="stock8"
                     value="gry i zabawki"
                     v-model="stock">
              <label class="custom-control-label" for="stock8">Gry i zabawki</label>
            </div>
          </div>
          <h3 class="group__title">Cennik</h3>
          <div class="group__box group--center group--nowrap">
            <span class="group__name name__width--auto">Poniedziałek</span>
            <div class="custom-control custom-radio">
              <input type="radio"
                     id="mondayMethodKilogram"
                     name="mondayMethod"
                     class="custom-control-input"
                     value="kilogram"
                     v-model="days.monday.priceList.method">
              <label class="custom-control-label" for="mondayMethodKilogram">kilogram</label>
            </div>
            <div class="custom-control custom-radio">
              <input type="radio"
                     id="mondayMethodPiece"
                     name="mondayMethod"
                     class="custom-control-input"
                     value="sztuka"
                     v-model="days.monday.priceList.method">
              <label class="custom-control-label" for="mondayMethodPiece">sztuka</label>
            </div>
            <div class="form-group mb-3">
              <input type="number"
                     class="form__input"
                     id="mondayPrice"
                     v-model.number="days.monday.priceList.price"
                     :class="{ 'form__valid': !days.monday.priceList.price
                     ? null : !$v.days.monday.priceList.price.$error,
                     'form__invalid': $v.days.monday.priceList.price.$error }">
              <label class="form__label" for="mondayPrice">Cena (zł)</label>
              <span class="form__input--error"
                    v-if="!$v.days.monday.priceList.price.minValue">
                Cena powinna być większa od 0.
              </span>
              <span class="form__input--error"
                    v-if="!$v.days.monday.priceList.price.helpers">
                Niepoprawny format ceny.
              </span>
            </div>
          </div>
          <div class="group__box group--center group--nowrap">
            <span class="group__name name__width--auto">Wtorek</span>
            <div class="custom-control custom-radio">
              <input type="radio"
                     id="tuesdayMethodKilogram"
                     name="tuesdayMethod"
                     class="custom-control-input"
                     value="kilogram"
                     v-model="days.tuesday.priceList.method">
              <label class="custom-control-label" for="tuesdayMethodKilogram">kilogram</label>
            </div>
            <div class="custom-control custom-radio">
              <input type="radio"
                     id="tuesdayMethodPiece"
                     name="tuesdayMethod"
                     class="custom-control-input"
                     value="sztuka"
                     v-model="days.tuesday.priceList.method">
              <label class="custom-control-label" for="tuesdayMethodPiece">sztuka</label>
            </div>
            <div class="form-group mb-3">
              <input type="number"
                     class="form__input"
                     id="tuesdayPrice"
                     v-model.number="days.tuesday.priceList.price"
                     :class="{ 'form__valid': !days.tuesday.priceList.price
                     ? null : !$v.days.tuesday.priceList.price.$error,
                     'form__invalid': $v.days.tuesday.priceList.price.$error }">
              <label class="form__label" for="tuesdayPrice">Cena (zł)</label>
              <span class="form__input--error"
                    v-if="!$v.days.tuesday.priceList.price.minValue">
                Cena powinna być większa od 0.
              </span>
              <span class="form__input--error"
                    v-if="!$v.days.tuesday.priceList.price.helpers">
                Niepoprawny format ceny.
              </span>
            </div>
          </div>
          <div class="group__box group--center group--nowrap">
            <span class="group__name name__width--auto">Środa</span>
            <div class="custom-control custom-radio">
              <input type="radio"
                     id="wednesdayMethodKilogram"
                     name="wednesdayMethod"
                     class="custom-control-input"
                     value="kilogram"
                     v-model="days.wednesday.priceList.method">
              <label class="custom-control-label" for="wednesdayMethodKilogram">kilogram</label>
            </div>
            <div class="custom-control custom-radio">
              <input type="radio"
                     id="wednesdayMethodPiece"
                     name="wednesdayMethod"
                     class="custom-control-input"
                     value="sztuka"
                     v-model="days.wednesday.priceList.method">
              <label class="custom-control-label" for="wednesdayMethodPiece">sztuka</label>
            </div>
            <div class="form-group mb-3">
              <input type="number"
                     class="form__input"
                     id="wednesdayPrice"
                     v-model.number="days.wednesday.priceList.price"
                     :class="{ 'form__valid': !days.wednesday.priceList.price
                     ? null : !$v.days.wednesday.priceList.price.$error,
                     'form__invalid': $v.days.wednesday.priceList.price.$error }">
              <label class="form__label" for="wednesdayPrice">Cena (zł)</label>
              <span class="form__input--error"
                    v-if="!$v.days.wednesday.priceList.price.minValue">
                Cena powinna być większa od 0.
              </span>
              <span class="form__input--error"
                    v-if="!$v.days.wednesday.priceList.price.helpers">
                Niepoprawny format ceny.
              </span>
            </div>
          </div>
          <div class="group__box group--center group--nowrap">
            <span class="group__name name__width--auto">Czwartek</span>
            <div class="custom-control custom-radio">
              <input type="radio"
                     id="thursdayMethodKilogram"
                     name="thursdayMethod"
                     class="custom-control-input"
                     value="kilogram"
                     v-model="days.thursday.priceList.method">
              <label class="custom-control-label" for="thursdayMethodKilogram">kilogram</label>
            </div>
            <div class="custom-control custom-radio">
              <input type="radio"
                     id="thursdayMethodPiece"
                     name="thursdayMethod"
                     class="custom-control-input"
                     value="sztuka"
                     v-model="days.thursday.priceList.method">
              <label class="custom-control-label" for="thursdayMethodPiece">sztuka</label>
            </div>
            <div class="form-group mb-3">
              <input type="number"
                     class="form__input"
                     id="thursdayPrice"
                     v-model.number="days.thursday.priceList.price"
                     :class="{ 'form__valid': !days.thursday.priceList.price
                     ? null : !$v.days.thursday.priceList.price.$error,
                     'form__invalid': $v.days.thursday.priceList.price.$error }">
              <label class="form__label" for="thursdayPrice">Cena (zł)</label>
              <span class="form__input--error"
                    v-if="!$v.days.thursday.priceList.price.minValue">
                Cena powinna być większa od 0.
              </span>
              <span class="form__input--error"
                    v-if="!$v.days.thursday.priceList.price.helpers">
                Niepoprawny format ceny.
              </span>
            </div>
          </div>
          <div class="group__box group--center group--nowrap">
            <span class="group__name name__width--auto">Piątek</span>
            <div class="custom-control custom-radio">
              <input type="radio"
                     id="fridayMethodKilogram"
                     name="fridayMethod"
                     class="custom-control-input"
                     value="kilogram"
                     v-model="days.friday.priceList.method">
              <label class="custom-control-label" for="fridayMethodKilogram">kilogram</label>
            </div>
            <div class="custom-control custom-radio">
              <input type="radio"
                     id="fridayMethodPiece"
                     name="fridayMethod"
                     class="custom-control-input"
                     value="sztuka"
                     v-model="days.friday.priceList.method">
              <label class="custom-control-label" for="fridayMethodPiece">sztuka</label>
            </div>
            <div class="form-group mb-3">
              <input type="number"
                     class="form__input"
                     id="fridayPrice"
                     v-model.number="days.friday.priceList.price"
                     :class="{ 'form__valid': !days.friday.priceList.price
                     ? null : !$v.days.friday.priceList.price.$error,
                     'form__invalid': $v.days.friday.priceList.price.$error }">
              <label class="form__label" for="fridayPrice">Cena (zł)</label>
              <span class="form__input--error"
                    v-if="!$v.days.friday.priceList.price.minValue">
                Cena powinna być większa od 0.
              </span>
              <span class="form__input--error"
                    v-if="!$v.days.friday.priceList.price.helpers">
                Niepoprawny format ceny.
              </span>
            </div>
          </div>
          <div class="group__box group--center group--nowrap">
            <span class="group__name name__width--auto">Sobota</span>
            <div class="custom-control custom-radio">
              <input type="radio"
                     id="saturdayMethodKilogram"
                     name="saturdayMethod"
                     class="custom-control-input"
                     value="kilogram"
                     v-model="days.saturday.priceList.method">
              <label class="custom-control-label" for="saturdayMethodKilogram">kilogram</label>
            </div>
            <div class="custom-control custom-radio">
              <input type="radio"
                     id="saturdayMethodPiece"
                     name="saturdayMethod"
                     class="custom-control-input"
                     value="sztuka"
                     v-model="days.saturday.priceList.method">
              <label class="custom-control-label" for="saturdayMethodPiece">sztuka</label>
            </div>
            <div class="form-group mb-3">
              <input type="number"
                     class="form__input"
                     id="saturdayPrice"
                     v-model.number="days.saturday.priceList.price"
                     :class="{ 'form__valid': !days.saturday.priceList.price
                     ? null : !$v.days.saturday.priceList.price.$error,
                     'form__invalid': $v.days.saturday.priceList.price.$error }">
              <label class="form__label" for="saturdayPrice">Cena (zł)</label>
              <span class="form__input--error"
                    v-if="!$v.days.saturday.priceList.price.minValue">
                Cena powinna być większa od 0.
              </span>
              <span class="form__input--error"
                    v-if="!$v.days.saturday.priceList.price.helpers">
                Niepoprawny format ceny.
              </span>
            </div>
          </div>
          <div class="group__box group--center group--nowrap">
            <span class="group__name name__width--auto">Niedziela</span>
            <div class="custom-control custom-radio">
              <input type="radio"
                     id="sundayMethodKilogram"
                     name="sundayMethod"
                     class="custom-control-input"
                     value="kilogram"
                     v-model="days.sunday.priceList.method">
              <label class="custom-control-label" for="sundayMethodKilogram">kilogram</label>
            </div>
            <div class="custom-control custom-radio">
              <input type="radio"
                     id="sundayMethodPiece"
                     name="sundayMethod"
                     class="custom-control-input"
                     value="sztuka"
                     v-model="days.sunday.priceList.method">
              <label class="custom-control-label" for="sundayMethodPiece">sztuka</label>
            </div>
            <div class="form-group mb-3">
              <input type="number"
                     class="form__input"
                     id="sundayPrice"
                     v-model.number="days.sunday.priceList.price"
                     :class="{ 'form__valid': !days.sunday.priceList.price
                     ? null : !$v.days.sunday.priceList.price.$error,
                     'form__invalid': $v.days.sunday.priceList.price.$error }">
              <label class="form__label" for="sundayPrice">Cena (zł)</label>
              <span class="form__input--error"
                    v-if="!$v.days.sunday.priceList.price.minValue">
                Cena powinna być większa od 0.
              </span>
              <span class="form__input--error"
                    v-if="!$v.days.sunday.priceList.price.helpers">
                Niepoprawny format ceny.
              </span>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <h3 class="group__title">Godziny otwarcia</h3>
          <div class="group__box group--center">
            <span class="group__name">Poniedziałek</span>
            <div class="row">
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text"
                         class="form__input"
                         id="mondayOpen"
                         v-model="days.monday.open"
                         :class="{ 'form__valid': !days.monday.open
                         ? null : !$v.days.monday.open.$error,
                         'form__invalid': $v.days.monday.open.$error }">
                  <label class="form__label" for="mondayOpen">Od</label>
                  <span class="form__input--error"
                        v-if="!$v.days.monday.open.helpers">
                    Niepoprawny format godziny, np. 12:00
                  </span>
                </div>
              </div>
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text"
                         class="form__input"
                         id="mondayClose"
                         v-model="days.monday.close"
                         :class="{ 'form__valid': !days.monday.close
                         ? null : !$v.days.monday.close.$error,
                         'form__invalid': $v.days.monday.close.$error }">
                  <label class="form__label" for="mondayClose">Do</label>
                  <span class="form__input--error"
                        v-if="!$v.days.monday.close.helpers">
                    Niepoprawny format godziny, np. 12:00
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="group__box group--center">
            <span class="group__name">Wtorek</span>
            <div class="row">
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text"
                         class="form__input"
                         id="tuesdayOpen"
                         v-model="days.tuesday.open"
                         :class="{ 'form__valid': !days.tuesday.open
                         ? null : !$v.days.tuesday.open.$error,
                         'form__invalid': $v.days.tuesday.open.$error }">
                  <label class="form__label" for="tuesdayOpen">Od</label>
                  <span class="form__input--error"
                        v-if="!$v.days.tuesday.open.helpers">
                    Niepoprawny format godziny, np. 12:00
                  </span>
                </div>
              </div>
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text"
                         class="form__input"
                         id="tuesdayClose"
                         v-model="days.tuesday.close"
                         :class="{ 'form__valid': !days.tuesday.close
                         ? null : !$v.days.tuesday.close.$error,
                         'form__invalid': $v.days.tuesday.close.$error }">
                  <label class="form__label" for="tuesdayClose">Do</label>
                  <span class="form__input--error"
                        v-if="!$v.days.tuesday.close.helpers">
                    Niepoprawny format godziny, np. 12:00
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="group__box group--center">
            <span class="group__name">Środa</span>
            <div class="row">
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text"
                         class="form__input"
                         id="wednesdayOpen"
                         v-model="days.wednesday.open"
                         :class="{ 'form__valid': !days.wednesday.open
                         ? null : !$v.days.wednesday.open.$error,
                         'form__invalid': $v.days.wednesday.open.$error }">
                  <label class="form__label" for="wednesdayOpen">Od</label>
                  <span class="form__input--error"
                        v-if="!$v.days.wednesday.open.helpers">
                    Niepoprawny format godziny, np. 12:00
                  </span>
                </div>
              </div>
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text"
                         class="form__input"
                         id="wednesdayClose"
                         v-model="days.wednesday.close"
                         :class="{ 'form__valid': !days.wednesday.close
                         ? null : !$v.days.wednesday.close.$error,
                         'form__invalid': $v.days.wednesday.close.$error }">
                  <label class="form__label" for="wednesdayClose">Do</label>
                  <span class="form__input--error"
                        v-if="!$v.days.wednesday.close.helpers">
                    Niepoprawny format godziny, np. 12:00
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="group__box group--center">
            <span class="group__name">Czwartek</span>
            <div class="row">
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text"
                         class="form__input"
                         id="thursdayOpen"
                         v-model="days.thursday.open"
                         :class="{ 'form__valid': !days.thursday.open
                         ? null : !$v.days.thursday.open.$error,
                         'form__invalid': $v.days.thursday.open.$error }">
                  <label class="form__label" for="thursdayOpen">Od</label>
                  <span class="form__input--error"
                        v-if="!$v.days.thursday.open.helpers">
                    Niepoprawny format godziny, np. 12:00
                  </span>
                </div>
              </div>
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text"
                         class="form__input"
                         id="thursdayClose"
                         v-model="days.thursday.close"
                         :class="{ 'form__valid': !days.thursday.close
                         ? null : !$v.days.thursday.close.$error,
                         'form__invalid': $v.days.thursday.close.$error }">
                  <label class="form__label" for="thursdayClose">Do</label>
                  <span class="form__input--error"
                        v-if="!$v.days.thursday.close.helpers">
                    Niepoprawny format godziny, np. 12:00
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="group__box group--center">
            <span class="group__name">Piątek</span>
            <div class="row">
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text"
                         class="form__input"
                         id="fridayOpen"
                         v-model="days.friday.open"
                         :class="{ 'form__valid': !days.friday.open
                         ? null : !$v.days.friday.open.$error,
                         'form__invalid': $v.days.friday.open.$error }">
                  <label class="form__label" for="fridayOpen">Od</label>
                  <span class="form__input--error"
                        v-if="!$v.days.friday.open.helpers">
                    Niepoprawny format godziny, np. 12:00
                  </span>
                </div>
              </div>
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text"
                         class="form__input"
                         id="fridayClose"
                         v-model="days.friday.close"
                         :class="{ 'form__valid': !days.friday.close
                         ? null : !$v.days.friday.close.$error,
                         'form__invalid': $v.days.friday.close.$error }">
                  <label class="form__label" for="fridayClose">Do</label>
                  <span class="form__input--error"
                        v-if="!$v.days.friday.close.helpers">
                    Niepoprawny format godziny, np. 12:00
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="group__box group--center">
            <span class="group__name">Sobota</span>
            <div class="row">
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text"
                         class="form__input"
                         id="saturdayOpen"
                         v-model="days.saturday.open"
                         :class="{ 'form__valid': !days.saturday.open
                         ? null : !$v.days.saturday.open.$error,
                         'form__invalid': $v.days.saturday.open.$error }">
                  <label class="form__label" for="saturdayOpen">Od</label>
                  <span class="form__input--error"
                        v-if="!$v.days.saturday.open.helpers">
                    Niepoprawny format godziny, np. 12:00
                  </span>
                </div>
              </div>
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text"
                         class="form__input"
                         id="saturdayClose"
                         v-model="days.saturday.close"
                         :class="{ 'form__valid': !days.saturday.close
                         ? null : !$v.days.saturday.close.$error,
                         'form__invalid': $v.days.saturday.close.$error }">
                  <label class="form__label" for="saturdayClose">Do</label>
                  <span class="form__input--error"
                        v-if="!$v.days.saturday.close.helpers">
                    Niepoprawny format godziny, np. 12:00
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="group__box group--center">
            <span class="group__name">Niedziela</span>
            <div class="row">
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text"
                         class="form__input"
                         id="sundayOpen"
                         v-model="days.sunday.open"
                         :class="{ 'form__valid': !days.sunday.open
                         ? null : !$v.days.sunday.open.$error,
                         'form__invalid': $v.days.sunday.open.$error }">
                  <label class="form__label" for="sundayOpen">Od</label>
                  <span class="form__input--error"
                        v-if="!$v.days.sunday.open.helpers">
                    Niepoprawny format godziny, np. 12:00
                  </span>
                </div>
              </div>
              <div class="col">
                <div class="form-group mb-3">
                  <input type="text"
                         class="form__input"
                         id="sundayClose"
                         v-model="days.sunday.close"
                         :class="{ 'form__valid': !days.sunday.close
                         ? null : !$v.days.sunday.close.$error,
                         'form__invalid': $v.days.sunday.close.$error }">
                  <label class="form__label" for="sundayClose">Do</label>
                  <span class="form__input--error"
                        v-if="!$v.days.sunday.close.helpers">
                    Niepoprawny format godziny, np. 12:00
                  </span>
                </div>
              </div>
            </div>
          </div>
          <h3 class="group__title">Dodaj zdjęcie profilowe</h3>
          <div class="form-group file-area" v-if="!hasUpload">
            <input type="file" name="image" id="image" @input="fileSelected">
            <div class="file-dummy">
              <i class="fas fa-upload fa-2x"></i>
            </div>
            <div class="file__help-tip">
              <i class="fas fa-info-circle margin-right"></i>
              Zdjęcie powinno być kwadratowe, format 1x1.
            </div>
          </div>
          <div class="photo__wrapper" v-if="hasUpload">
            <img :src="imageUrl" alt="" class="photo__element">
            <span class="photo__close" @click="removePhoto">
              <i class="fas fa-times"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-lg-6 offset-lg-3">
          <button type="submit" class="btn btn--primary m-0" @click="add">
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
  required, minLength, minValue, helpers,
} from 'vuelidate/lib/validators';

const price = helpers.regex('price', /^\d*(,\d{1,2})*(\.\d{1,2})?$/);
const postCode = helpers.regex('postCode', /^\d{2}-\d{3}$/);
const time = helpers.regex('time', /^(2[0-3]|[01]?[0-9]):([0-5][0-9])$/);

export default {
  name: 'TheAddShopForm',
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
      days: {
        monday: {
          open: '',
          close: '',
          priceList: {
            method: 'kilogram',
            price: null,
          },
        },
        tuesday: {
          open: '',
          close: '',
          priceList: {
            method: 'kilogram',
            price: null,
          },
        },
        wednesday: {
          open: '',
          close: '',
          priceList: {
            method: 'kilogram',
            price: null,
          },
        },
        thursday: {
          open: '',
          close: '',
          priceList: {
            method: 'kilogram',
            price: null,
          },
        },
        friday: {
          open: '',
          close: '',
          priceList: {
            method: 'kilogram',
            price: null,
          },
        },
        saturday: {
          open: '',
          close: '',
          priceList: {
            method: 'kilogram',
            price: null,
          },
        },
        sunday: {
          open: '',
          close: '',
          priceList: {
            method: 'kilogram',
            price: null,
          },
        },
      },
      image: null,
      imageUrl: '',
      hasUpload: false,
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
      helpers: postCode,
    },
    days: {
      monday: {
        open: {
          helpers: time,
        },
        close: {
          helpers: time,
        },
        priceList: {
          price: {
            helpers: price,
            minValue: minValue(0.01),
          },
        },
      },
      tuesday: {
        open: {
          helpers: time,
        },
        close: {
          helpers: time,
        },
        priceList: {
          price: {
            helpers: price,
            minValue: minValue(0.01),
          },
        },
      },
      wednesday: {
        open: {
          helpers: time,
        },
        close: {
          helpers: time,
        },
        priceList: {
          price: {
            helpers: price,
            minValue: minValue(0.01),
          },
        },
      },
      thursday: {
        open: {
          helpers: time,
        },
        close: {
          helpers: time,
        },
        priceList: {
          price: {
            helpers: price,
            minValue: minValue(0.01),
          },
        },
      },
      friday: {
        open: {
          helpers: time,
        },
        close: {
          helpers: time,
        },
        priceList: {
          price: {
            helpers: price,
            minValue: minValue(0.01),
          },
        },
      },
      saturday: {
        open: {
          helpers: time,
        },
        close: {
          helpers: time,
        },
        priceList: {
          price: {
            helpers: price,
            minValue: minValue(0.01),
          },
        },
      },
      sunday: {
        open: {
          helpers: time,
        },
        close: {
          helpers: time,
        },
        priceList: {
          price: {
            helpers: price,
            minValue: minValue(0.01),
          },
        },
      },
    },
  },
  methods: {
    add(event) {
      event.preventDefault();
      this.$v.$touch();
      const currentObj = this;
      this.setNullForMethodPrice();
      if (!this.$v.$invalid) {
        this.axios.post('/locals.json', {
          name: this.name,
          address: this.address,
          city: this.city,
          postcode: this.postCode,
          deliveryDay: this.deliveryDay,
          cardAllowed: this.cardAllowed,
          stock: this.stock,
          days: this.days,
        })
          .then((response) => {
            currentObj.output = response.data;
            // console.log(response);
          })
          .catch((error) => {
            currentObj.output = error;
          });
      }
    },
    fileSelected(event) {
      const file = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(file);
      // console.log(file);
      this.hasUpload = true;
    },
    removePhoto() {
      this.image = '';
      this.hasUpload = false;
    },
    setNullForMethodPrice() { /* set null for method price where price is null,
      default method price is checked as kilogram,
      if user will not enter the price, method price should be a null */
      if (!this.days.monday.priceList.price) {
        this.days.monday.priceList.method = null;
      }
      if (!this.days.tuesday.priceList.price) {
        this.days.tuesday.priceList.method = null;
      }
      if (!this.days.wednesday.priceList.price) {
        this.days.wednesday.priceList.method = null;
      }
      if (!this.days.thursday.priceList.price) {
        this.days.thursday.priceList.method = null;
      }
      if (!this.days.friday.priceList.price) {
        this.days.friday.priceList.method = null;
      }
      if (!this.days.saturday.priceList.price) {
        this.days.saturday.priceList.method = null;
      }
      if (!this.days.sunday.priceList.price) {
        this.days.sunday.priceList.method = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";

.group__title {
  margin-top: 2rem;
}
.group__name {
  width: 100%;
  @media #{$tablet-min} {
    width: auto;
    margin-right: .75rem;
  }
  &.name__width--auto {
    width: auto;
  }
}
.group__box {
  display: flex;
  flex-direction: column;
  @media #{$tablet-min} {
    flex-direction: row;
    flex-wrap: wrap;
  }
  &.group--center {
    justify-content: space-between;
    align-items: center;
  }
  &.group--nowrap {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    @media #{$tablet-min} {
      flex-wrap: nowrap;
    }
  }
}
.group__box--priceList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.custom-checkbox, .custom-radio {
  margin-right: .75rem;
}

.file-area {
  width: 100%;
  position: relative;
  input[type=file] {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    cursor: pointer;
  }

  .file-dummy {
    width: 100%;
    padding: 30px;
    background: rgba(255,255,255,0.1);
    border: 2px dashed $color-primary;
    text-align: center;
    transition: background 0.3s ease-in-out;
    .fa-upload {
      color: $color-primary;
      -webkit-transition: color .3s ease-in-out;
      -moz-transition: color .3s ease-in-out;
      -ms-transition: color .3s ease-in-out;
      -o-transition: color .3s ease-in-out;
      transition: color .3s ease-in-out;
    }
  }

  &:hover .file-dummy {
    background: $color-primary-light;
    .fa-upload {
      color: $color-secondary;
    }
  }
}
.file__help-tip {
  font-size: .9rem;
  margin: .5rem 0;
}
.photo__wrapper{
  border: 2px dashed $color-primary;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  @media #{$desktop} {
    margin: 0;
  }
}
.photo__element {
  width: auto;
  height: 100%;
  display: block;
  margin: 0 auto;
}
.photo__close {
  color: $color-secondary;
  font-size: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  padding: .5rem;
  position: absolute;
  top: 0;
  right: .7rem;
  cursor: pointer;
  -webkit-transition: color .3s ease-in-out;
  -moz-transition: color .3s ease-in-out;
  -ms-transition: color .3s ease-in-out;
  -o-transition: color .3s ease-in-out;
  transition: color .3s ease-in-out;
  &:hover {
    color: $color-primary;
  }
}
</style>
