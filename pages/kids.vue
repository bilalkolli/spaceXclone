<template>
    <MainLayout>
    <div id="menu">
        <h1>KIDS</h1>
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
    {id:10,title:"KID'S SPACEX PULLOVER HOODIE",price:2800,url:"https://shop.spacex.com/cdn/shop/products/KIDS_SPACEX_ZIPPER_BLACK_BACK_600x.png?v=1631677126",url2:"https://shop.spacex.com/cdn/shop/products/KIDS-SPACEX-PULLOVER-OUTERWEAR-BLACK-FRONT_600x.png?v=1631677126",collection:"kids"},
    {id:11,title:"KID'S SPACEX ZIPPER HOODIE",price:2800,url:"https://shop.spacex.com/cdn/shop/products/KIDS_SPACEX_ZIPPER_BLACK_FRONT_600x.png?v=1631677171",url2:"https://shop.spacex.com/cdn/shop/products/KIDS_SPACEX_ZIPPER_BLACK_BACK_3686fce4-5785-435d-b6c1-b60284855f43_600x.png?v=1631677171",collection:"kids"},
    {id:12,title:"SPACEX ONESIE",price:1500,url:"https://shop.spacex.com/cdn/shop/products/KIDS-10-ONESIE-BLACK-FRONT_600x.png?v=1631644560",url2:"https://shop.spacex.com/cdn/shop/products/KIDS-10-ONESIE-BLACK-BACK_600x.png?v=1631644560",collection:"kids"},
]
</script>

<style>
</style>