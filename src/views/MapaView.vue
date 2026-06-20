<script setup>
import { onMounted, ref, computed, watch } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import dinossauros from '../data/dinossauros.js'

const mapContainer = ref(null)
let map = null
let markers = []

const filtros = ref({
  periodo: '',
  dieta: '',
  estado: '',
  busca: ''
})

const opcoesPeriodo = computed(() => {
  const periodos = new Set()
  dinossauros.forEach(d => {
    if (d.periodo) {
      const periodoPrincipal = d.periodo.split(' ')[0]
      periodos.add(periodoPrincipal)
    }
  })
  return ['Todos', ...Array.from(periodos).sort()]
})

const opcoesDieta = computed(() => {
  const dietas = new Set()
  dinossauros.forEach(d => {
    if (d.dieta) dietas.add(d.dieta)
  })
  return ['Todos', ...Array.from(dietas).sort()]
})

const opcoesEstado = computed(() => {
  const estados = new Set()
  dinossauros.forEach(d => {
    if (d.local) {
      const partes = d.local.split(', ')
      const estado = partes[partes.length - 1]
      estados.add(estado)
    }
  })
  return ['Todos', ...Array.from(estados).sort()]
})

// Dados filtrados
const dadosFiltrados = computed(() => {
  return dinossauros.filter(d => {
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
        Dieta: ${item.dieta} | Tamanho: ${item.tamanho || 'N/A'}
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
        <h1>Mapa dos Dinossauros Brasileiros</h1>
        <p>
          Visualize em um mapa interativo os pontos de descoberta dos fósseis dos
          dinossauros do Brasil. Para mais informações, visite o <stronger>catálogo!</stronger>
        </p>
      </div>

      <!-- Filtros -->
      <div class="filtros-container">
        <div class="filtros-grid">
          <!-- Busca -->
          <div class="filtro-group">
            <label for="busca">Buscar</label>
            <input
              id="busca"
              v-model="filtros.busca"
              type="text"
              placeholder="Nome, local ou período..."
              class="filtro-input"
            />
          </div>

          <!-- Período -->
          <div class="filtro-group">
            <label for="periodo">Período</label>
            <select id="periodo" v-model="filtros.periodo" class="filtro-select">
              <option value="">Todos</option>
              <option v-for="opcao in opcoesPeriodo" :key="opcao" :value="opcao">
                {{ opcao }}
              </option>
            </select>
          </div>

          <!-- Dieta -->
          <div class="filtro-group">
            <label for="dieta">Dieta</label>
            <select id="dieta" v-model="filtros.dieta" class="filtro-select">
              <option value="">Todos</option>
              <option v-for="opcao in opcoesDieta" :key="opcao" :value="opcao">
                {{ opcao }}
              </option>
            </select>
          </div>

          <!-- Estado -->
          <div class="filtro-group">
            <label for="estado">Estado</label>
            <select id="estado" v-model="filtros.estado" class="filtro-select">
              <option value="">Todos</option>
              <option v-for="opcao in opcoesEstado" :key="opcao" :value="opcao">
                {{ opcao }}
              </option>
            </select>
          </div>

          <!-- Botão Limpar -->
          <div class="filtro-group btn-group">
            <button @click="limparFiltros" class="btn-limpar">
              Limpar
            </button>
          </div>
        </div>

        <!-- Contador -->
        <div class="resultados-info">
          <span>{{ dadosFiltrados.length }} dinossauro(s) encontrado(s)</span>
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
}

.mapa-header {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mapa-header h1 {
  margin: 0;
  font-size: 2rem;
  color: #336808;
}

.mapa-header p {
  margin: 0;
  color: #475569;
  max-width: 760px;
  line-height: 1.7;
}

/* ===== FILTROS ===== */
.filtros-container {
  background: white;
  border-radius: 20px;
  padding: 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
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
  color: #475569;
  letter-spacing: 0.3px;
}

.filtro-input,
.filtro-select {
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid #d1d5db;
  border-radius: 10px;
  background: #fff;
  color: #334155;
  font-size: 0.9rem;
  transition: all 0.25s ease;
  font-family: 'Lexend Deca', sans-serif;
  height: 42px;
}

.filtro-input::placeholder {
  color: #94a3b8;
}

.filtro-input:hover,
.filtro-select:hover {
  border-color: #fca607;
}

.filtro-input:focus,
.filtro-select:focus {
  outline: none;
  border-color: #fca607;
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
  border-top: 1px solid #e2e8f0;
  color: #64748b;
  font-size: 0.95rem;
}

.resultados-info span {
  color: #084a68;
  font-weight: 700;
}

.map-wrapper {
  width: 100%;
  min-height: 560px;
  border: 1px solid #e2e8f0;
  border-radius: 22px;
  overflow: hidden;
}

.map-container {
  width: 100%;
  height: 100%;
  min-height: 560px;
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

/* Responsividade */
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
