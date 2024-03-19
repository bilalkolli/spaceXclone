import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        isMenuoverlay:false,
        isLoading:false,
        cart: [],
        checkout: []
    }),
    persist: true
})