<script setup>
import { ref, inject, computed } from 'vue'

const isEnglish = inject('isEnglish', ref(false))
const status = ref('idle')

const text = computed(() => ({
  heroTitle: isEnglish.value ? 'About the Project' : 'Sobre o Projeto',
  heroText: isEnglish.value
    ? 'The Brazilian Dinosaurs project was created for educational and reference purposes, with the goal of bringing students, curious minds, and enthusiasts of Brazilian Paleontology closer to the fascinating world of dinosaurs found in the country.'
    : 'O Dinossauros Brasileiros é um projeto criado para fins educacionais e de consulta, desenvolvido com o objetivo de aproximar estudantes, curiosos e entusiastas da Paleontologia brasileira do fascinante universo dos dinossauros encontrados no território nacional.',
  purposeTitle: isEnglish.value ? 'Educational Purpose' : 'Finalidade Educacional',
  purposeText: isEnglish.value
    ? 'This project was developed exclusively for study, scientific dissemination, and reference. It has no commercial purpose and is not officially linked to museums, universities, or scientific institutions.'
    : 'Este projeto foi desenvolvido exclusivamente para estudo, divulgação científica e consulta. Não possui fins lucrativos e não tem relação oficial com museus, universidades ou instituições científicas.',
  imageRightsTitle: isEnglish.value ? 'Image Rights' : 'Direitos das Imagens',
  imageRightsText: isEnglish.value
    ? 'The images used belong to their respective authors and copyright holders. If any image is being used inappropriately, please contact us for correction or removal.'
    : 'As imagens utilizadas pertencem aos seus respectivos autores e detentores de direitos. Caso alguma imagem esteja sendo utilizada inadequadamente, entre em contato para correção ou remoção.',
  devTitle: isEnglish.value ? 'About the Developer' : 'Sobre o Dev',
  devText: isEnglish.value
    ? 'Since childhood, I have always been fascinated by dinosaurs, and programming also awakened my interest. This project was born from the union of these two passions. The idea is to make Brazilian Paleontology more accessible, allowing people to discover Brazilian species, learn their history, and understand the importance of science and preservation.'
    : 'Desde criança, sempre fui fascinado por dinossauros e, ao mesmo tempo, a programação também despertou meu interesse, e o projeto nasceu justamente da união dessas duas paixões. A ideia é tornar a Paleontologia brasileira mais acessível, permitindo que as pessoas descubram espécies brasileiras, conheçam sua história e entendam a importância da ciência e da preservação.',
  sourcesTitle: isEnglish.value ? 'Research Sources' : 'Fontes de Pesquisa',
  sourcesText: isEnglish.value
    ? 'The information in this project is based on books, scientific articles, specialized publications, and scientific outreach materials.'
    : 'As informações presentes neste projeto foram baseadas em livros, artigos científicos, publicações especializadas e materiais de divulgação científica.',
  contactTitle: isEnglish.value ? 'Get in Touch' : 'Entre em contato',
  contactText: isEnglish.value
    ? 'Found an error, want to suggest content, or send feedback?'
    : 'Encontrou algum erro, quer sugerir conteúdo ou enviar comentários? :)',
  form: {
    emailLabel: 'Email',
    subjectLabel: isEnglish.value ? 'Subject' : 'Assunto',
    messageLabel: isEnglish.value ? 'Message' : 'Mensagem',
    sendButton: isEnglish.value ? 'Send' : 'Enviar',
    sendingButton: isEnglish.value ? 'Sending...' : 'Enviando...',
  },
  sourceItems: isEnglish.value
    ? [
        { title: 'The New Complete Guide to Dinosaurs of Brazil', author: 'Luiz Eduardo Anelli' },
        { title: 'Dinosaurs of Brazil', author: 'Luiz Eduardo Anelli' },
        { title: 'New discoveries of Brazilian dinosaurs', author: 'Articles published in the scientific journal PLOS ONE' },
        { title: 'National Museum (UFRJ)' },
        { title: 'Plácido Cidade Nuvens Paleontology Museum' },
        { title: 'Brazilian Society of Paleontology' },
        { title: 'Scientific American Brazil — Paleontology' },
        { title: 'National Geographic Brazil — Dinosaurs' },
      ]
    : [
        { title: 'O Novo Guia Completo dos Dinossauros do Brasil', author: 'Luiz Eduardo Anelli' },
        { title: 'Dinossauros do Brasil', author: 'Luiz Eduardo Anelli' },
        { title: 'Novas descobertas de dinossauros brasileiros', author: 'Artigos publicados na revista científica PLOS ONE' },
        { title: 'Museu Nacional (UFRJ)' },
        { title: 'Museu de Paleontologia Plácido Cidade Nuvens' },
        { title: 'Sociedade Brasileira de Paleontologia' },
        { title: 'Scientific American Brasil — Paleontologia' },
        { title: 'National Geographic Brasil — Dinossauros' },
      ],
}))

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
            {{ text.heroTitle }}
          </h1>

          <p>
            {{ text.heroText }}
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

      <h3>{{ text.purposeTitle }}</h3>

      <p>
        {{ text.purposeText }}
      </p>

    </div>

    <div class="about-card">

      <div class="card-icon">
        <font-awesome-icon icon="image" class="fa-icon" />
      </div>

      <h3>{{ text.imageRightsTitle }}</h3>

      <p>
        {{ text.imageRightsText }}
      </p>

    </div>

    <div class="about-card">

      <div class="card-icon">
        <font-awesome-icon icon="user-astronaut" class="fa-icon" />
      </div>

      <h3>{{ text.devTitle }}</h3>

      <p>
        {{ text.devText }}
      </p>

    </div>

  </section>

  <!-- Fontes -->
  <section class="sources">

    <h2>
      <font-awesome-icon icon="book" class="fa-icon" /> {{ text.sourcesTitle }}
    </h2>

    <p>
      {{ text.sourcesText }}
    </p>

    <div class="source-list">

      <div v-for="item in text.sourceItems" :key="item.title" class="source-item">
        <b>{{ item.title }}</b><br v-if="item.author">{{ item.author }}
      </div>

    </div>

  </section>

  <!-- Contato -->
  <section class="contact-section">

    <h2>
      <font-awesome-icon icon="envelope" class="fa-icon" /> {{ text.contactTitle }}
    </h2>

    <p>
      {{ text.contactText }}
    </p>

    <form class="contact-form" @submit.prevent="handleSubmit">
      <input type="hidden" name="access_key" value="w3f_3562cf87ac010c57afd82bddafd2ed4bcffb7a179613bdf4" />
      <label>{{ text.form.emailLabel }}</label>
      <input type="email" name="email" required />
      <label>{{ text.form.subjectLabel }}</label>
      <input type="text" name="assunto" required />
      <label>{{ text.form.messageLabel }}</label>
      <textarea name="mensagem" rows="6" required></textarea>
      <input type="hidden" name="_gotcha" style="display:none" />
      <button type="submit" :disabled="status === 'sending'">
        {{ status === 'sending' ? text.form.sendingButton : text.form.sendButton }}
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
  color: var(--page-text);
}

