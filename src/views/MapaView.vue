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

  const pontos = dinossauros.filter((item) => Array.isArray(item.coords) && item.coords.length === 2)

  pontos.forEach((item) => {
    const marker = L.marker(item.coords).addTo(map)
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
        <h1>Mapa de Descobertas de Dinossauros Brasileiros</h1>
        <p>Visualize em um mapa interativo os pontos de descoberta dos dinossauros cadastrados.</p>
      </div>
    </header>

    <div class="map-wrapper">
      <div ref="mapContainer" class="map-container"></div>
    </div>
  </section>
</template>

<style scoped>
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
  color: #1b2a41;
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
</style>
