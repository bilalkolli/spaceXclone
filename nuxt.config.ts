// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
      'nuxt-lodash',
      '@pinia/nuxt',
      '@pinia-plugin-persistedstate/nuxt',
      '@nuxtjs/supabase'
  ],
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },
  supabase: {
    redirect: false
   },
})
