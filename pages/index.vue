<script setup async lang="ts" >
import MainLayout from "~/layouts/MainLayout.vue";

const products = [
    {id:1,title:"UNISEX X COLLECTION SWEATSHIRT",price:6000,url:"https://shop.spacex.com/cdn/shop/files/SpaceXCrewRustFront_900x.png?v=1699915190",url2:"https://shop.spacex.com/cdn/shop/files/SpaceXCrewRustDetail_600x.png?v=1699915190",collection:"x-collection"},
    {id:2,title:"UNISEX X COLLECTION ZIPPER HOODIE",price:7000,url:"https://shop.spacex.com/cdn/shop/files/XFullZipUnisexBlack2_900x.png?v=1695251726",url2:"https://shop.spacex.com/cdn/shop/files/XFullZipUnisexDetail_900x.png?v=1695251726",collection:"x-collection"},
    {id:3,title:"UNISEX X COLLECTION LONG SLEEVE T-SHIRT",price:4000,url:"https://shop.spacex.com/cdn/shop/files/XCollectionLongSleeveBlackFront_600x.png?v=1699907344",url2:"https://shop.spacex.com/cdn/shop/files/XCollectionLongSleeveBlackDetail_600x.png?v=1699907344",collection:"x-collection"},
    {id:4,title:"X TRUCKER CAP",price:3000,url:"https://shop.spacex.com/cdn/shop/files/STARSHIPFLIGHT3_UNISEX-BLACK-BACK_600x.png?v=1706825113",url2:"https://shop.spacex.com/cdn/shop/files/STARSHIPFLIGHT3_UNISEX-BLACK-FRONT_600x.png?v=1706825113",collection:"mens"},
    {id:5,title:"UNISEX YEAR OF DRAGON T-SHIRT",price:3000,url:"https://shop.spacex.com/cdn/shop/files/SpacexYearofDragonTeeBlackFront_600x.png?v=1709407468",url2:"https://shop.spacex.com/cdn/shop/files/SpacexYearofDragonTeeBlackBack_600x.png?v=1709407468",collection:"mens"},
    {id:6,title:"UNISEX DRAGON SWEATER",price:7500,url:"https://shop.spacex.com/cdn/shop/files/SpaceXHolidaySweaterDragonFront_600x.png?v=1699579646",url2:"https://shop.spacex.com/cdn/shop/files/SpaceXHolidaySweaterDragonCloseup_600x.png?v=1699579646",collection:"mens"},
    {id:7,title:"WOMEN'S X COLLECTION T-SHIRT",price:3500,url:"https://shop.spacex.com/cdn/shop/files/XTeeWomensBlack_400x.png?v=1695061447",url2:"https://shop.spacex.com/cdn/shop/files/XTeeWomensBlackDetail_300x.png?v=1695405749",collection:"womens"},
    {id:8,title:"WOMEN'S STARLINK T-SHIRT",price:3000,url:"https://shop.spacex.com/cdn/shop/products/WOMENS-STARLINK-T-SHIRT-BLACK-BACK1copy_600x.png?v=1631678887",url2:"https://shop.spacex.com/cdn/shop/products/WOMENS-STARLINK-T-SHIRT-BLACK-FRONTcopy_600x.png?v=1631678887",collection:"womens"},
    {id:9,title:"WOMEN'S X COLLECTION CROPPED ZIPPER HOODIE",price:6000,url:"https://shop.spacex.com/cdn/shop/files/XFullZipCroppedWomensLilacFront1_600x.png?v=1695251767",url2:"https://shop.spacex.com/cdn/shop/files/XFullZipCroppedWomensLilacDetail_600x.png?v=1695251767",collection:"womens"},
    {id:10,title:"KID'S SPACEX PULLOVER HOODIE",price:2800,url:"https://shop.spacex.com/cdn/shop/products/KIDS_SPACEX_ZIPPER_BLACK_BACK_600x.png?v=1631677126",url2:"https://shop.spacex.com/cdn/shop/products/KIDS-SPACEX-PULLOVER-OUTERWEAR-BLACK-FRONT_600x.png?v=1631677126",collection:"kids"},
    {id:11,title:"KID'S SPACEX ZIPPER HOODIE",price:2800,url:"https://shop.spacex.com/cdn/shop/products/KIDS_SPACEX_ZIPPER_BLACK_FRONT_600x.png?v=1631677171",url2:"https://shop.spacex.com/cdn/shop/products/KIDS_SPACEX_ZIPPER_BLACK_BACK_3686fce4-5785-435d-b6c1-b60284855f43_600x.png?v=1631677171",collection:"kids"},
    {id:12,title:"SPACEX ONESIE",price:1500,url:"https://shop.spacex.com/cdn/shop/products/KIDS-10-ONESIE-BLACK-FRONT_600x.png?v=1631644560",url2:"https://shop.spacex.com/cdn/shop/products/KIDS-10-ONESIE-BLACK-BACK_600x.png?v=1631644560",collection:"kids"},
    {id:13,title:"SUPER HEAVY CHROME MODEL",price:49900,url:"https://shop.spacex.com/cdn/shop/files/SpaceXBoosterFullyStacked_600x.png?v=1699917818",url2:"https://shop.spacex.com/cdn/shop/files/StarshipBoosterOpenedPackaging_600x.png?v=1699917817",collection:"accessories"},
    {id:14,title:"STARSHIP CHROME MODEL",price:30000,url:"https://shop.spacex.com/cdn/shop/products/Unknown-1_600x.png?v=1681580111",url2:"https://shop.spacex.com/cdn/shop/products/Unknown-2_600x.png?v=1681580111",collection:"accessories"},
    {id:15,title:"HOTSTAGE | BOOSTER UPGRADE KIT PRE-SALE",price:12500,url:"https://shop.spacex.com/cdn/shop/files/hotstage_booster_1_300x.png?v=1710198422",url2:"https://shop.spacex.com/cdn/shop/files/hotstage_400x.png?v=1710198422",collection:"accessories"},

]
</script>

<template>
    <MainLayout>
    <div id="index">
        <img id="imagedefond" src="https://shop.spacex.com/cdn/shop/files/X_collection_olive_hoodie_photo_main_page_2200x.png?v=1695400972">
    <div id="menu">
        <h1 id="tren">TRENDING</h1>
     <div class="grid-container">
        <div v-if="products" v-for="product in products" :key="product.id">
        <productComponent :product="product"></productComponent>
        </div>
     </div>
    </div>
    </div>
    </MainLayout>
</template>

<style>
.grid-container {
    display: grid;
    text-align: center;
    grid-template-columns: repeat(2, 10.5fr); 
    grid-gap: 1px;
}
#index{
    margin: 0;
    padding: 0;
}

#menu{
    display: grid;
    margin-top: 50px;
}
h1 {
    text-align: center;
    font-family: 'SpaceMono-Regular', monospace;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0cap;
  color: #000000;
}
#imagedefond {
    margin: 0;
    padding: 0;
    z-index: 1;
    width: 100%;
}
</style>