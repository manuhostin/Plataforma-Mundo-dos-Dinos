<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import dinossauros from '../data/dinossauros'

const route = useRoute()
const router = useRouter()

const dino = computed(() =>
  dinossauros.find(item => item.id == route.params.id)
)

const imagemSelecionada = ref('')

const galeria = computed(() => {
  if (!dino.value) return []

  return (dino.value.galeria && dino.value.galeria.length)
    ? dino.value.galeria
    : dino.value.imagem
      ? [dino.value.imagem]
      : []
})

watch(dino, (novo) => {
  if (novo?.imagem) {
    imagemSelecionada.value = novo.imagem
  }
}, { immediate: true })

</script>

<template>

<button
class="botao-voltar"
@click="router.back()"
>
<font-awesome-icon icon="arrow-left" />
Voltar
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
Dieta
</span>

<strong>
{{ dino.dieta }}
</strong>

</div>


<div class="info-card">

<span>
<font-awesome-icon icon="dna" />
Família
</span>

<strong>
{{ dino.familia }}
</strong>

</div>


<div class="info-card">

<span>
<font-awesome-icon icon="ruler" />
Tamanho
</span>

<strong>
{{ dino.tamanho }}
</strong>

</div>


<div class="info-card">

<span>
<font-awesome-icon icon="weight-scale" />
Peso
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

Curiosidade

</h3>

<p>
{{ dino.curiosidades }}
</p>

</div>


<div class="galeria">

<h2>Galeria</h2>

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

Dinossauro não encontrado

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
background:#ffffffcc;
color:#1e293b;
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
background:#f8fafc;
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
color:#334155;
margin-bottom:35px;
}

.info-cards{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:20px;
margin-bottom:35px;
}

.info-card{
background:white;
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
color:#64748b;
}

.info-card strong{
font-size:1.1rem;
color:#336808;
}

.curiosidade{
background:#f9f8f1;
padding:25px;
border-radius:20px;
margin-bottom:50px;
}

.curiosidade h3{
display:flex;
align-items:center;
gap:10px;

margin-top:0;
color:#e0ad04;
}

.fa-solid{
color:#e2a600;
}

.galeria h2{
margin-bottom:25px;
color:#0c74d6;
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
border-color:#336808;
}

.erro{
padding:100px;
text-align:center;
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
