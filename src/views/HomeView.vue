<template>
  <section class="home-hero">
    <div class="hero-card">
      <h1>O Fantástico Mundo dos Dinossauros Brasileiros</h1>
      <p>Explore informações sobre espécies encontradas no território brasileiro e use o catálogo para preencher dados manualmente.</p>
      <router-link to="/catalogo" class="cta-button">Abrir Catálogo</router-link>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap');
*{
  font-family: 'Lexend Deca', sans-serif;
}
.home-hero {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 180px);
  padding: 40px 0;
  font-family: 'Lexend Deca', sans-serif;
}

.hero-card {
  width: 100%;
  max-width: 860px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
}

.hero-card h1 {
  margin: 0 0 18px;
  font-size: 2.6rem;
  line-height: 1.1;
  color: #1b2a41;
}

.hero-card p {
  margin: 0 0 28px;
  color: #4a5568;
  font-size: 1rem;
  line-height: 1.8;
}

.cta-button {
  display: inline-block;
  background: #2d6cdf;
  color: white;
  padding: 14px 24px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
}

.cta-button:hover {
  background: #265bb3;
}
</style>
