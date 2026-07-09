<script setup>
import { ref, computed, inject } from 'vue'
import dinossauros from '../data/dinossauros'

const isEnglish = inject('isEnglish', ref(false))

const busca = ref('')
const periodoSelecionado = ref('')
const dietaSelecionada = ref('')
const estadoSelecionado = ref('')
const ordenacao = ref('az')

const getPrimaryPeriodo = periodo =>
  typeof periodo === 'string' && periodo.trim()
    ? periodo.split(/\s+/)[0].trim()
    : ''

const getPrimaryDieta = dieta =>
  typeof dieta === 'string' && dieta.trim()
    ? dieta.split(/[\s/()]+/)[0].trim()
    : ''

const getEstado = local => {
  if (typeof local !== 'string' || !local.trim())
    return ''

  const partes = local.split(',')
  return partes[partes.length - 1].trim()
}

const periodos = [...new Set(
  dinossauros
    .map(d => getPrimaryPeriodo(d.periodo))
    .filter(Boolean)
)].sort()

const dietas = [...new Set(
  dinossauros
    .map(d => getPrimaryDieta(d.dieta))
    .filter(Boolean)
)].sort()

const estados = [...new Set(
  dinossauros
    .map(d => getEstado(d.local))
    .filter(Boolean)
)].sort()

const normalizeText = text =>
  typeof text === 'string'
    ? text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
    : ''

const dinosFiltrados = computed(() => {
  let lista = [...dinossauros]

  lista = lista.filter(dino => {
    const buscaTexto = normalizeText(busca.value)
    const nomeNormalizado = normalizeText(dino.nome)

    const matchBusca = !buscaTexto || nomeNormalizado.startsWith(buscaTexto)

    const matchPeriodo =
      !periodoSelecionado.value ||
      getPrimaryPeriodo(dino.periodo) === periodoSelecionado.value

    const matchDieta =
      !dietaSelecionada.value ||
      getPrimaryDieta(dino.dieta) === dietaSelecionada.value

    const matchEstado =
      !estadoSelecionado.value ||
      getEstado(dino.local) === estadoSelecionado.value

    return (
      matchBusca &&
      matchPeriodo &&
      matchDieta &&
      matchEstado
    )
  })

  lista.sort((a, b) => {
    if (ordenacao.value === 'az')
      return a.nome.localeCompare(b.nome)

    return b.nome.localeCompare(a.nome)
  })

  return lista
})

const text = computed(() => ({
  headerTitle: isEnglish.value
    ? 'Brazilian Dinosaur Catalog'
    : 'Catálogo de Dinossauros Brasileiros',
  resultsFound: isEnglish.value
    ? `${dinosFiltrados.value.length} species found`
    : `${dinosFiltrados.value.length} espécies encontradas`,
  searchLabel: isEnglish.value ? 'Search' : 'Buscar',
  searchPlaceholder: isEnglish.value ? 'Search dinosaur...' : 'Pesquisar dinossauro...',
  periodoLabel: isEnglish.value ? 'Period' : 'Período',
  dietaLabel: isEnglish.value ? 'Diet' : 'Dieta',
  estadoLabel: isEnglish.value ? 'State' : 'Estado',
  ordenarLabel: isEnglish.value ? 'Sort' : 'Ordenar',
  allOption: isEnglish.value ? 'All' : 'Todos',
  sortAz: isEnglish.value ? 'A → Z' : 'A → Z',
  sortZa: isEnglish.value ? 'Z → A' : 'Z → A',
  clearButton: isEnglish.value ? 'Clear' : 'Limpar',
  dietLabel: isEnglish.value ? 'Diet:' : 'Dieta:',
  familyLabel: isEnglish.value ? 'Family:' : 'Família:',
  sizeLabel: isEnglish.value ? 'Size:' : 'Tamanho:',
  weightLabel: isEnglish.value ? 'Weight:' : 'Peso:',
}))

