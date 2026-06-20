<template>
  <section class="quiz-container">

    <div class="quiz-card">

      <h1>
      Quiz dos
        <span>Dinossauros Brasileiros</span>
      </h1>

      <div v-if="perguntaAtual">

        <img
          :src="perguntaAtual.dino.imagem"
          :alt="perguntaAtual.dino.nome"
          class="imagem"
        />

        <div class="question-box">

          <h2>
            Qual é a
            <span>{{ perguntaAtual.tipo }}</span>
            de
            {{ perguntaAtual.dino.nome }}?
          </h2>

          <p class="rodada">
            Pergunta {{ rodada + 1 }}/10
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

          ⭐ {{ pontos }} pontos

        </div>

      </div>

      <div v-else class="resultado">

        <h2>
          🎉 Quiz Finalizado
        </h2>

        <div class="resultado-box">

          <h3>
            Sua pontuação
          </h3>

          <span>
            {{ pontos }}/10
          </span>

        </div>

        <button
          class="reiniciar-btn"
          @click="reiniciar"
        >
          Jogar Novamente
        </button>

      </div>

    </div>

  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import dinossauros from '@/data/dinossauros'

const pontos = ref(0)
const rodada = ref(0)

const totalPerguntas=10
const perguntaAtual=ref(null)

const tiposPergunta=[
'dieta',
'periodo',
'familia'
]

function embaralhar(array){
 return [...array].sort(()=>Math.random()-0.5)
}

function gerarPergunta(){

 const dino=
 dinossauros[
 Math.floor(
 Math.random()*dinossauros.length
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
 dinossauros
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
 alert('✅ Acertou!')
 }

 else{

 alert(
`❌ Errou!
Resposta correta:
${perguntaAtual.value.resposta}`
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

background:
linear-gradient(
135deg,
#f8fafc,
#f1f5f9,
#ecfdf5
);

}

.quiz-card{

width:100%;
max-width:900px;

background:white;

padding:40px;

border-radius:28px;

box-shadow:
0 30px 80px rgba(15,23,42,.08);

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

color:#1e293b;

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

box-shadow:
0 15px 35px rgba(0,0,0,.15);

}

.question-box{

text-align:center;

margin-bottom:25px;

}

.question-box h2{

font-size:1.5rem;

color:#1e293b;

margin-bottom:10px;

}

.question-box span{
color:#1d9122;
}

.rodada{

color:#64748b;

font-size:.95rem;

}

.opcoes{

display:grid;

grid-template-columns:
repeat(2,1fr);

gap:16px;

margin-bottom:25px;

}

.opcoes button{

border:none;

padding:16px;

border-radius:16px;

background:#f8fafc;

font-size:1rem;

font-weight:600;

cursor:pointer;

transition:.3s;

color:#334155;

box-shadow:
0 5px 15px rgba(0,0,0,.05);

}

.opcoes button:hover{

transform:translateY(-4px);

background:#2d6cdf;

color:white;

}

.score{

background:#f8fafc;

padding:15px;

border-radius:16px;

font-weight:600;

text-align:center;

color:#1e293b;

}

.resultado{

text-align:center;

}

.resultado-box{

margin:30px auto;

padding:30px;

max-width:300px;

border-radius:20px;

background:#f8fafc;

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

.quiz-card{
padding:25px;
}

h1{
font-size:2rem;
}

.opcoes{
grid-template-columns:1fr;
}

.imagem{
height:220px;
}

}

</style>
