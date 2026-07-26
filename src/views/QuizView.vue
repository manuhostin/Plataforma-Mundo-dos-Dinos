<template>
  <section class="quiz-container">

    <div class="quiz-card">

      <h1>
        {{ text.title }}
        <span>{{ text.subtitle }}</span>
      </h1>

      <div v-if="perguntaAtual">

        <img
          :src="perguntaAtual.dino.imagem"
          :alt="perguntaAtual.dino.nome"
          class="imagem"
        />

        <div class="question-box">

          <h2>
            {{ text.questionPrefix }}
            <span>{{ getTipoLabel(perguntaAtual.tipo) }}</span>
            {{ text.questionSuffix }}
            {{ perguntaAtual.dino.nome }}?
          </h2>

          <p class="rodada">
            {{ text.questionCounter.replace('{number}', rodada + 1) }}
          </p>

        </div>

        <div class="opcoes">

          <button
            v-for="opcao in perguntaAtual.opcoes"
            :key="opcao"
            @click="responder(opcao)"
          >
            {{ opcao }}
          </button>

        </div>

        <div class="score">

          ⭐ {{ pontos }} {{ text.pointsLabel }}

        </div>

      </div>

      <div v-else class="resultado">

        <h2>
          🎉 {{ text.finishedTitle }}
        </h2>

        <div class="resultado-box">

          <h3>
            {{ text.scoreLabel }}
          </h3>

          <span>
            {{ pontos }}/10
          </span>

        </div>

        <button
          class="reiniciar-btn"
          @click="reiniciar"
        >
          {{ text.restartButton }}
        </button>

      </div>

    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, inject, computed } from 'vue'
import dinossauros from '@/data/dinossauros'
import { translateDinoField } from '../utils/translateDinoData'

const isEnglish = inject('isEnglish', ref(false))
const pontos = ref(0)
const rodada = ref(0)

const totalPerguntas=10
const perguntaAtual=ref(null)

const tiposPergunta=[
'dieta',
'periodo',
'familia'
]

const dinossaurosTraduzidos = computed(() =>
  dinossauros.map(dino => ({
    ...dino,
    nome: translateDinoField(dino, 'nome', isEnglish.value),
    periodo: translateDinoField(dino, 'periodo', isEnglish.value),
    dieta: translateDinoField(dino, 'dieta', isEnglish.value),
    familia: translateDinoField(dino, 'familia', isEnglish.value),
  }))
)

const text = computed(() => ({
  title: isEnglish.value ? 'Brazilian Dinosaurs' : 'Quiz dos',
  subtitle: isEnglish.value ? 'Quiz' : 'Dinossauros Brasileiros',
  questionPrefix: isEnglish.value ? 'What is the' : 'Qual é a',
  questionSuffix: isEnglish.value ? 'of' : 'de',
  questionCounter: isEnglish.value ? 'Question {number}/10' : 'Pergunta {number}/10',
  pointsLabel: isEnglish.value ? 'points' : 'pontos',
  finishedTitle: isEnglish.value ? 'Quiz Finished' : 'Quiz Finalizado',
  scoreLabel: isEnglish.value ? 'Your score' : 'Sua pontuação',
  restartButton: isEnglish.value ? 'Play Again' : 'Jogar Novamente',
}))

function getTipoLabel(tipo) {
  if (!tipo) return ''

  const labels = {
    dieta: isEnglish.value ? 'diet' : 'dieta',
    periodo: isEnglish.value ? 'period' : 'período',
    familia: isEnglish.value ? 'family' : 'família',
  }

  return labels[tipo] || tipo
}

function embaralhar(array){
 return [...array].sort(()=>Math.random()-0.5)
}

