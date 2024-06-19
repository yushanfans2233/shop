<template>
  <h1>产品界面</h1>
  <ProductsList :products="products"/>
</template>

<script>
import ProductsList from '../components/ProductsList.vue'
import axios from 'axios';

export default {
  name: "ProductPage",
  components: {
    ProductsList,
  },
  data() {
    return {
      products: [],
    }
  },
  async created() {
    const response = await axios.get('/api/products');
    const products = response.data;
    this.products = products;
  }
}
</script>