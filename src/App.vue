<script setup>
import FooterComp from './components/FooterComp.vue'
import HeaderComp from './components/HeaderComp.vue'
</script>

<template>
  <div id="app">
    <HeaderComp />
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
}

.page-content {
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 28px 20px;
}
</style>
