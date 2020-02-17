<template>
  <main>
    <section class="first-bg content__margin-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-md-8
          offset-md-2 col-12 justify-center-section section__bg">
            <img class="logo-svg"
                 src="../assets/bg-search.svg"
                 alt="SecondHandy - wyszukiwarka">
            <p class="text-center mb-4">Wszystkie secondhandy w jednym miejscu.</p>
            <form>
              <div class="form-group">
                <router-link to="/szukaj"><i class="fas fa-search fa-right"></i></router-link>
                <input type="text" class="form-control control--primary"
                       placeholder="Adres, np. Piłsudskiego 1/1, Szczecin">
                <p class="small text-center my-2">
                  <i class="fas fa-location-arrow margin-right"></i>Udostępnij swoją lokalizację
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section style="height: 1000px;">
    </section>
    <div class="wrapper__shadow"></div>
  </main>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    // HelloWorld,
  },
};
</script>
