import { createI18n } from 'vue-i18n'
import zh from './lang/zh.json'
import en from './lang/en.json'
import ar from './lang/ar.json'

const messages = {
  zh,
  en,
  ar,
}

function getDefaultLang() {
  const cacheLang = localStorage.getItem('locale')
  if (cacheLang) {
    return cacheLang
  }

  const browserLang = navigator.language.toLowerCase()
  const supportLangs = Object.keys(messages)
  for (const lang of supportLangs) {
    if (browserLang.includes(lang)) {
      localStorage.setItem('locale', lang)
      return lang
    }
  }

  localStorage.setItem('locale', 'en')
  return 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: getDefaultLang(),
  fallbackLocale: 'zh',
  messages,
})

export default i18n
