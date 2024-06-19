import { createApp } from 'vue'
import App from './App.vue'
import './main.css';
import * as VueRouter from 'vue-router';
import ShoppingCartPage from './pages/ShoppingCartPage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import ProductDetailPage from './pages/ProductDetailPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC9Zzl0S-e_Z_C3LmWa_NHRXJWrP_XaXME",
  authDomain: "vue-site-8cff4.firebaseapp.com",
  projectId: "vue-site-8cff4",
  storageBucket: "vue-site-8cff4.appspot.com",
  messagingSenderId: "534164477039",
  appId: "1:534164477039:web:95039f94461c045ad2e99a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App)
.use(VueRouter.createRouter({
  history: VueRouter.createWebHistory(process.env.BASE_URL),
  routes: [{
    path: '/cart',
    component: ShoppingCartPage,
  }, {
    path: '/products',
    component: ProductsPage,
  }, {
    path: '/products/:productId',
    component: ProductDetailPage,
  },{
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  }]
}))
.mount('#app')
