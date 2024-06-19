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
  props: ['user'],
  components: {
  ShoppingCartList,
},
  data() {
  return {
    cartItems: [],
    }
  },
  watch: {
    async user(newUserValue) {
      console.log('Changed!');
      console.log(newUserValue);
      if (newUserValue) {
        const cartResponse = await axios.get(`/api/users/${newUserValue.uid}/cart`);
        const cartItems = cartResponse.data;
        this.cartItems = cartItems;
      }
    }
  },
  methods: {
    async removeFromCart(productId) {
      const response = await axios.delete(`/api/users/${this.user.uid}/cart/${productId}`);
      alert(response.data);
      const updatedCart = response.data;
      this.cartItems = updatedCart;
    },
  },
  async created() {
    console.log(this.user);
    if (this.user) {
      const response = await axios.get(`/api/users/${this.user.uid}/cart`);
      const cartItems = response.data;
      this.cartItems = cartItems;
    }
  }
}
</script>