function limparFiltros() {
  busca.value = ''
  periodoSelecionado.value = ''
  dietaSelecionada.value = ''
  estadoSelecionado.value = ''
  ordenacao.value = 'az'
}
</script>

<template>
  <section class="catalogo-page">
    <header class="catalogo-header">
      <h1>{{ text.headerTitle }}</h1>
      <p>{{ text.resultsFound }}</p>
    </header>

    <div class="filtros-container">
      <div class="filtros-grid">
        <!-- Busca -->
        <div class="filtro-group">
          <label for="busca-catalogo">{{ text.searchLabel }}</label>
          <input
            id="busca-catalogo"
            v-model="busca"
            type="text"
            :placeholder="text.searchPlaceholder"
            class="filtro-input"
          />
        </div>

        <!-- Período -->
        <div class="filtro-group">
          <label for="periodo-catalogo">{{ text.periodoLabel }}</label>
          <select
            id="periodo-catalogo"
            v-model="periodoSelecionado"
            class="filtro-select"
          >
            <option value="">{{ text.allOption }}</option>
            <option
              v-for="periodo in periodos"
              :key="periodo"
              :value="periodo"
            >
              {{ periodo }}
            </option>
          </select>
        </div>

        <!-- Dieta -->
        <div class="filtro-group">
          <label for="dieta-catalogo">{{ text.dietaLabel }}</label>
          <select
            id="dieta-catalogo"
            v-model="dietaSelecionada"
            class="filtro-select"
          >
            <option value="">{{ text.allOption }}</option>
            <option
              v-for="dieta in dietas"
              :key="dieta"
              :value="dieta"
            >
              {{ dieta }}
            </option>
          </select>
        </div>

        <!-- Estado -->
        <div class="filtro-group">
          <label for="estado-catalogo">{{ text.estadoLabel }}</label>
          <select
            id="estado-catalogo"
            v-model="estadoSelecionado"
            class="filtro-select"
          >
            <option value="">{{ text.allOption }}</option>
            <option
              v-for="estado in estados"
              :key="estado"
              :value="estado"
            >
              {{ estado }}
            </option>
          </select>
        </div>

        <!-- Ordenação -->
        <div class="filtro-group">
          <label for="ordenacao-catalogo">{{ text.ordenarLabel }}</label>
          <select
            id="ordenacao-catalogo"
            v-model="ordenacao"
            class="filtro-select"
          >
            <option value="az">{{ text.sortAz }}</option>
            <option value="za">{{ text.sortZa }}</option>
          </select>
        </div>

        <!-- Botão Limpar -->
        <div class="filtro-group btn-group">
          <button @click="limparFiltros" class="btn-limpar">
            {{ text.clearButton }}
          </button>
        </div>
      </div>
    </div>

    <div class="cards-grid">
      <router-link
        v-for="dino in dinosFiltrados"
        :key="dino.id"
        :to="{ name: 'pagina', params: { id: dino.id } }"
        class="card-link"
      >
        <article class="card">
          <div v-if="dino.imagem" class="card-image">
            <img
              :src="dino.imagem"
              :alt="dino.nome"
            />
          </div>

          <div class="card-body">
            <h2><em>{{ dino.nome }}</em></h2>

            <p class="tag">
              {{ dino.periodo }}
            </p>

            <p class="local">
               <font-awesome-icon icon="location-dot" />
{{ dino.local }}
            </p>

            <p class="description">
              {{ dino.descricao }}
            </p>

            <ul class="metadata">
              <li><strong>{{ text.dietLabel }}</strong> {{ dino.dieta }}</li>
              <li><strong>{{ text.familyLabel }}</strong> {{ dino.familia }}</li>
              <li><strong>{{ text.sizeLabel }}</strong> {{ dino.tamanho }}</li>
              <li><strong>{{ text.weightLabel }}</strong> {{ dino.peso }}</li>
            </ul>

          </div>
        </article>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap');

