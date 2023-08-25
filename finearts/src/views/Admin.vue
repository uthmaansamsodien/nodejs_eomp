<template>
    <div>
        <div id="style_table" class="container">
            <h1><ins>WORKSPACE</ins></h1>
            <p class="quote_1">“I don’t know anything with certainty, but seeing the stars makes me dream.” - Vincent van Gogh</p>
            <table class="table table-hover" id="table">
                <thead class="head">
                <tr>
                    <th id="id">ID</th>
                    <th id="name">Name</th>
                    <th id="artist">Artist</th>
                    <th id="year">Year</th>
                    <th id="type">Type</th>
                    <th id="price">Price (ZAR)</th>
                    <th id="prodImg">Image</th>
                    <th id="amount">Quantity</th>
                    <th id="del">Delete</th>
                    <th id="edit">Update</th>
                </tr>
              </thead>
              <tbody id="product-table">
                <tr v-for="product in products" :key="product.prodID">
                    <td id="id">{{product.prodID}}</td>
                    <td id="name">{{ product.prodName }}</td>
                    <td id="artist">{{ product.prodPrice}}</td>
                    <td id="year">{{ product.prodYear}}</td>
                    <td id="type">{{ product.prodType}}</td>
                    <td id="price">{{ product.prodPrice}}</td>
                    <td id="prodImg"><img :src="product.prodUrl" :alt="products.prodName" style="width: 13.5rem"></td>
                    <td id="amount">{{ product.quantity }}</td>
                    <td id="del"><button class="del">delete</button></td>
                    <td id="edit"><button class="edit">edit</button></td>
                  </tr>
              </tbody>
              </table>
           </div>
           <h1><ins>USERS</ins></h1>
           <UserComp/>
    </div>
</template>

<script>
  import SpinnerCompVue from "@/components/SpinnerComp.vue";
  import UserComp from "@/components/UserComp.vue";
export default {
  components: {
    SpinnerCompVue,
    UserComp,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};  
</script>

<style scoped>
#id{
    background-color:#435334;
    color: antiquewhite;
}
#name{  
    background-color:#435334;
    color: antiquewhite;

}
#artist{
    background-color:#435334;
    color: antiquewhite;
}
#year{
    background-color:#435334;
    color: antiquewhite;
}
#type{
    background-color:#435334;
    color: antiquewhite;
}
#price{  background-color:#435334;
    color: antiquewhite;

}
#prodImg{  
    background-color:#435334;
    color: antiquewhite;

}
#amount{
    background-color:#435334;
    color: antiquewhite;
}
#del{
    background-color:#435334;
    color: antiquewhite;
}
#edit{ 
    background-color:#435334;
    color: antiquewhite;
}
.del{
  background-color: antiquewhite;
  border-radius:0.5rem ;
}
.edit{
  background-color: antiquewhite;
  border-radius:0.5rem ;
}


</style>