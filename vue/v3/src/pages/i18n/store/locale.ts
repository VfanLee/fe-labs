import { defineStore } from 'pinia'
import i18n from '@i18n/i18n'

export const useLocaleStore = defineStore('locale', () => {
  const locale = ref(localStorage.getItem('locale'))

  const setLocale = (newLocale: string) => {
    locale.value = newLocale
    i18n.global.locale.value = newLocale as 'en' | 'zh' | 'ar'
  }

  return {
    locale,
    setLocale,
  }
})
