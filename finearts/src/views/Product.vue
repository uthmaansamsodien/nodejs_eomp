<template>
    <div class="anything" v-if="product in product">
        <div class="card" style="width: 18rem">
          <img
            :src="product.prodUrl"
            class="card-img-top"
            :alt="product.prodName"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.prodName }}</h5>
            <p class="card-text">{{ product.Category }}.</p>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
  </template>
  <script>
  import axios from 'axios';
  
 
  export default {
   
      computed: {
     
        product() {
          return this.$store.state.product
        }
       
      },
      created() {
      
      },
      mounted() {
        this.$store.dispatch('fetchProducts', this.$route.params.prodID)
      },
      methods: {
   
      }
    };


</script>


<style scoped>

</style>