.about-header,
.sources,
.contact-section {
  background: var(--surface);
  padding: 40px;
  border-radius: 25px;
  box-shadow: 0 10px 30px var(--shadow, rgba(0, 0, 0, 0.06));
}

.about-text h1 {
  font-size: 3rem;
  line-height: 1.2;
  color: var(--page-text);
  margin-bottom: 20px;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--page-text);
  opacity: 0.8;
  max-width: 700px;
}

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
  background: var(--surface);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 25px var(--shadow, rgba(0, 0, 0, 0.05));
  transition: transform 0.3s ease;
  border: 1px solid var(--border);
}

.about-card:hover {
  transform: translateY(-4px);
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 15px;
  color: var(--accent);
}

.about-card h3 {
  color: var(--page-text);
  margin-bottom: 12px;
}

.about-card p {
  color: var(--page-text);
  opacity: 0.8;
  line-height: 1.8;
  font-size: 0.95rem;
}

.sources h2 {
  color: var(--page-text);
  font-size: 2rem;
  margin-bottom: 8px;
}

.sources h2 .fa-icon {
  color: var(--accent-strong);
  margin-right: 12px;
}

.sources > p {
  color: var(--page-text);
  opacity: 0.8;
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
  background: var(--surface-muted);
  padding: 15px;
  border-radius: 12px;
  border-left: 4px solid var(--accent-strong);
  color: var(--page-text);
  opacity: 0.8;
  font-size: 0.95rem;
  line-height: 1.6;
}

.source-item b {
  color: var(--page-text);
}

.contact-section h2 {
  color: var(--page-text);
  font-size: 2rem;
  margin-bottom: 8px;
}

.contact-section h2 .fa-icon {
  color: var(--accent);
  margin-right: 12px;
}

.contact-section > p {
  color: var(--page-text);
  opacity: 0.8;
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
  border: 1px solid var(--border);
  border-radius: 12px;
  font-size: 1rem;
  outline: none;
  font-family: 'Lexend Deca', sans-serif;
  transition: border-color 0.3s ease;
  background: var(--surface-muted);
  color: var(--page-text);
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: var(--page-text);
  opacity: 0.6;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 4px rgba(45, 108, 223, 0.1);
}

.contact-form button {
  padding: 15px 30px;
  border: none;
  border-radius: 999px;
  background: var(--accent);
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
  background: var(--accent-strong);
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
