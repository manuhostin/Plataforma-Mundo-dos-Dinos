
<script setup>
import { ref, computed } from 'vue'
import dinossauros from '../data/dinossauros'

const busca = ref('')
const periodoSelecionado = ref('')
const dietaSelecionada = ref('')
const estadoSelecionado = ref('')
const ordenacao = ref('az')

const periodos = [...new Set(
  dinossauros.map(d => d.periodo.split(',')[0].trim())
)].sort()

const dietas = [...new Set(
  dinossauros.map(d => d.dieta)
)].sort()

const estados = [...new Set(
  dinossauros.map(d => {
    const partes = d.local.split(',')
    return partes[partes.length - 1].trim()
  })
)].sort()

const dinosFiltrados = computed(() => {
  let lista = [...dinossauros]

  lista = lista.filter(dino => {
    const buscaTexto = busca.value.toLowerCase()

    const matchBusca =
      dino.nome.toLowerCase().includes(buscaTexto) ||
      dino.descricao.toLowerCase().includes(buscaTexto) ||
      dino.familia.toLowerCase().includes(buscaTexto)

    const matchPeriodo =
      !periodoSelecionado.value ||
      dino.periodo.includes(periodoSelecionado.value)

    const matchDieta =
      !dietaSelecionada.value ||
      dino.dieta.includes(dietaSelecionada.value)

    const matchEstado =
      !estadoSelecionado.value ||
      dino.local.includes(estadoSelecionado.value)

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
      <h1>🦖 Catálogo de Dinossauros Brasileiros</h1>
      <p>{{ dinosFiltrados.length }} espécies encontradas</p>
    </header>

    <div class="filtros">

      <input
        v-model="busca"
        type="text"
        placeholder="Pesquisar dinossauro..."
      >

      <select v-model="periodoSelecionado">
        <option value="">Todos os períodos</option>
        <option
          v-for="periodo in periodos"
          :key="periodo"
          :value="periodo"
        >
          {{ periodo }}
        </option>
      </select>

      <select v-model="dietaSelecionada">
        <option value="">Todas as dietas</option>
        <option
          v-for="dieta in dietas"
          :key="dieta"
          :value="dieta"
        >
          {{ dieta }}
        </option>
      </select>

      <select v-model="estadoSelecionado">
        <option value="">Todos os estados</option>
        <option
          v-for="estado in estados"
          :key="estado"
          :value="estado"
        >
          {{ estado }}
        </option>
      </select>

      <select v-model="ordenacao">
        <option value="az">A → Z</option>
        <option value="za">Z → A</option>
      </select>

      <button @click="limparFiltros">
        Limpar
      </button>

    </div>

    <div class="cards-grid">

      <article
        v-for="dino in dinosFiltrados"
        :key="dino.id"
        class="card"
      >

        <div v-if="dino.imagem" class="card-image">
          <img
            :src="dino.imagem"
            :alt="dino.nome"
          >
        </div>

        <div class="card-body">

          <h2>{{ dino.nome }}</h2>

          <p class="tag">
            {{ dino.periodo }}
          </p>

          <p class="local">
            📍 {{ dino.local }}
          </p>

          <p class="description">
            {{ dino.descricao }}
          </p>

          <ul class="metadata">
            <li><strong>Dieta:</strong> {{ dino.dieta }}</li>
            <li><strong>Família:</strong> {{ dino.familia }}</li>
            <li><strong>Tamanho:</strong> {{ dino.tamanho }}</li>
            <li><strong>Peso:</strong> {{ dino.peso }}</li>
          </ul>

          <p
            v-if="dino.curiosidades"
            class="curiosidades"
          >
            <strong>Curiosidade:</strong>
            {{ dino.curiosidades }}
          </p>

        </div>

      </article>

    </div>

  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap');

*{
  font-family:'Lexend Deca',sans-serif;
}

.catalogo-page{
  padding:20px;
}

.catalogo-header{
  margin-bottom:20px;
}

.catalogo-header h1{
  margin:0;
  color: #336808;
}

.catalogo-header p{
  color:#64748b;
}

.filtros{
  display:flex;
  flex-wrap:wrap;
  gap:12px;
  margin-bottom:30px;
}

.filtros input,
.filtros select{
  padding:12px;
  border:1px solid #3b75b8;
  border-radius:12px;
}

.filtros button{
  border:none;
  padding:12px 18px;
  border-radius:12px;
  cursor:pointer;
  background:#006e00;
  color:white;
}

.cards-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
  gap:24px;
}

.card{
  background:white;
  border-radius:20px;
  overflow:hidden;
  border:1px solid #e2e8f0;
  box-shadow:0 8px 25px rgba(0,0,0,.08);
  transition:.3s;
}

.card:hover{
  transform:translateY(-5px);
}

.card-image img{
  width:100%;
  height:220px;
  object-fit:cover;
}

.card-body{
  padding:20px;
}

.card-body h2{
  margin-top:0;
}

.tag{
  color:#2563eb;
  font-weight:600;
}

.local{
  color:#475569;
}

.description{
  color:#334155;
  line-height:1.6;
}

.metadata{
  list-style:none;
  padding:0;
  margin-top:15px;
}

.metadata li{
  margin-bottom:6px;
}

.curiosidades{
  margin-top:15px;
  padding:12px;
  border-radius:12px;
  background:#f8fafc;
}
</style>

