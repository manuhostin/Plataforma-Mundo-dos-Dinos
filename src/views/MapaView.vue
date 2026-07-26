<script setup>
import { onMounted, ref, computed, watch, inject } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import dinossauros from '../data/dinossauros.js'
import { translateDinoField } from '../utils/translateDinoData'

const isEnglish = inject('isEnglish', ref(false))
const mapContainer = ref(null)
let map = null
let markers = []

const filtros = ref({
  periodo: '',
  dieta: '',
  estado: '',
  busca: ''
})

const translatedDinos = computed(() =>
  dinossauros.map(dino => ({
    ...dino,
    nome: translateDinoField(dino, 'nome', isEnglish.value),
    periodo: translateDinoField(dino, 'periodo', isEnglish.value),
    dieta: translateDinoField(dino, 'dieta', isEnglish.value),
    local: translateDinoField(dino, 'local', isEnglish.value),
    familia: translateDinoField(dino, 'familia', isEnglish.value),
    tamanho: translateDinoField(dino, 'tamanho', isEnglish.value),
    peso: translateDinoField(dino, 'peso', isEnglish.value),
    descricao: translateDinoField(dino, 'descricao', isEnglish.value),
  }))
)

const opcoesPeriodo = computed(() => {
  const periodos = new Set()
  translatedDinos.value.forEach(d => {
    if (d.periodo) {
      const periodoPrincipal = d.periodo.split(' ')[0]
      periodos.add(periodoPrincipal)
    }
  })
  return [(isEnglish.value ? 'All' : 'Todos'), ...Array.from(periodos).sort()]
})

const opcoesDieta = computed(() => {
  const dietas = new Set()
  translatedDinos.value.forEach(d => {
    if (d.dieta) dietas.add(d.dieta)
  })
  return [(isEnglish.value ? 'All' : 'Todos'), ...Array.from(dietas).sort()]
})

const opcoesEstado = computed(() => {
  const estados = new Set()
  translatedDinos.value.forEach(d => {
    if (d.local) {
      const partes = d.local.split(', ')
      const estado = partes[partes.length - 1]
      estados.add(estado)
    }
  })
  return [(isEnglish.value ? 'All' : 'Todos'), ...Array.from(estados).sort()]
})

// Dados filtrados
const dadosFiltrados = computed(() => {
  return translatedDinos.value.filter(d => {
    if (filtros.value.periodo && filtros.value.periodo !== 'Todos') {
      if (!d.periodo || !d.periodo.includes(filtros.value.periodo)) {
        return false
      }
    }

    if (filtros.value.dieta && filtros.value.dieta !== 'Todos') {
      if (d.dieta !== filtros.value.dieta) {
        return false
      }
    }

    if (filtros.value.estado && filtros.value.estado !== 'Todos') {
      if (!d.local || !d.local.includes(filtros.value.estado)) {
        return false
      }
    }

    if (filtros.value.busca) {
      const buscaLower = filtros.value.busca.toLowerCase()
      const nomeMatch = d.nome?.toLowerCase().includes(buscaLower)
      const localMatch = d.local?.toLowerCase().includes(buscaLower)
      const periodoMatch = d.periodo?.toLowerCase().includes(buscaLower)
      if (!nomeMatch && !localMatch && !periodoMatch) {
        return false
      }
    }

    return true
  })
})

const emojiMap = {
  'teropode': '🦖',
  'sauropode': '🦕',
  'ave': '🐦'
}

const emojiPadrao = '🦴'

const text = computed(() => ({
  title: isEnglish.value ? 'Map of Brazilian Dinosaurs' : 'Mapa dos Dinossauros Brasileiros',
  intro: isEnglish.value
    ? 'Explore the fossil discovery sites of Brazilian dinosaurs on an interactive map. For more information, visit the '
    : 'Visualize em um mapa interativo os pontos de descoberta dos fósseis dos dinossauros do Brasil. Para mais informações, visite o ',
  catalogLink: isEnglish.value ? 'catalog' : 'catálogo',
  allOption: isEnglish.value ? 'All' : 'Todos',
  searchLabel: isEnglish.value ? 'Search' : 'Buscar',
  searchPlaceholder: isEnglish.value ? 'Name, place or period...' : 'Nome, local ou período...',
  periodLabel: isEnglish.value ? 'Period' : 'Período',
  dietLabel: isEnglish.value ? 'Diet' : 'Dieta',
  stateLabel: isEnglish.value ? 'State' : 'Estado',
  clearButton: isEnglish.value ? 'Clear' : 'Limpar',
  resultsCount: isEnglish.value
    ? `${dadosFiltrados.value.length} dinosaur(s) found`
    : `${dadosFiltrados.value.length} dinossauro(s) encontrado(s)`,
  popupDietLabel: isEnglish.value ? 'Diet' : 'Dieta',
  popupSizeLabel: isEnglish.value ? 'Size' : 'Tamanho',
}))

