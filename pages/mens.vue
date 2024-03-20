<template>
    <MainLayout>
    <div id="menu">
        <h1>MENS</h1>
     <div class="grid-container">
        <div v-if="products" v-for="product in products" :key="product.id">
        <productComponent :product="product"></productComponent>
        </div>
     </div>
    </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue"
const products = [
    {id:4,title:"X TRUCKER CAP",price:3000,url:"https://shop.spacex.com/cdn/shop/files/STARSHIPFLIGHT3_UNISEX-BLACK-BACK_600x.png?v=1706825113",url2:"https://shop.spacex.com/cdn/shop/files/STARSHIPFLIGHT3_UNISEX-BLACK-FRONT_600x.png?v=1706825113",collection:"mens"},
    {id:5,title:"UNISEX YEAR OF DRAGON T-SHIRT",price:3000,url:"https://shop.spacex.com/cdn/shop/files/SpacexYearofDragonTeeBlackFront_600x.png?v=1709407468",url2:"https://shop.spacex.com/cdn/shop/files/SpacexYearofDragonTeeBlackBack_600x.png?v=1709407468",collection:"mens"},
    {id:6,title:"UNISEX DRAGON SWEATER",price:7500,url:"https://shop.spacex.com/cdn/shop/files/SpaceXHolidaySweaterDragonFront_600x.png?v=1699579646",url2:"https://shop.spacex.com/cdn/shop/files/SpaceXHolidaySweaterDragonCloseup_600x.png?v=1699579646",collection:"mens"},
]
</script>

<style>
h1{
    margin-bottom: 1px;
}
</style>