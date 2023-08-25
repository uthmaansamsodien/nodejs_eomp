<template>
        <div>
            <div class="card">
              <div class="image" :v-for="product in products" :key="product.prodID">
                <img :src="$route.query.prodURL" class="card-img-top" :alt="product.prodName" />
              </div>
              <div class="card-body">
                <h5 class="card-title">{{$route.query.prodName}}</h5>
                <p class="card-text">
                  {{ product.prodType }}</p>
                <p class="card-text">
                  {{ product.prodPrice}}</p>
                  <div class="card-footer text-body-secondary">
                <router-link to="/products" class="btn btn-primary">Back</router-link>
                <br /><br />
                </div>
              </div>
            </div>
          </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>