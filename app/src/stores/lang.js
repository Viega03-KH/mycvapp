// stores/lang.js
import { defineStore } from 'pinia'

export const useLangStore = defineStore('lang', {
  state: () => ({
    locale: 'uz' // boshlang‘ich til
  }),
  actions: {
    setLang(lang) {
      this.locale = lang
    }
  }
})
