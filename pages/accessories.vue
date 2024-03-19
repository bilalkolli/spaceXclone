<template>
    <MainLayout>
    <div id="menu">
        <h1>ACCESSORRIES</h1>
     <div class="grid-container">
        <div v-if="products" v-for="product in products" :key="product.id">
        <productComponent :product="product"></productComponent>
        </div>
     </div>
    </div>
    </MainLayout>
</template>

<script setup>

import MainLayout from "~/layouts/MainLayout.vue";

const products = [
    {id:13,title:"SUPER HEAVY CHROME MODEL",price:49900,url:"https://shop.spacex.com/cdn/shop/files/SpaceXBoosterFullyStacked_600x.png?v=1699917818",url2:"https://shop.spacex.com/cdn/shop/files/StarshipBoosterOpenedPackaging_600x.png?v=1699917817",collection:"accessories"},
    {id:14,title:"STARSHIP CHROME MODEL",price:30000,url:"https://shop.spacex.com/cdn/shop/products/Unknown-1_600x.png?v=1681580111",url2:"https://shop.spacex.com/cdn/shop/products/Unknown-2_600x.png?v=1681580111",collection:"accessories"},
    {id:15,title:"HOTSTAGE | BOOSTER UPGRADE KIT PRE-SALE",price:12500,url:"https://shop.spacex.com/cdn/shop/files/hotstage_booster_1_300x.png?v=1710198422",url2:"https://shop.spacex.com/cdn/shop/files/hotstage_400x.png?v=1710198422",collection:"accessories"},

]
</script>

<style>
</style>