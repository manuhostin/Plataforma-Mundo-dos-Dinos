<script setup>
import { computed } from 'vue'

const props = defineProps({
  isDark: Boolean,
  isEnglish: Boolean,
})

const emit = defineEmits(['toggle-theme', 'toggle-language'])

const navItems = [
  { to: '/', pt: 'Início', en: 'Home' },
  { to: '/mapa', pt: 'Mapa', en: 'Map' },
  { to: '/catalogo', pt: 'Catálogo', en: 'Catalog' },
  { to: '/quiz', pt: 'Quiz', en: 'Quiz' },
  { to: '/sobre', pt: 'Sobre', en: 'About' },
]

const localizedNavItems = computed(() =>
  navItems.map((item) => ({
    ...item,
    label: props.isEnglish ? item.en : item.pt,
  })),
)

const themeLabel = computed(() => {
  if (props.isEnglish) {
    return props.isDark ? 'Light mode' : 'Dark mode'
  }

  return props.isDark ? 'Modo claro' : 'Modo escuro'
})

const languageLabel = computed(() => (props.isEnglish ? 'PT-BR' : 'EN'))
</script>

<template>
  <header class="header">
    <div class="header-content">
      <div class="logo">
        <p>{{ props.isEnglish ? 'Brazilian' : 'Dinossauros' }} <strong>{{ props.isEnglish ? 'Dinosaurs' : 'Brasileiros' }}</strong></p>
      </div>

      <div class="header-actions">
        <nav class="nav-links">
          <router-link v-for="item in localizedNavItems" :key="item.to" :to="item.to" class="nav-link">
            {{ item.label }}
          </router-link>
        </nav>

        <div class="toggle-group">
          <button class="toggle-btn" type="button" @click="emit('toggle-theme')">
            {{ themeLabel }}
          </button>
          <button class="toggle-btn" type="button" @click="emit('toggle-language')">
            {{ languageLabel }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap');

.header {
  font-family: 'Lexend Deca', sans-serif;
  background-color: var(--surface);
  color: var(--page-text);
  padding: 12px 40px;
  border-bottom: 1px solid var(--border);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.logo {
  font-weight: 500;
  font-size: 14px;
  color: var(--accent);
}

.logo strong {
  color: var(--accent-strong);
}

.nav-links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.nav-link {
  font-weight: 400;
  font-size: 12px;
  color: var(--accent);
  text-decoration: none;
}

.nav-link:hover {
  color: var(--accent-strong);
}

.toggle-group {
  display: flex;
  gap: 8px;
}

.toggle-btn {
  border: 1px solid var(--border);
  background: var(--surface-muted);
  color: var(--page-text);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 11px;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
}

.toggle-btn:hover {
  transform: translateY(-1px);
  background: var(--border);
}
</style>
