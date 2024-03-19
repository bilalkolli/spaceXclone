<template>
    <MainLayout>
        <div id="objet">
            <div id="gauche">
                <img :srcset="lien1" id="afficheproduit1">
                <img :srcset="lien2" id="afficheproduit2">
            </div>
            <div id="droite">
                <h1 id="titre" style="text-align: left;">{{ titres }}</h1>
                <p id="prix">${{ priceComputed }}</p>
                <nuxt-link to="/Cart" v-on:click="addToCart" id="panier">
                    ADD TO CART
                </nuxt-link>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import { ref, computed } from 'vue';
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from '~/store/user';

import { useRoute } from 'vue-router';

const userStore = useUserStore();
const route = useRoute()
const product = ref(null)

const priceComputed = computed(() => {
    return product.value?.data?.price / 100; 
});

const titres = computed(() => {
    return product?.value?.data?.title
})

const addToCart = () => {
    userStore.cart.push(product.value.data)
}

const lien1 = computed(() => {
    return product?.value?.data?.url
})

const lien2 = computed(() => {
    return product?.value?.data?.url2
})
onBeforeMount(async () => {
    product.value = await useFetch(`/api/prisma/get-product-by-id/${route.params.id}`);
});
</script>

<style>


#titre {
    letter-spacing: 0px;
    font-size: 20px;
    font-family: DIN Neuzeit Grotesk, sans-serif;
    font-weight: 500;
    color: #000;
}
#gauche {
    display: flex;
    flex-direction: column; 
}
#objet{
    margin-top: 5px;
    margin-left: 50px;
    display: flex;
    justify-content: center; 
    
}
#panier:hover {
  color: #fff;
  background-color: #1A1A1A;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

#panier{
    background-color: white;
    color: black;
    padding: 10px 80px;
    border: 1px solid;
    border-color: #818181;
    cursor: pointer;
    text-decoration: none;
    border-radius: 0;
}

#prix {
    margin-top: 10px;
    padding-bottom: 50px;

}
#droite{
    margin-top: 70px;
    margin-left: 50px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
    padding: 50px 50px;
    height: 200px;
    position: sticky;
    top: 100px;
}

#afficheproduit1,#afficheproduit2{
    margin-top: 50px;
    width: 795px;
    height: 850px;
    animation: myAnim 1.5s ease 0s 1 normal forwards;
}

@keyframes myAnim {
	0% {
		opacity: 0;
		transform: translateY(50px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
}

@media screen and (max-width: 1456px){
    #objet{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    #droite{
        margin: 0;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    #panier{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    #droite{
    margin-top: 50px;
    margin-left: 15px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
    padding: 50px 50px;
    height: 200px;
    position: sticky;
    top: 100px;
}
}

</style>