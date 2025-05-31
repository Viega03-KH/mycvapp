import { createI18n } from 'vue-i18n'

import uz from './locales/uz.json'
import en from './locales/en.json'
import ru from './locales/ru.json'

const messages = {
  uz,
  en,
  ru
}

const i18n = createI18n({
  legacy: false,
  locale: 'uz',
  fallbackLocale: 'en',
  messages
})

export default i18n
