<template>
<h1>购物车</h1>
<div v-if="cartItems.length > 0">
    <ShoppingCartList :products="cartItems"/>
    <button class="checkout-button">结账</button>
</div>
<div v-if="cartItems.length === 0">
    您的购物车中还没有任何商品!
</div>

</template>

<script>
import ShoppingCartList from '@/components/ShoppingCartList.vue';
import { cartItems } from '../temp-data'

export default {
name: "ShoppingCartPage",
components:{
    ShoppingCartList,
},
data() {
    return {
        cartItems,
    }
}
}
</script>