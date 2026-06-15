<script setup>
import dinossauros from '../data/dinossauros'
</script>

<template>
  <section class="catalogo-page">
    <header class="catalogo-header">
      <div>
        <h1>Catálogo de Dinossauros Brasileiros</h1>
      </div>
    </header>

    <div v-if="dinossauros.length === 0" class="empty-state">
      <p>O catálogo está vazio. Abra <code>src/data/dinossauros.js</code> e adicione suas espécies brasileiras.</p>
    </div>

    <div v-else class="cards-grid">
      <article v-for="dino in dinossauros" :key="dino.id" class="card">
        <div v-if="dino.imagem" class="card-image">
          <img :src="dino.imagem" :alt="dino.nome" />
        </div>
        <div class="card-body">
          <h2>{{ dino.nome }}</h2>
          <p class="tag">{{ dino.periodo }} · {{ dino.local }}</p>
          <p class="description">{{ dino.descricao }}</p>
          <ul class="metadata">
            <li><strong>Família:</strong> {{ dino.familia || '—' }}</li>
            <li><strong>Tamanho:</strong> {{ dino.tamanho || '—' }}</li>
            <li><strong>Peso:</strong> {{ dino.peso || '—' }}</li>
          </ul>
          <p v-if="dino.curiosidades" class="curiosidades"><strong>Curiosidades:</strong> {{ dino.curiosidades }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.catalogo-page {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.catalogo-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
  flex-wrap: wrap;
}

.catalogo-header h1 {
  margin: 0;
  font-size: 2rem;
  color: #1b2a41;
}

.catalogo-header p {
  margin: 4px 0 0;
  color: #4a5568;
  max-width: 720px;
}

.empty-state {
  padding: 32px;
  border: 1px dashed #cbd5e1;
  border-radius: 20px;
  background: #f8fafc;
  color: #475569;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.card {
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  overflow: hidden;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  min-height: 240px;
  box-shadow: 0 12px 36px rgba(15, 23, 42, 0.05);
}

.card-image img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.card-body {
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.card-body h2 {
  margin: 0;
  font-size: 1.4rem;
  color: #1b2a41;
}

.tag {
  margin: 0;
  color: #667084;
  font-size: 0.95rem;
}

.description {
  margin: 0;
  color: #475569;
  line-height: 1.7;
}

.metadata {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 6px;
  color: #475569;
  font-size: 0.95rem;
}

.metadata li {
  margin: 0;
}

.curiosidades {
  margin: 0;
  color: #334155;
}
</style>
