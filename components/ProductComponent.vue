<template>
    <div :id="`ProductComponent${product.id}`" class="custom">
        <NuxtLink :to="`/item/${product.id}`">
            <img class="imagesdeproduits" id="produits" @mouseover="hovered = true" @mouseleave="hovered = false" :src="hovered ? product.url2 : product.url" >
        </NuxtLink>
        <div id="details">
            <NuxtLink :to="`/item/${product.id}`" id="titres">
                {{product.title }}
             </NuxtLink>
            <p id="prix">${{ priceComputed }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['product']);
const { product } = toRefs(props);
const priceComputed = computed(() => {
        return product.value.price / 100
    });
const hovered = ref(false)
</script>

<style>
aside {
    position: relative;
    bottom: 100px;
}
#details {
    display: flex;
    flex-direction: column;
}
#prix {
    font-weight: bolder;
    font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.2;
  text-transform: none;
  font-family: sans-serif;
}
#titres {
    margin-top: 25px;
    margin-bottom: 10px;
    color: #000000;
  font-family: "SpaceMono-Regular",monospace;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1.2;
  text-transform: none;
}
#produits {
    margin-top: 50px;
    width: 550px;
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
#details {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.lol{
    display: flex;
    justify-content: center;
    margin-right: 50px;
}
</style>