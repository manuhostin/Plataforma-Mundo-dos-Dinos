<script setup>
import { onMounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import dinossauros from '../data/dinossauros.js'

const mapContainer = ref(null)

onMounted(() => {
  if (!mapContainer.value) return

  const map = L.map(mapContainer.value, {
    center: [-14.2390, -51.9253],
    zoom: 4,
    minZoom: 3,
  })

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
  }).addTo(map)

  const pontos = dinossauros.filter(
    (item) => Array.isArray(item.coords) && item.coords.length === 2
  )

  const emojis = ['🦖', '🦕']

  pontos.forEach((item, index) => {
    const emoji = emojis[index % emojis.length]

    const dinoIcon = L.divIcon({
      html: `
        <div class="dino-marker">
          <div class="dino-emoji">${emoji}</div>
        </div>
      `,
      className: '',
      iconSize: [50, 65],
      iconAnchor: [25, 60],
      popupAnchor: [0, -55],
    })

    const marker = L.marker(item.coords, {
      icon: dinoIcon,
    }).addTo(map)

    const popupContent = `
      <strong>${item.nome}</strong><br />
      ${item.local}<br />
      <em>${item.periodo}</em>
    `

    marker.bindPopup(popupContent)
  })
})
</script>

<template>
  <section class="mapa-page">
    <header class="mapa-header">
      <div>
        <h1>Mapa dos Dinossauros Brasileiros</h1>
        <p>
          Visualize em um mapa interativo os pontos de descoberta dos fósseis dos
          dinossauros do Brasil.
        </p>
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
}

.mapa-page {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.mapa-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
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

/* Marcador em formato de gota */
:deep(.dino-marker) {
  width: 52px;
  height: 52px;
  background: linear-gradient(135deg, #22c55e, #15803d);
  border: 3px solid white;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.2s ease;
}

:deep(.dino-marker:hover) {
  transform: rotate(-45deg) scale(1.15);
}

:deep(.dino-emoji) {
  font-size: 28px;
  transform: rotate(45deg);
  user-select: none;
}
</style>
