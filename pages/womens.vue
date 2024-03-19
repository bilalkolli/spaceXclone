<template>
    <MainLayout>
    <div id="menu">
        <h1>WOMENS</h1>
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
    {id:7,title:"WOMEN'S X COLLECTION T-SHIRT",price:3500,url:"https://shop.spacex.com/cdn/shop/files/XTeeWomensBlack_400x.png?v=1695061447",url2:"https://shop.spacex.com/cdn/shop/files/XTeeWomensBlackDetail_300x.png?v=1695405749",collection:"womens"},
    {id:8,title:"WOMEN'S STARLINK T-SHIRT",price:3000,url:"https://shop.spacex.com/cdn/shop/products/WOMENS-STARLINK-T-SHIRT-BLACK-BACK1copy_600x.png?v=1631678887",url2:"https://shop.spacex.com/cdn/shop/products/WOMENS-STARLINK-T-SHIRT-BLACK-FRONTcopy_600x.png?v=1631678887",collection:"womens"},
    {id:9,title:"WOMEN'S X COLLECTION CROPPED ZIPPER HOODIE",price:6000,url:"https://shop.spacex.com/cdn/shop/files/XFullZipCroppedWomensLilacFront1_600x.png?v=1695251767",url2:"https://shop.spacex.com/cdn/shop/files/XFullZipCroppedWomensLilacDetail_600x.png?v=1695251767",collection:"womens"},
]
</script>

<style>
</style>