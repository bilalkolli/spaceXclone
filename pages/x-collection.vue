<template>
    <MainLayout>
    <div id="menu">
        <h1>X COLLECTION</h1>
     <div class="grid-container">
        <div v-if="products" v-for="product in products" :key="product.id">
        <productComponent :product="product"></productComponent>
        </div>
     </div>
    </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "~/layouts/MainLayout.vue"

const products = [ 
    {id:1,title:"UNISEX X COLLECTION SWEATSHIRT",price:6000,url:"https://shop.spacex.com/cdn/shop/files/SpaceXCrewRustFront_900x.png?v=1699915190",url2:"https://shop.spacex.com/cdn/shop/files/SpaceXCrewRustDetail_600x.png?v=1699915190",collection:"x-collection"},
    {id:2,title:"UNISEX X COLLECTION ZIPPER HOODIE",price:7000,url:"https://shop.spacex.com/cdn/shop/files/XFullZipUnisexBlack2_900x.png?v=1695251726",url2:"https://shop.spacex.com/cdn/shop/files/XFullZipUnisexDetail_900x.png?v=1695251726",collection:"x-collection"},
    {id:3,title:"UNISEX X COLLECTION LONG SLEEVE T-SHIRT",price:4000,url:"https://shop.spacex.com/cdn/shop/files/XCollectionLongSleeveBlackFront_600x.png?v=1699907344",url2:"https://shop.spacex.com/cdn/shop/files/XCollectionLongSleeveBlackDetail_600x.png?v=1699907344",collection:"x-collection"},
]
</script>

<style>
#menu {
    margin-bottom: 50px;
}
</style>