<template>
    <aside id="objects">
        <div class="lol" v-for="product in userStore.cart">
        <img  :srcset="product.url" id="imagedeproduit">
        <div id="detailsdupanier">
        <div id="title">{{ product.title }}</div>
        <div>{{ product.price/100 }}$</div>
        </div>
        <div class="retirer" v-on:click="removeFromCart(product)">Remove</div>
        </div>
    </aside>
</template>

<script setup>
import { useUserStore } from '~/store/user';
const userStore = useUserStore();
const props = defineProps(['product']);
const { product} = toRefs(props);
const emit = defineEmits(['selectedRadio']);

let isSelected = ref(false)


const removeFromCart = (productToRemove) => {
    const index = userStore.cart.findIndex(prod => prod.id === productToRemove.id);
    if (index !== -1) {
        userStore.cart.splice(index, 1);
    }
};


</script>

<style>
.retirer{
    padding-top: 50px;
    cursor: pointer;
    height: 25px;
    background: 
      linear-gradient(currentColor 0 0) 
      bottom /var(--d, 0) 3px no-repeat;
     transition:0.5s;
}

.retirer:hover {
    color: black;
    --d: 100%;
}
.lol {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
}
#title {
    font-size: 15px;
    padding: 20px;
}
#imagedeproduit {
    width: 120px;
}

#detailsdupanier {
    width: 400px;
}
#objets {
    display: flex;
    flex-direction: row;
}


</style>