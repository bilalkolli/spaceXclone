<template>
    <MainLayout>
    <div id="main" v-if="!userStore.cart.length">
        <h1 id="empty">YOUR CART IS EMPTY</h1>
        <nuxt-link to="/" id="retour">
                SHOP OUR PRODUCTS
        </nuxt-link>
    </div>
    <div id="main2" v-else>
        <h1 id="rempli">CART</h1>
        <div class="produits">
        <objectpanier :product="product"></objectpanier>
        </div>
    </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from '~/store/user';
const props = defineProps(['product']);
const { product } = toRefs(props);
const userStore = useUserStore()
const user = useSupabaseUser()
</script>

<style>
aside {
    border: #818181;
    border-radius: 1px ;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
#empty {
    font-size: 20px;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 0px;
}


#rempli {
    margin-top: 50px;
    margin-bottom: 50px;
}
#retour {
    margin-top: 20px;
    margin-left: 10px;
    background-color: white;
    color: black;
    padding: 10px 80px;
    border: 1px solid;
    border-color: #818181;
    cursor: pointer;
    text-decoration: none;
    border-radius: 0;
    display: flex;
    justify-content: center;
    text-align: center;
}
#main {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    height: 80vh;
    border: 1px solid;
}

#main2 {
    
    display: flex;
    text-align: center;
    flex-direction: column;
    height: 80vh;
}
</style>