function gerarPergunta(){

 const dino=
 dinossaurosTraduzidos.value[
 Math.floor(
 Math.random()*dinossaurosTraduzidos.value.length
 )
 ]

 const tipo=
 tiposPergunta[
 Math.floor(
 Math.random()*tiposPergunta.length
 )
 ]

 const respostaCorreta=dino[tipo]

 let respostasErradas=
 dinossaurosTraduzidos.value
 .map(d=>d[tipo])
 .filter(
 v=>v!==respostaCorreta
 )

 respostasErradas=
 [...new Set(respostasErradas)]

 respostasErradas=
 embaralhar(respostasErradas)
 .slice(0,3)

 perguntaAtual.value={

 dino,
 tipo,

 resposta:respostaCorreta,

 opcoes:
 embaralhar([
 respostaCorreta,
 ...respostasErradas
 ])

 }

}

function responder(opcao){

 if(
 opcao===
 perguntaAtual.value.resposta
 ){
 pontos.value++
 alert(isEnglish.value ? '✅ Correct!' : '✅ Acertou!')
 }

 else{

 alert(
 isEnglish.value
   ? `❌ Wrong!\nCorrect answer:\n${perguntaAtual.value.resposta}`
   : `❌ Errou!\nResposta correta:\n${perguntaAtual.value.resposta}`
 )

 }

 rodada.value++

 if(
 rodada.value>=
 totalPerguntas
 ){
 perguntaAtual.value=null
 return
 }

 gerarPergunta()

}

function reiniciar(){

 pontos.value=0
 rodada.value=0

 gerarPergunta()

}

onMounted(()=>{
 gerarPergunta()
})
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap');

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Lexend Deca',sans-serif;
}

.quiz-container{
min-height:100vh;
padding:40px;
display:flex;
justify-content:center;
align-items:center;
}

.quiz-card{
width:100%;
max-width:900px;
background:var(--surface);
padding:40px;
border-radius:28px;
box-shadow:0 30px 80px var(--shadow, rgba(15,23,42,.08));
color:var(--page-text);
}

.tag{
display:inline-block;
padding:8px 16px;
background:#fef3c7;
color:#e4af1c;
border-radius:999px;
font-size:.9rem;
font-weight:600;
margin-bottom:20px;
}

h1{
font-size:2.8rem;
color:var(--page-text);
margin-bottom:30px;
text-align:center;
}

h1 span{
color:#1d9122;
}

.imagem{
width:100%;
max-width:500px;
height:300px;
display:block;
margin:auto;
object-fit:cover;
border-radius:20px;
margin-bottom:30px;
box-shadow:0 15px 35px rgba(0,0,0,.15);
}

.question-box{
text-align:center;
margin-bottom:25px;
}

.question-box h2{
font-size:1.5rem;
color:var(--page-text);
margin-bottom:10px;
}

.question-box span{
color:#1d9122;
}

.rodada{
color:var(--page-text);
opacity:0.75;
font-size:.95rem;
}

.opcoes{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:16px;
margin-bottom:25px;
}

.opcoes button{
border:none;
padding:16px;
border-radius:16px;
background:var(--surface-muted);
font-size:1rem;
font-weight:600;
cursor:pointer;
transition:.3s;
color:var(--page-text);
box-shadow:0 5px 15px rgba(0,0,0,.05);
}

.opcoes button:hover{
transform:translateY(-4px);
background:#2d6cdf;
color:white;
}

.score{
background:var(--surface-muted);
padding:15px;
border-radius:16px;
font-weight:600;
text-align:center;
color:var(--page-text);
}

.resultado{
text-align:center;
}

.resultado-box{
margin:30px auto;
padding:30px;
max-width:300px;
border-radius:20px;
background:var(--surface-muted);
}

.resultado-box span{
display:block;
font-size:3rem;
font-weight:bold;
color:#1d9122;
margin-top:10px;
}

.reiniciar-btn{
margin-top:20px;
padding:15px 30px;
border:none;
border-radius:999px;
background:#2d6cdf;
color:white;
font-weight:600;
cursor:pointer;
transition:.3s;
}

.reiniciar-btn:hover{
transform:translateY(-4px);
background:#1d4fb3;
}

@media(max-width:768px){
.quiz-card{padding:25px;}
h1{font-size:2rem;}
.opcoes{grid-template-columns:1fr;}
.imagem{height:220px;}
}

</style>
