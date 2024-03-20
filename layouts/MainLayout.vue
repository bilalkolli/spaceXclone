<template>
    <div class="barre">
        <nav>
            <nuxt-link to="/" id="lienlogo">
                <img src="./images/spaceXlogo.png" id="logo">
             </nuxt-link>
            <nuxt-link to="/x-collection">
                X COLLECTION
             </nuxt-link>
             <nuxt-link to="/Mens">
                MENS
             </nuxt-link>
             <nuxt-link to="/Womens">
                WOMENS
             </nuxt-link>
             <nuxt-link to="/Kids">
                KIDS
             </nuxt-link>
             <nuxt-link to="/Accessories">
                ACCESSORIES
             </nuxt-link>
        </nav>
        <div class="droite">
            <nuxt-link to="/login">
                ACCOUNT
             </nuxt-link>
             <nuxt-link to="/Cart" id="cart">
                CART
                ({{ userStore.cart.length }})
             </nuxt-link>
        </div>
    </div>
    <slot></slot>
</template>

<script setup>
import { useUserStore } from '~/store/user';
const userStore = useUserStore();
</script>

<style>
.barre {
    background-color: black;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky; top: 0;
    z-index: 100;
}
a,input::placeholder {
    color: #939393;
    font-family: DIN Neuzeit Grotesk, sans-serif;
    font-weight: 700;
    font-style: normal;
    letter-spacing: 1px;
    font-size: 17px;
    padding-left: 18px;
    cursor: pointer;
    text-decoration: none;
    background: 
      linear-gradient(currentColor 0 0) 
      bottom /var(--d, 0) 3px no-repeat;
     transition:0.5s;
     padding-bottom:12px;
     padding-right: 12px;
}
input::placeholder {
    color:black;
    padding-left: 0;
    font-size: 17px;
}
input {
    margin-left: 15px;
    margin-right: 15px;
    display: flex;
    align-items: center;
    width: 1600px;
    height: 50px;
    font-size: 15px; /* Choisissez la taille de police souhaitée */
    text-transform: uppercase;
    border: 0;
    border-style: none;

}
svg{
    width: 30px;
}
nav{
       padding-bottom: 30px;
}

a:hover {
    color: white;
    --d: 80%;
}
.droite {
    padding-right: 50px;
}
nav{
    padding-left: 45px;
    
}
#cart {
    color: white;
}
.IconIcon--close{
    width: 20px;
    cursor: pointer;
}

input:focus {
  outline: none; /* Enlever l'outline lorsque l'input est en focus */
}
#logo {
    position: relative;
    top: 15px;
}

#search {
    height: 85px;
  margin: 0; /* Supprime les marges par défaut du corps */
  display: none; /* Utilisez Flexbox pour le corps */
  justify-content: center; /* Centre l'élément horizontalement */
  align-items: center;
  position: sticky;
  background-color: white;
  top: 85px;
  border-bottom: 2px solid #000; /* Ajouter une bordure inférieure noire */
  z-index: 100;

}

@media screen and (max-width: 1210px) {
#lienlogo{
    padding-left: 0;
    margin-left: 0;
    width: 0px;
}
a {
    font-size: 15px;
}
nav{
    padding-left: 0px;
    margin-top: 1px;
}
}

@media screen and (max-width: 1030px) {
    a {
    font-size: 12px;
}
#cart{
    padding-right: 0px;
}
}

@media screen and (max-width: 870px) {
    #logo{
        width: 80px;
        padding-left: 0px;
    }
}
</style>

