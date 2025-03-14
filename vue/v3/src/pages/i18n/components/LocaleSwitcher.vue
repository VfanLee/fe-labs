<script setup lang="ts">
import { useLocaleStore } from '@i18n/store/locale'
import i18n from '@i18n/i18n'
import { useRoute } from 'vue-router'

const route = useRoute()
const localeStore = useLocaleStore()
const lang = ref(localeStore.locale)
const changeLang = (e: Event) => {
  const val = (e.target as HTMLInputElement).value
  lang.value = val
  localeStore.setLocale(val)
  document.title = i18n.global.t(route.meta.title)
}
</script>

<template>
  <div class="locale-switcher">
    <label>
      <input type="radio" value="zh" v-model="lang" @change="changeLang" />
      简体中文
    </label>
    <label>
      <input type="radio" value="en" v-model="lang" @change="changeLang" />
      English
    </label>
    <label>
      <input type="radio" value="ar" v-model="lang" @change="changeLang" />
      عربي
    </label>
  </div>
</template>
