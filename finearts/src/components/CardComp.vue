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
            :alt="product.prodName"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.prodName }}</h5>
            <p class="card-text">
              {{ product.prodInfo }}
            </p>
          </div>
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
<style scoped></style>
