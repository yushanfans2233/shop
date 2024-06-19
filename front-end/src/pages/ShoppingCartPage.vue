<template>
<h1>购物车</h1>
<div v-if="cartItems.length > 0">
    <ShoppingCartList :products="cartItems"/>
    <ShoppingCartList @remove-from-cart="removeFromCart($event)" :products="cartItems" />
    <button class="checkout-button">结账</button>
</div>
<div v-if="cartItems.length === 0">
    您的购物车中还没有任何商品!
</div>

</template>

<script>
import axios from 'axios';
import ShoppingCartList from '@/components/ShoppingCartList.vue';

export default {
  name: "ShoppingCartPage",
  components: {
  ShoppingCartList,
},
  data() {
  return {
    cartItems: [],
    }
  },
  methods: {
    async removeFromCart(productId) {
      const response = await axios.delete(`/api/users/12345/cart/${productId}`);
      alert(response.data);
      const updatedCart = response.data;
      this.cartItems = updatedCart;
    },
  },
  async created() {
    const response = await axios.get('/api/users/12345/cart');
    const cartItems = response.data;
    this.cartItems = cartItems;
  }
}
</script>