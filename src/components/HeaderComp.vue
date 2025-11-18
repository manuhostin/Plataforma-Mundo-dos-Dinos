<template>
  <header class="header">
    <div class="header-content">
      <div class="logo">Logo</div>
      <nav class="nav-links">
        <a href="#" class="nav-link">Início</a>
        <a href="#" class="nav-link">Mapa</a>
        <a href="#" class="nav-link">Equipe</a>
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
  color: #1a202c;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  font-weight: 400;
  font-size: 12px;
  color: #718096;
  text-decoration: none;
}

.nav-link:hover {
  color: #2a4365;
}
</style>
