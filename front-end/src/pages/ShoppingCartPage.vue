<template>
<h1>购物车</h1>
<div v-if="cartItems.length > 0">
    <div class="product-container" v-for="product in cartItems" :key="product.id">
        <img class="product-image" :src="product.imageName" />
        <div class="details-wrap">
            <h3>{{ product.name }}</h3>
            <p>{{ product.price }}</p>
        </div>
        <button class="remove-button">删除</button>
    </div>
    <button class="checkout-button">结账</button>
</div>
<div v-if="cartItems.length === 0">
    您的购物车中还没有任何商品!
</div>

</template>

<script>
import { cartItems } from '../temp-data'
export default {
name: "ShoppingCartPage",
data() {
    return {
        cartItems,
    }
}
}
</script>