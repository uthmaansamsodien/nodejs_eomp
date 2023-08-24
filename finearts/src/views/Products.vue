<template>
    <div>
        
    <h1><ins>OUR COLLECTION</ins></h1>
    <p class="quote_1">““It takes a long time to become young.” -Pablo Picasso</p>
        <CardComp/>
        <SpinnerComp/>
    </div>
    <br />
</template>

<script>
import CardComp from '@/components/CardComp.vue';

    export default {
    components: { CardComp }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
    .aboutpic{
      height: 10rem;   
    }
    .quote_1{
      font-size: 80%;
    }
    h1{ 
      font-size: 3rem;
    }
  }
</style>

