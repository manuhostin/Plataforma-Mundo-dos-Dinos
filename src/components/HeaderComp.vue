<script setup lang="ts">
</script>

<template>
  <header class="header">
    <div class="header-content">
      <div class="logo"> <p>Dinossauros <strong>Brasileiros</strong></p></div>
      <nav class="nav-links">
        <router-link to="/" class="nav-link">Início</router-link>
        <router-link to="/mapa" class="nav-link">Mapa</router-link>
        <router-link to="/catalogo" class="nav-link">Catálogo</router-link>
        <router-link to="/quiz" class="nav-link">Quiz</router-link>
        <router-link to="/sobre" class="nav-link">Sobre</router-link>
      </nav>
    </div>
  </header>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap');

.header {
  font-family: "Lexend Deca", sans-serif;
  background-color: #f8fafc;
  padding: 10px 40px;
  border-bottom: 1px solid #e2e8f0;
}
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: 500;
  font-size: 14px;
  color: #ffc400;
}
.logo strong {
  color: #186e03;

}
.nav-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  font-weight: 400;
  font-size: 12px;
  color: #df9d10;
  text-decoration: none;
}

.nav-link:hover {
  color: #336808;
}
</style>