* {
  font-family: 'Lexend Deca', sans-serif;
  box-sizing: border-box;
}

.catalogo-page {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: var(--page-text);
}

.catalogo-header h1 {
  margin: 0;
  font-size: 2rem;
  color: var(--accent-strong);
}

.catalogo-header p {
  margin: 4px 0 0 0;
  color: var(--page-text);
  opacity: 0.8;
  font-size: 1rem;
}

.filtros-container {
  background: var(--surface);
  border-radius: 20px;
  padding: 24px;
  border: 1px solid var(--border);
  box-shadow: 0 8px 25px var(--shadow, rgba(0, 0, 0, 0.08));
}

.filtros-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr auto;
  gap: 14px;
  align-items: end;
}

.filtro-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}

.filtro-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--page-text);
  letter-spacing: 0.3px;
}

.filtro-input,
.filtro-select {
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid var(--border);
  border-radius: 10px;
  background: var(--surface-muted);
  color: var(--page-text);
  font-size: 0.9rem;
  transition: all 0.25s ease;
  font-family: 'Lexend Deca', sans-serif;
  height: 42px;
}

.filtro-input::placeholder {
  color: var(--page-text);
  opacity: 0.6;
}

.filtro-input:hover,
.filtro-select:hover {
  border-color: var(--accent);
}

.filtro-input:focus,
.filtro-select:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 4px rgba(104, 78, 8, 0.12);
}

.btn-group {
  display: flex;
  align-items: end;
}

.btn-limpar {
  border: none;
  padding: 10px 28px;
  border-radius: 10px;
  cursor: pointer;
  background: #22c55e;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  font-family: 'Lexend Deca', sans-serif;
  height: 42px;
  white-space: nowrap;
  width: 100%;
}

.btn-limpar:hover {
  background: #16a34a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
}

.btn-limpar:active {
  transform: scale(0.98);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.card-link {
  text-decoration: none;
  color: inherit;
}

.card {
  background: var(--surface);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: 0 8px 25px var(--shadow, rgba(0, 0, 0, 0.08));
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 35px var(--shadow, rgba(0, 0, 0, 0.12));
}

.card-image {
  background: var(--surface-muted);
  flex-shrink: 0;
}

.card-image img {
  display: block;
  width: 100%;
  height: 240px;
  object-fit: cover;
  object-position: center;
}

.card-body {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-body h2 {
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 1.3rem;
  color: var(--page-text);
}

.tag {
  color: var(--accent);
  font-weight: 600;
  font-size: 0.9rem;
  margin: 4px 0;
}

.local {
  color: var(--page-text);
  opacity: 0.8;
  font-size: 0.9rem;
  margin: 4px 0;
}

.description {
  color: var(--page-text);
  opacity: 0.8;
  line-height: 1.6;
  margin: 8px 0;
  flex: 1;
}

.metadata {
  list-style: none;
  padding: 0;
  margin: 12px 0 0 0;
  border-top: 1px solid var(--border);
  padding-top: 12px;
}

.metadata li {
  margin-bottom: 4px;
  font-size: 0.9rem;
  color: var(--page-text);
  opacity: 0.8;
}

.metadata li strong {
  color: var(--page-text);
}

@media (max-width: 1200px) {
  .filtros-grid {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
  }

  .filtro-group:first-child {
    grid-column: 1 / -1;
  }

  .btn-group {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .filtros-grid {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .filtro-group:first-child {
    grid-column: 1 / -1;
  }

  .btn-group {
    grid-column: 1 / -1;
  }

  .cards-grid {
    grid-template-columns: 1fr;
  }

  .catalogo-page {
    padding: 16px;
  }
}

@media (max-width: 480px) {
  .filtros-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .filtro-group:first-child {
    grid-column: 1;
  }

  .btn-group {
    grid-column: 1;
  }
}
</style>
