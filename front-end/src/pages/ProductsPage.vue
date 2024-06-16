<template>
  <h1>产品界面</h1>
  <div class="grid-wrap">
    <div class="product-item" v-for="product in products" :key="product.id">
      <img :src="product.imageName" />
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">{{ product.price }}</p>
      <router-link :to="'/products/' + product.id">
        <button>查看详细信息</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { products } from '../temp-data';

export default {
  name: "ProductPage",
  data() {
    return {
      products,
    }
  }
}
</script>