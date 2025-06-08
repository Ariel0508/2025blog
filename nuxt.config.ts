export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  tailwindcss: {
    configPath: 'tailwind.config.ts',
  },
  css: ['@/assets/scss/all.scss'],
  app: {
    head: {
      title: '個人部落格',
      htmlAttrs: {
        lang: 'zh-Hant',
      },
      script: [],
    },
  },
});