function atualizarMarcadores() {
  if (!map) return

  markers.forEach(marker => map.removeLayer(marker))
  markers = []

  const pontos = dadosFiltrados.value.filter(
    (item) => Array.isArray(item.coords) && item.coords.length === 2
  )

  pontos.forEach((item) => {
    const emoji = emojiMap[item.emoji?.toLowerCase()] || emojiPadrao

    const dinoIcon = L.divIcon({
      html: `
        <div class="dino-marker">
          <div class="dino-emoji">${emoji}</div>
        </div>
      `,
      className: '',
      iconSize: [36, 48],
      iconAnchor: [18, 44],
      popupAnchor: [0, -40],
    })

    const marker = L.marker(item.coords, {
      icon: dinoIcon,
    }).addTo(map)

    const popupContent = `
      <strong><em>${item.nome}</em></strong><br />
      ${item.local}<br />
      <em>${item.periodo}</em><br />
      <span style="font-size: 0.9rem; color: #475569;">
        ${text.value.popupDietLabel}: ${item.dieta} | ${text.value.popupSizeLabel}: ${item.tamanho || 'N/A'}
      </span>
      ${item.descricao ? `<br /><br /><span style="font-size: 0.85rem;">${item.descricao}</span>` : ''}
    `

    marker.bindPopup(popupContent)
    markers.push(marker)
  })

  if (markers.length > 0) {
    const group = L.featureGroup(markers)
    map.fitBounds(group.getBounds(), { padding: [50, 50] })
  }
}

watch(dadosFiltrados, () => {
  atualizarMarcadores()
}, { deep: true })

onMounted(() => {
  if (!mapContainer.value) return

  map = L.map(mapContainer.value, {
    center: [-14.2390, -51.9253],
    zoom: 4,
    minZoom: 3,
  })

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
  }).addTo(map)

  atualizarMarcadores()
})

function limparFiltros() {
  filtros.value.periodo = ''
  filtros.value.dieta = ''
  filtros.value.estado = ''
  filtros.value.busca = ''
}
</script>

<template>
  <section class="mapa-page">
    <header class="mapa-header">
      <div>
        <h1>{{ text.title }}</h1>
        <p>
          {{ text.intro }}<strong>{{ text.catalogLink }}</strong>!
        </p>
      </div>

      <!-- Filtros -->
      <div class="filtros-container">
        <div class="filtros-grid">
          <!-- Busca -->
          <div class="filtro-group">
            <label for="busca">{{ text.searchLabel }}</label>
            <input
              id="busca"
              v-model="filtros.busca"
              type="text"
              :placeholder="text.searchPlaceholder"
              class="filtro-input"
            />
          </div>

          <!-- Período -->
          <div class="filtro-group">
            <label for="periodo">{{ text.periodLabel }}</label>
            <select id="periodo" v-model="filtros.periodo" class="filtro-select">
              <option value="">{{ text.allOption }}</option>
              <option v-for="opcao in opcoesPeriodo" :key="opcao" :value="opcao">
                {{ opcao }}
              </option>
            </select>
          </div>

          <!-- Dieta -->
          <div class="filtro-group">
            <label for="dieta">{{ text.dietLabel }}</label>
            <select id="dieta" v-model="filtros.dieta" class="filtro-select">
              <option value="">{{ text.allOption }}</option>
              <option v-for="opcao in opcoesDieta" :key="opcao" :value="opcao">
                {{ opcao }}
              </option>
            </select>
          </div>

          <!-- Estado -->
          <div class="filtro-group">
            <label for="estado">{{ text.stateLabel }}</label>
            <select id="estado" v-model="filtros.estado" class="filtro-select">
              <option value="">{{ text.allOption }}</option>
              <option v-for="opcao in opcoesEstado" :key="opcao" :value="opcao">
                {{ opcao }}
              </option>
            </select>
          </div>

          <!-- Botão Limpar -->
          <div class="filtro-group btn-group">
            <button @click="limparFiltros" class="btn-limpar">
              {{ text.clearButton }}
            </button>
          </div>
        </div>

        <!-- Contador -->
        <div class="resultados-info">
          <span>{{ text.resultsCount }}</span>
        </div>
      </div>
    </header>

    <div class="map-wrapper">
      <div ref="mapContainer" class="map-container"></div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap');

* {
  font-family: 'Lexend Deca', sans-serif;
  box-sizing: border-box;
}

.mapa-page {
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: var(--page-text);
}

.mapa-header {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mapa-header h1 {
  margin: 0;
  font-size: 2rem;
  color: var(--accent-strong);
}

.mapa-header p {
  margin: 0;
  color: var(--page-text);
  opacity: 0.8;
  max-width: 760px;
  line-height: 1.7;
}

.filtros-container {
  background: var(--surface);
  border-radius: 20px;
  padding: 24px;
  border: 1px solid var(--border);
  box-shadow: 0 8px 25px var(--shadow, rgba(0, 0, 0, 0.08));
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.filtros-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr auto;
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
  box-shadow: 0 0 0 4px rgba(51, 104, 8, 0.12);
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

.resultados-info {
  padding-top: 14px;
  border-top: 1px solid var(--border);
  color: var(--page-text);
  opacity: 0.8;
  font-size: 0.95rem;
}

.resultados-info span {
  color: var(--accent-strong);
  font-weight: 700;
}

.map-wrapper {
  width: 100%;
  min-height: 560px;
  border: 1px solid var(--border);
  border-radius: 22px;
  overflow: hidden;
}

.map-container {
  width: 100%;
  height: 100%;
  min-height: 560px;
}

:deep(.leaflet-popup-content-wrapper),
:deep(.leaflet-popup-tip) {
  background: var(--surface);
  color: var(--page-text);
}

:deep(.dino-marker) {
  width: 38px;
  height: 38px;
  background: linear-gradient(135deg, #22c55e, #15803d);
  border: 2.5px solid white;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.2s ease;
}

:deep(.dino-marker:hover) {
  transform: rotate(-45deg) scale(1.15);
}

:deep(.dino-emoji) {
  font-size: 20px;
  transform: rotate(45deg);
  user-select: none;
}

@media (max-width: 1024px) {
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
}

@media (max-width: 600px) {
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
