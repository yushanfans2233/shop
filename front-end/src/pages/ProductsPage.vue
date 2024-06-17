<template>
  <h1>产品界面</h1>
  <ProductsList :products="products"/>
</template>

<script>
import ProductsList from '../components/ProductsList.vue'
import { products } from '../temp-data';

export default {
  name: "ProductPage",
  components: {
    ProductsList,
  },
  data() {
    return {
      products,
    }
  }
}
</script>