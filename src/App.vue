<script setup>
import { ref, provide, watch, onMounted } from 'vue'
import FooterComp from './components/FooterComp.vue'
import HeaderComp from './components/HeaderComp.vue'

const isDark = ref(false)
const isEnglish = ref(false)

provide('isEnglish', isEnglish)
provide('isDark', isDark)

function toggleTheme() {
  isDark.value = !isDark.value
}

function toggleLanguage() {
  isEnglish.value = !isEnglish.value
}

watch(isDark, (value) => {
  document.body.classList.toggle('dark', value)
})

onMounted(() => {
  document.body.classList.toggle('dark', isDark.value)
})
</script>

<template>
  <div id="app" :class="{ dark: isDark, english: isEnglish }">
    <HeaderComp
      :is-dark="isDark"
      :is-english="isEnglish"
      @toggle-theme="toggleTheme"
      @toggle-language="toggleLanguage"
    />
    <main class="page-content">
      <router-view />
    </main>
    <FooterComp />
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--page-bg);
  color: var(--page-text);
  transition: background 0.2s ease, color 0.2s ease;
}

:global(body) {
  margin: 0;
  min-height: 100vh;
  background: #f8fafc;
  color: #111827;
  transition: background 0.2s ease, color 0.2s ease;
}

:global(body.dark) {
  background: #0f172a;
  color: #f8fafc;
}

#app:not(.dark) {
  --page-bg: #f8fafc;
  --page-text: #111827;
  --surface: #ffffff;
  --surface-muted: #f1f5f9;
  --border: #e2e8f0;
  --accent: #df9d10;
  --accent-strong: #186e03;
}

#app.dark {
  --page-bg: #0f172a;
  --page-text: #f8fafc;
  --surface: #111827;
  --surface-muted: #1f2937;
  --border: #334155;
  --accent: #fbbf24;
  --accent-strong: #86efac;
}

.page-content {
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 28px 20px;
  color: var(--page-text);
}
</style>
