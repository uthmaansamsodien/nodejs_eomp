<template>
  <div class="container">
    <div class="row">
      <div class="row justify-content-center gap-3" v-if="products">
        <div
          v-for="product in products"
          class="card"
          style="width: 18rem"
          :key="product.prodID"
        >
          <img
            :src="product.prodUrl"
            class="card-img-top"
            id="img"
            :alt="product.prodName"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.prodName }}</h5>
            <p class="card-text">
              {{ product.prodArtist }}
            </p>
            <p class="card-text">
              {{ product.prodYear }}
            </p>
            <p class="card-text">
              {{ product.prodType }}
            </p>
            <p class="card-text">
              {{ product.prodPrice }}
            </p>
            <p class="card-text">
              {{ product.quantity }}
            </p>
            <p class="card-text">
              "{{ product.prodInfo }}"
            </p>
          </div>
          <a class="btn" href="https://nodeapieomp.onrender.com/product/5" role="button">See painting</a>
        </div>
      </div>
      <div v-else class="row">
        <SpinnerCompVue />
      </div>
    </div>
  </div>
</template>
<script>
import SpinnerCompVue from "@/components/SpinnerComp.vue";
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  components: {
    SpinnerCompVue,
  },
};
</script>
<style scoped>

  #img{
    aspect-ratio: 4/6;
  }
</style>
