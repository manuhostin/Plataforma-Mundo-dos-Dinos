<script setup>
import { ref } from 'vue'

const status = ref('idle')

async function handleSubmit(e) {
  e.preventDefault()
  status.value = 'sending'
  const formData = new FormData(e.target)
  formData.set('access_key', 'w3f_3562cf87ac010c57afd82bddafd2ed4bcffb7a179613bdf4')
  try {
    const res = await fetch('https://api.w3forms.com/submit', { method: 'POST', body: formData })
    status.value = res.ok ? 'done' : 'error'
  } catch {
    status.value = 'error'
  }
}
</script>

<template>

<section class="about-container">

  <!-- Hero -->
  <section class="about-header">

    <div class="about-text">

      <div class="about-header-content">
        <div class="about-text-left">
          <h1>
            Sobre o Projeto
          </h1>

          <p>
            O <strong>Dinossauros Brasileiros</strong> é um projeto criado
            para fins educacionais e de consulta, desenvolvido com o objetivo
            de aproximar estudantes, curiosos e entusiastas da Paleontologia
            brasileira do fascinante universo dos dinossauros encontrados
            no território nacional.
          </p>
        </div>

        <div class="about-image-right">
          <img src="/dinossauros/irritatorpng.png" alt="Irritator" class="irritator-img">
        </div>
      </div>

    </div>

  </section>

  <!-- Informações -->
  <section class="about-grid">

    <div class="about-card">

      <div class="card-icon">
        <font-awesome-icon icon="graduation-cap" class="fa-icon" />
      </div>

      <h3>Finalidade Educacional</h3>

      <p>
        Este projeto foi desenvolvido exclusivamente para
        estudo, divulgação científica e consulta.
        Não possui fins lucrativos e não tem
        relação oficial com museus, universidades
        ou instituições científicas.
      </p>

    </div>

    <div class="about-card">

      <div class="card-icon">
        <font-awesome-icon icon="image" class="fa-icon" />
      </div>

      <h3>Direitos das Imagens</h3>

      <p>
        As imagens utilizadas pertencem aos seus
        respectivos autores e detentores de direitos.
        Caso alguma imagem esteja sendo utilizada
        inadequadamente, entre em contato para
        correção ou remoção.
      </p>

    </div>

    <div class="about-card">

      <div class="card-icon">
        <font-awesome-icon icon="user-astronaut" class="fa-icon" />
      </div>

      <h3>Sobre o Dev</h3>

      <p>
        Desde criança, sempre fui fascinado por dinossauros e, ao mesmo tempo,
        a programação também despertou meu interesse, e o projeto nasceu justamente da união dessas duas paixões. A ideia é tornar a Paleontologia
        brasileira mais acessível, permitindo que as pessoas
        descubram espécies brasileiras, conheçam sua
        história e entendam a importância da ciência e da preservação.
      </p>

    </div>

  </section>

  <!-- Fontes -->
  <section class="sources">

    <h2>
      <font-awesome-icon icon="book" class="fa-icon" /> Fontes de Pesquisa
    </h2>

    <p>
      As informações presentes neste projeto foram baseadas em livros,
      artigos científicos, publicações especializadas e materiais
      de divulgação científica.
    </p>

    <div class="source-list">

      <div class="source-item">
        <b>O Novo Guia Completo dos Dinossauros do Brasil</b><br>
        Luiz Eduardo Anelli
      </div>

      <div class="source-item">
        <b>Dinossauros do Brasil</b><br>
        Luiz Eduardo Anelli
      </div>

      <div class="source-item">
        <b>Novas descobertas de dinossauros brasileiros</b><br>
        Artigos publicados na revista científica PLOS ONE
      </div>

      <div class="source-item">
        <b>Museu Nacional (UFRJ)</b>
      </div>

      <div class="source-item">
        <b>Museu de Paleontologia Plácido Cidade Nuvens</b>
      </div>

      <div class="source-item">
        <b>Sociedade Brasileira de Paleontologia</b>
      </div>

      <div class="source-item">
        <b>Scientific American Brasil — Paleontologia</b>
      </div>

      <div class="source-item">
        <b>National Geographic Brasil — Dinossauros</b>
      </div>

    </div>

  </section>

  <!-- Contato -->
  <section class="contact-section">

    <h2>
      <font-awesome-icon icon="envelope" class="fa-icon" /> Entre em contato
    </h2>

    <p>
      Encontrou algum erro, quer sugerir conteúdo
      ou enviar comentários? :)
    </p>

    <form class="contact-form" @submit.prevent="handleSubmit">
      <input type="hidden" name="access_key" value="w3f_3562cf87ac010c57afd82bddafd2ed4bcffb7a179613bdf4" />
      <label>Email</label>
      <input type="email" name="email" required />
      <label>Assunto</label>
      <input type="text" name="assunto" required />
      <label>Mensagem</label>
      <textarea name="mensagem" rows="6" required></textarea>
      <input type="hidden" name="_gotcha" style="display:none" />
      <button type="submit" :disabled="status === 'sending'">
        {{ status === 'sending' ? 'Enviando...' : 'Enviar' }}
      </button>
    </form>

  </section>

