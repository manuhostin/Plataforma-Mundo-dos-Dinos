<script setup>
import { computed, ref, watch, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import dinossauros from '../data/dinossauros'
import { translateDinoField } from '../utils/translateDinoData'

const route = useRoute()
const router = useRouter()

const isEnglish = inject('isEnglish', ref(false))

const dinoOriginal = computed(() =>
  dinossauros.find(item => item.id == route.params.id)
)

const dino = computed(() => {
  if (!dinoOriginal.value) return null

  return {
    ...dinoOriginal.value,
    nome: translateDinoField(dinoOriginal.value, 'nome', isEnglish.value),
    periodo: translateDinoField(dinoOriginal.value, 'periodo', isEnglish.value),
    dieta: translateDinoField(dinoOriginal.value, 'dieta', isEnglish.value),
    local: translateDinoField(dinoOriginal.value, 'local', isEnglish.value),
    familia: translateDinoField(dinoOriginal.value, 'familia', isEnglish.value),
    tamanho: translateDinoField(dinoOriginal.value, 'tamanho', isEnglish.value),
    peso: translateDinoField(dinoOriginal.value, 'peso', isEnglish.value),
    descricao: translateDinoField(dinoOriginal.value, 'descricao', isEnglish.value),
    curiosidades: translateDinoField(dinoOriginal.value, 'curiosidades', isEnglish.value),
  }
})

const imagemSelecionada = ref('')

const galeria = computed(() => {
  if (!dino.value) return []

  return (dino.value.galeria && dino.value.galeria.length)
    ? dino.value.galeria
    : dino.value.imagem
      ? [dino.value.imagem]
      : []
})

watch(dinoOriginal, (novo) => {
  if (novo?.imagem) {
    imagemSelecionada.value = novo.imagem
  }
}, { immediate: true })

const text = computed(() => ({
  back: isEnglish.value ? 'Back' : 'Voltar',
  diet: isEnglish.value ? 'Diet' : 'Dieta',
  family: isEnglish.value ? 'Family' : 'Família',
  size: isEnglish.value ? 'Size' : 'Tamanho',
  weight: isEnglish.value ? 'Weight' : 'Peso',
  funFact: isEnglish.value ? 'Fun Fact' : 'Curiosidade',
  gallery: isEnglish.value ? 'Gallery' : 'Galeria',
  notFound: isEnglish.value ? 'Dinosaur not found' : 'Dinossauro não encontrado',
}))
</script>

<template>

<button
class="botao-voltar"
@click="router.back()"
>
<font-awesome-icon icon="arrow-left" />
{{ text.back }}
</button>

<section
v-if="dino"
class="pagina"
>

<div class="banner">

<img
:src="imagemSelecionada"
:alt="dino.nome"
>

<div class="overlay">

<h1>
<em>{{ dino.nome }}</em>
</h1>

<p class="periodo">
{{ dino.periodo }}
</p>

<p class="local">
<font-awesome-icon icon="location-dot" />
{{ dino.local }}
</p>

</div>

</div>

<div class="conteudo">

<p class="descricao">
{{ dino.descricao }}
</p>

<div class="info-cards">

<div class="info-card">

<span>
<font-awesome-icon icon="drumstick-bite" />
{{ text.diet }}
</span>

<strong>
{{ dino.dieta }}
</strong>

</div>


<div class="info-card">

<span>
<font-awesome-icon icon="dna" />
{{ text.family }}
</span>

<strong>
{{ dino.familia }}
</strong>

</div>


<div class="info-card">

<span>
<font-awesome-icon icon="ruler" />
{{ text.size }}
</span>

<strong>
{{ dino.tamanho }}
</strong>

</div>


<div class="info-card">

<span>
<font-awesome-icon icon="weight-scale" />
{{ text.weight }}
</span>

<strong>
{{ dino.peso }}
</strong>

</div>

</div>


<div
v-if="dino.curiosidades"
class="curiosidade"
>

<h3>

 <font-awesome-icon icon="lightbulb" class="fa-icon" />

{{ text.funFact }}

</h3>

<p>
{{ dino.curiosidades }}
</p>

</div>


<div class="galeria">

<h2>{{ text.gallery }}</h2>

<div class="miniaturas">

<img
v-for="(foto,index) in galeria"
:key="index"
:src="foto"
@click="imagemSelecionada=foto"
class="thumb"
:class="{ativo:imagemSelecionada===foto}"
>

</div>

</div>

</div>

</section>

<section
v-else
class="erro"
>

{{ text.notFound }}

</section>

</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap');

*{
font-family:'Lexend Deca',sans-serif;
box-sizing:border-box;
}

.pagina{
max-width:1400px;
margin:auto;
padding-bottom:50px;
color: var(--page-text);
}

.banner{
position:relative;
height:550px;
overflow:hidden;
border-radius:0 0 35px 35px;
}

.banner img{
width:100%;
height:100%;
object-fit:cover;
}

.overlay{
position:absolute;
bottom:0;
left:0;
width:100%;
padding:50px;
background:linear-gradient(
transparent,
rgba(0,0,0,.85)
);
color:white;
}

.overlay h1{
margin:0;
font-size:3rem;
}

.botao-voltar{
border:none;
background:var(--surface);
color:var(--page-text);
padding:12px 20px;
border-radius:999px;
cursor:pointer;
font-weight:700;
box-shadow:0 10px 30px rgba(15,23,42,.12);

display:flex;
align-items:center;
gap:10px;

transition:.2s;
margin-bottom:30px;
}

.botao-voltar:hover{
transform:translateY(-2px);
background:var(--surface-muted);
}

.periodo{
font-size:1rem;
font-weight:600;
margin-top:10px;
}

.local{
display:flex;
align-items:center;
gap:8px;
opacity:.9;
}

.conteudo{
padding:40px;
}

.descricao{
font-size:1rem;
line-height:1.9;
color: var(--page-text);
opacity: 0.85;
margin-bottom:35px;
}

.info-cards{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:20px;
margin-bottom:35px;
}

.info-card{
background:var(--surface);
padding:25px;
border-radius:20px;
box-shadow:0 8px 25px rgba(0,0,0,.07);

display:flex;
flex-direction:column;
gap:10px;
}

.info-card span{
display:flex;
align-items:center;
gap:8px;

font-size:.9rem;
color: var(--page-text);
opacity: 0.75;
}

.info-card strong{
font-size:1.1rem;
color:var(--accent-strong);
}

.curiosidade{
background:var(--surface-muted);
padding:25px;
border-radius:20px;
margin-bottom:50px;
}

.curiosidade h3{
display:flex;
align-items:center;
gap:10px;

margin-top:0;
color:var(--accent);
}

.fa-solid{
color:var(--accent);
}

.galeria h2{
margin-bottom:25px;
color:var(--accent-strong);
}

.miniaturas{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:25px;
}

.thumb{
width:100%;
height:220px;
object-fit:cover;
border-radius:20px;
cursor:pointer;
transition:.4s;
border:4px solid transparent;
}

.thumb:hover{
transform:translateY(-6px);
}

.thumb.ativo{
border-color:var(--accent-strong);
}

.erro{
padding:100px;
text-align:center;
color: var(--page-text);
}

@media(max-width:900px){

.banner{
height:400px;
}

.overlay h1{
font-size:2rem;
}

.info-cards{
grid-template-columns:repeat(2,1fr);
}

}

@media(max-width:600px){

.info-cards{
grid-template-columns:1fr;
}

.conteudo{
padding:20px;
}

.banner{
height:300px;
}

}

</style>
