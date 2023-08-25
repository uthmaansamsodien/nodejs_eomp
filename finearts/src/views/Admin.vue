<template>
    <div>
        <div id="style_table" class="container">
            <table class="table table-hover" id="table">
                <thead class="head">
                <tr>
                    <th id="id">ID</th>
                    <th id="name">Name</th>
                    <th id="price">Price (ZAR)</th>
                    <th id="img-head">Image</th>
                    <th id="amount">Quantity</th>
                    <th id="del">Delete</th>
                    <th id="edit">Update</th>
                </tr>
              </thead>
              <tbody id="product-table">
                <tr v-for="product in products" :key="product.prodID">
                    <td id="id">{{product.prodID}}</td>
                    <td id="name">{{ product.prodName }}</td>
                    <td id="price">{{ product.amount}}</td>
                    <td id="prodImg"><img :src="product.prodUrl" :alt="products.prodName" style="width: 13.5rem"></td>
                    <td id="zamount">{{ product.quantity }}</td>
                    <td id="del"><button class="del">delete</button></td>
                    <td id="edit"><button class="edit">edit</button></td>
                  </tr>
              </tbody>
              </table>
           </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>