</section>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap');

* {
  font-family: 'Lexend Deca', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.about-container {
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-height: 100vh;
  background: linear-gradient(135deg, #f6f9fc, #e8f1ff);
}

.about-header,
.sources,
.contact-section {
  background: white;
  padding: 40px;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
}

.about-text h1 {
  font-size: 3rem;
  line-height: 1.2;
  color: #1e293b;
  margin-bottom: 20px;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #475569;
  max-width: 700px;
}

/* Layout do header com imagem ao lado */
.about-header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.about-text-left {
  flex: 1;
}

.about-image-right {
  flex-shrink: 0;
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.irritator-img {
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1));
  animation: float 5s infinite ease-in-out;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.about-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  border: 1px solid #e2e8f0;
}

.about-card:hover {
  transform: translateY(-4px);
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #2d6cdf;
}

.about-card h3 {
  color: #1e293b;
  margin-bottom: 12px;
}

.about-card p {
  color: #64748b;
  line-height: 1.8;
  font-size: 0.95rem;
}

.sources h2 {
  color: #1e293b;
  font-size: 2rem;
  margin-bottom: 8px;
}

.sources h2 .fa-icon {
  color: #2d6cdf;
  margin-right: 12px;
}

.sources > p {
  color: #475569;
  line-height: 1.8;
  margin-bottom: 16px;
}

.source-list {
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.source-item {
  background: #f8fafc;
  padding: 15px;
  border-radius: 12px;
  border-left: 4px solid #2d6cdf;
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.6;
}

.source-item b {
  color: #1e293b;
}

.contact-section h2 {
  color: #1e293b;
  font-size: 2rem;
  margin-bottom: 8px;
}

.contact-section h2 .fa-icon {
  color: #2d6cdf;
  margin-right: 12px;
}

.contact-section > p {
  color: #475569;
  line-height: 1.8;
}

.contact-form {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-form input,
.contact-form textarea {
  padding: 15px;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  font-size: 1rem;
  outline: none;
  font-family: 'Lexend Deca', sans-serif;
  transition: border-color 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #2d6cdf;
  box-shadow: 0 0 0 4px rgba(45, 108, 223, 0.1);
}

.contact-form button {
  padding: 15px 30px;
  border: none;
  border-radius: 999px;
  background: #2d6cdf;
  color: white;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: 'Lexend Deca', sans-serif;
}

.contact-form button:hover {
  background: #1d4fb3;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .about-container {
    padding: 20px;
  }

  .about-header,
  .sources,
  .contact-section {
    padding: 24px;
  }

  .about-text h1 {
    font-size: 2.2rem;
  }

  .about-header-content {
    flex-direction: column;
    text-align: center;
  }

  .about-image-right {
    width: 200px;
  }

  .irritator-img {
    max-width: 180px;
  }

  .about-grid {
    grid-template-columns: 1fr;
  }

  .source-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .about-text h1 {
    font-size: 1.8rem;
  }

  .about-text p {
    font-size: 1rem;
  }

  .about-image-right {
    width: 150px;
  }

  .irritator-img {
    max-width: 130px;
  }

  .contact-form button {
    padding: 12px 20px;
    font-size: 0.9rem;
  }
}
</style>
