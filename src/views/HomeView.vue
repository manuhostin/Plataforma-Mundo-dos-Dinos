<script setup>
import { inject, ref, computed } from 'vue'

const isEnglish = inject('isEnglish', ref(false))

const text = computed(() => ({
  heroTag: isEnglish.value ? 'Brazilian Paleontology' : 'Paleontologia Brasileira',
  heroTitle: isEnglish.value
    ? 'Discover the Amazing World of Brazilian Dinosaurs'
    : 'Descubra o Fantástico Mundo dos Dinossauros Brasileiros',
  heroDescription: isEnglish.value
    ? 'Travel millions of years into the past and explore species found in Brazilian territory. Discover fossils, locations, curiosities, and the importance of preserving our natural history.'
    : 'Viaje milhões de anos ao passado e explore espécies encontradas no território brasileiro. Descubra fósseis, localizações, curiosidades e a importância de preservar nossa história natural.',
  openCatalogBtn: isEnglish.value ? 'Open Catalog' : 'Abrir Catálogo',
  exploreMapBtn: isEnglish.value ? 'Explore Map' : 'Explorar Mapa',
  featureMapTitle: isEnglish.value ? 'Interactive Map' : 'Mapa Interativo',
  featureMapDesc: isEnglish.value
    ? 'Explore regions of Brazil where fossils were found and view important discoveries.'
    : 'Explore regiões do Brasil onde fósseis foram encontrados e visualize descobertas importantes.',
  featureCatalogTitle: isEnglish.value ? 'Catalog' : 'Catálogo',
  featureCatalogDesc: isEnglish.value
    ? 'Browse Brazilian species with detailed descriptions and dinosaur images.'
    : 'Navegue por espécies brasileiras com descrições detalhadas e imagens dos dinossauros.',
  featureFactsTitle: isEnglish.value ? 'Fun Facts' : 'Curiosidades',
  featureFactsDesc: isEnglish.value
    ? 'Learn fascinating details about animals that lived millions of years ago.'
    : 'Conheça detalhes incríveis sobre animais que viveram há milhões de anos.',
  infoHeading: isEnglish.value ? 'Dinosaurs in Brazil' : 'Os Dinossauros no Brasil',
  infoPara1: isEnglish.value
    ? 'Dinosaurs were a group of reptiles that lived millions of years ago during the Mesozoic Era. They came in all shapes and sizes: quadrupeds, bipeds, carnivores, herbivores, giant, medium, and small. They laid eggs, some had feathers, traveled in herds or alone, and inhabited every part of Earth. Because they were so diverse, dinosaurs inspire fascination across many groups of people.'
    : 'Os Dinossauros foram um grupo de répteis que viveram há milhões de anos, durante a Era Mesozóica. Haviam de todos os tipos: quadrúpedes, bípedes, carnívoros, herbívoros, gigantescos, médios e pequenos. Botavam ovos, alguns tinham penas, andavam em bandos ou sozinhos e habitaram todas as partes da Terra. Por serem tão diversos, os Dinossauros causam fascínio entre diferentes grupos de pessoas.',
  infoPara2: isEnglish.value
    ? 'In Brazil, fossils of these animals have been found in several states, such as Minas Gerais, Rio Grande do Sul, Maranhão, São Paulo, Ceará, Paraná, and Mato Grosso. Remains of these reptiles can be found in all regions of the country, each area revealing a piece of what Brazilian reality was like at that time.'
    : 'No Brasil, fósseis desses animais têm sido encontrados em vários estados, como Minas Gerais, Rio Grande do Sul, Maranhão, São Paulo, Ceará, Paraná e Mato Grosso. É possível encontrar restos desses répteis em todas as regiões do país, sendo que cada área revela um pouco de como era a realidade brasileira naquele tempo.',
  triassicTitle: isEnglish.value ? 'Triassic Period (~225 MYA)' : 'Período Triássico (~225 MA)',
  triassicDesc: isEnglish.value
    ? 'In Rio Grande do Sul, we have evidence of the oldest dinosaurs walking the Earth about 225 million years ago. The climate was warm and semi-arid, with well-defined seasons. Large deserts and conifer forests dominated the landscape, and the first dinosaurs, such as Staurikosaurus and Saturnalia, competed for space with ancestral reptiles.'
    : 'No Rio Grande do Sul, temos evidências dos mais antigos dinossauros a andar sob a Terra, há cerca de 225 milhões de anos. O clima era quente e semiárido, com estações bem definidas. Grandes desertos e florestas de coníferas dominavam a paisagem, e os primeiros dinossauros, como o Staurikosaurus e o Saturnalia, disputavam espaço com répteis ancestrais.',
  cretaceousTitle: isEnglish.value ? 'Cretaceous Period (~110 MYA)' : 'Período Cretáceo (~110 MA)',
  cretaceousDesc: isEnglish.value
    ? 'In Ceará, fossils from the Araripe Basin reveal a tropical climate with large lakes and humid forests. Spinosaurids like Irritator and Angaturama patrolled the riverbanks while giant pterosaurs flew overhead. In Minas Gerais, the climate was drier, with deserts and dunes where titanosaurs like Baurutitan and abelisaurids like Pycnonemosaurus ruled.'
    : 'No Ceará, fósseis da Bacia do Araripe revelam um clima tropical com grandes lagos e florestas úmidas. Espinossaurídeos como o Irritator e o Angaturama patrulhavam as margens dos rios, enquanto pterossauros gigantes sobrevoavam a região. Já em Minas Gerais, o clima era mais árido, com desertos e dunas, onde titanossauros como o Baurutitan e abelissaurídeos como o Pycnonemosaurus dominavam.',
  jurassicTitle: isEnglish.value ? 'What about the Jurassic Period?' : 'E o Período Jurássico?',
  jurassicDesc: isEnglish.value
    ? 'You may have noticed that Brazil has few fossils from the Jurassic Period (200 to 145 million years ago). This happens because during that time much of Brazilian territory was covered by intense volcanic activity that destroyed sedimentary rocks, along with extensive deserts and conditions unfavorable for fossilization. While Europe and China have large predators like Allosaurus, in Brazil this period is a true fossil gap.'
    : 'Você deve ter notado que o Brasil tem poucos fósseis do Período Jurássico (200 a 145 milhões de anos atrás). Isso acontece porque, durante essa época, grande parte do território brasileiro estava coberta por intensas atividades vulcânicas que destruíram rochas sedimentares, além de extensos desertos e condições desfavoráveis para a fossilização. Enquanto na Europa e na China encontramos grandes predadores como o Allosaurus, no Brasil esse período é um verdadeiro "vazio fossilífero".',
  preservationTitle: isEnglish.value ? 'Preservation' : 'Preservar é proteger a história',
  preservationDesc: isEnglish.value
    ? 'The preservation of fossils and paleontological sites is essential so future generations can continue learning about the evolution of life on the planet. Each discovery represents a unique piece of the natural history of Brazil and the world.'
    : 'A preservação dos fósseis e sítios paleontológicos é essencial para que futuras gerações possam continuar aprendendo sobre a evolução da vida no planeta. Cada descoberta representa uma peça única da história natural do Brasil e do mundo.',
  tragedyTitle: isEnglish.value
    ? 'The Tragedy of the National Museum (2018)'
    : 'A Tragédia do Museu Nacional (2018)',
  tragedyPara1: isEnglish.value
    ? 'In September 2018, the National Museum of the Federal University of Rio de Janeiro, one of the most important scientific institutions in the Americas, was devastated by a fire that consumed much of its collection of 20 million items.'
    : 'Em setembro de 2018, o Museu Nacional da Universidade Federal do Rio de Janeiro, uma das mais importantes instituições científicas das Américas, foi devastado por um incêndio que consumiu grande parte de seu acervo de 20 milhões de itens.',
  tragedyPara2: isEnglish.value
    ? 'Among the irreparable losses were unique fossils such as the holotype of Maxakalisaurus topai, the largest mounted Brazilian dinosaur in real size, and Oxalaia quilombensis, the largest carnivore described in the country. Collections of Brazilian Cretaceous and Triassic fossils that can never be studied again were also lost.'
    : 'Entre as perdas irreparáveis estavam fósseis únicos, como o holótipo do Maxakalisaurus topai (o maior dinossauro brasileiro montado em tamanho real) e o Oxalaia quilombensis, o maior carnívoro descrito no país. Além disso, perderam-se coleções inteiras de fósseis do Cretáceo e Triássico brasileiro que nunca poderão ser estudados novamente.',
  tragedyPara3: isEnglish.value
    ? 'The tragedy highlighted the urgent need for appreciation and investment in science and the preservation of paleontological heritage. Many lost specimens now exist only in photographs, molds, and memories.'
    : 'A tragédia evidenciou a necessidade urgente de valorização e investimento na ciência e na preservação do patrimônio paleontológico brasileiro. Muitos dos espécimes perdidos existem hoje apenas em fotografias, moldes e memórias.',
  smugglingTitle: isEnglish.value
    ? 'Fossil Smuggling and Scientific Colonialism'
    : 'Tráfico de Fósseis e Colonialismo Científico',
  smugglingPara1: isEnglish.value
    ? 'In addition to fires, illegal fossil trafficking is one of the greatest threats to Brazil’s paleontological heritage. Unique specimens are removed from the country illegally and sold to museums and collectors abroad.'
    : 'Além dos incêndios, o tráfico ilegal de fósseis é uma das maiores ameaças ao patrimônio paleontológico brasileiro. Espécimes únicos são retirados do país ilegalmente e vendidos para museus e colecionadores no exterior.',
  smugglingPara2: isEnglish.value
    ? 'The case of Ubirajara jubatus is emblematic: illegally removed from Ceará in 1995, the fossil remained in Germany for almost 30 years until an international campaign (#UbirajaraBelongsToBR) forced its repatriation in 2023. Mirischia asymmetrica and Santanaraptor placidus were also victims of smuggling.'
    : 'O caso do Ubirajara jubatus é emblemático: retirado ilegalmente do Ceará em 1995, o fóssil permaneceu na Alemanha por quase 30 anos, até que uma campanha internacional (#UbirajaraBelongsToBR) forçou sua repatriação em 2023. O Mirischia asymmetrica e o Santanaraptor placidus também foram vítimas do contrabando.',
  smugglingPara3: isEnglish.value
    ? 'Brazilian science still faces scientific colonialism, where foreign researchers take fossils from the country without collaboration or compensation for local institutions. This reinforces the need for stricter laws and science made in Brazil, for Brazil.'
    : 'A ciência brasileira enfrenta ainda o colonialismo científico, onde pesquisadores estrangeiros levam fósseis do país sem contrapartida ou colaboração com instituições locais, reforçando a necessidade de leis mais rigorosas e de uma ciência feita no Brasil, para o Brasil.',
  futureTitle: isEnglish.value
    ? 'The Future of Brazilian Paleontology'
    : 'O Futuro da Paleontologia Brasileira',
  futurePara1: isEnglish.value
    ? 'Despite the challenges, Brazilian paleontology is experiencing a golden age. In recent years, new species have been discovered at an accelerated pace:'
    : 'Apesar dos desafios, a paleontologia brasileira vive uma era de ouro. Nos últimos anos, novas espécies vêm sendo descobertas em ritmo acelerado:',
  futureBullet1: isEnglish.value
    ? '2020 — Spectrovenator ragei (MG), the most complete abelisaurid from the Lower Cretaceous'
    : '2020 — Spectrovenator ragei (MG), o abelissaurídeo mais completo do Cretáceo Inferior',
  futureBullet2: isEnglish.value
    ? '2021 — Berthasaura leopoldinae (PR), one of the rare toothless dinosaurs'
    : '2021 — Berthasaura leopoldinae (PR), um dos raros dinossauros sem dentes',
  futureBullet3: isEnglish.value
    ? '2022 — Caieiria allocaudata (MG), a new titanosaur'
    : '2022 — Caieiria allocaudata (MG), um novo titanossauro',
  futureBullet4: isEnglish.value
    ? '2023 — Ubirajara jubatus was repatriated and Tietasaura derbyiana (BA) was described'
    : '2023 — Ubirajara jubatus é repatriado e o Tietasaura derbyiana (BA) é descrito',
  futureBullet5: isEnglish.value
    ? '2024 — Navaornis hestiae (SP), a fossil bird with a 3D-preserved brain'
    : '2024 — Navaornis hestiae (SP), uma ave fossilizada com cérebro preservado em 3D',
  futurePara2: isEnglish.value
    ? 'The future is promising, but it depends on valuing science, Brazilian paleontologists, and preserving heritage. Every fossil is a window to the past and a treasure for humanity. Preserve to protect our history and ensure that future generations can keep exploring the fascinating world of Brazilian dinosaurs.'
    : 'O futuro é promissor, mas depende da valorização da ciência, dos paleontólogos brasileiros e da preservação do patrimônio. Cada fóssil é uma janela para o passado e um tesouro para a humanidade. Preservar é proteger nossa história e garantir que as próximas gerações possam continuar explorando o fascinante mundo dos dinossauros brasileiros.',
}))
</script>

<template>
  <section class="home-container">

    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
        <div class="content-text">
          <span class="tag">
            {{ text.heroTag }}
          </span>

          <h1>
            {{ text.heroTitle }}
          </h1>

          <p>
            {{ text.heroDescription }}
          </p>

          <div class="hero-buttons">
            <router-link to="/catalogo" class="primary-btn">
              <font-awesome-icon icon="book-open" class="fa-icon" /> {{ text.openCatalogBtn }}
            </router-link>

            <router-link to="/mapa" class="secondary-btn">
              <font-awesome-icon icon="map-marked-alt" class="fa-icon" /> {{ text.exploreMapBtn }}
            </router-link>
          </div>
        </div>

        <div class="side-image" aria-hidden="true"></div>
      </div>

    </section>

    <!-- Recursos -->
    <section class="features">

      <div class="feature-card">
        <div class="icon">
          <font-awesome-icon icon="map-marked-alt" class="fa-icon" />
        </div>
        <h3>{{ text.featureMapTitle }}</h3>
        <p>
          {{ text.featureMapDesc }}
        </p>
      </div>

      <div class="feature-card">
        <div class="icon">
          <font-awesome-icon icon="book-open" class="fa-icon" />
        </div>
        <h3>{{ text.featureCatalogTitle }}</h3>
        <p>
          {{ text.featureCatalogDesc }}
        </p>
      </div>

      <div class="feature-card">
        <div class="icon">
          <font-awesome-icon icon="lightbulb" class="fa-icon" />
        </div>
        <h3>{{ text.featureFactsTitle }}</h3>
        <p>
          {{ text.featureFactsDesc }}
        </p>
      </div>

    </section>

    <!-- Introdução -->
    <section class="info-section">

      <h2>{{ text.infoHeading }}</h2>

      <p>
        {{ text.infoPara1 }}
      </p>

      <p>
        {{ text.infoPara2 }}
      </p>

      <div class="info-grid">
        <div class="info-card triassico">
          <span class="info-icon">
            <font-awesome-icon icon="tree" class="fa-icon" />
          </span>
          <h4>{{ text.triassicTitle }}</h4>
          <p>
            {{ text.triassicDesc }}
          </p>
        </div>

        <div class="info-card cretaceo">
          <span class="info-icon">
            <font-awesome-icon icon="leaf" class="fa-icon" />
          </span>
          <h4>{{ text.cretaceousTitle }}</h4>
          <p>
            {{ text.cretaceousDesc }}
          </p>
        </div>

        <div class="info-card jurassico">
          <span class="info-icon">
            <font-awesome-icon icon="question-circle" class="fa-icon" />
          </span>
          <h4>{{ text.jurassicTitle }}</h4>
          <p>
            {{ text.jurassicDesc }}
          </p>
        </div>
      </div>

    </section>

    <!-- Preservação -->
    <section class="preservation">

      <h2>
        <font-awesome-icon icon="shield-alt" class="fa-icon" /> {{ text.preservationTitle }}
      </h2>

      <p>
        {{ text.preservationDesc }}
      </p>

      <div class="preservation-grid">
        <div class="preservation-card tragedy">
          <div class="preservation-icon">
            <font-awesome-icon icon="fire" class="fa-icon" />
          </div>
          <div class="preservation-text">
            <h4>{{ text.tragedyTitle }}</h4>
            <p>
              {{ text.tragedyPara1 }}
            </p>
            <p>
              {{ text.tragedyPara2 }}
            </p>
            <p>
              {{ text.tragedyPara3 }}
            </p>
          </div>
        </div>

        <div class="preservation-card smuggling">
          <div class="preservation-icon">
            <font-awesome-icon icon="handcuffs" class="fa-icon" />
          </div>
          <div class="preservation-text">
            <h4>{{ text.smugglingTitle }}</h4>
            <p>
              {{ text.smugglingPara1 }}
            </p>
            <p>
              {{ text.smugglingPara2 }}
            </p>
            <p>
              {{ text.smugglingPara3 }}
            </p>
          </div>
        </div>

        <div class="preservation-card future">
          <div class="preservation-icon">
            <font-awesome-icon icon="star" class="fa-icon" />
          </div>
          <div class="preservation-text">
            <h4>{{ text.futureTitle }}</h4>
            <p>
              {{ text.futurePara1 }}
            </p>
            <ul>
              <li>{{ text.futureBullet1 }}</li>
              <li>{{ text.futureBullet2 }}</li>
              <li>{{ text.futureBullet3 }}</li>
              <li>{{ text.futureBullet4 }}</li>
              <li>{{ text.futureBullet5 }}</li>
            </ul>
            <p>
              {{ text.futurePara2 }}
            </p>
          </div>
        </div>
      </div>

    </section>

  </section>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap');

*{
  font-family: 'Lexend Deca', sans-serif;
  margin:0;
  padding:0;
  box-sizing:border-box;
}

.home-container{
  min-height:100vh;
  padding:40px;
  color: var(--page-text);
}

.hero{
  display:flex;
  align-items:stretch;
  justify-content:center;
  gap:24px;
  margin-bottom:80px;
}

.hero-content{
  position:relative;
  z-index:1;
  display:flex;
  align-items:center;
  gap:24px;
  width:100%;
  max-width:1200px;
  background: var(--surface);
  padding:28px;
  border-radius:22px;
  box-shadow: 0 30px 80px var(--shadow, rgba(15,23,42,0.08));
}

.content-text{
  flex:1 1 55%;
}

.side-image{
  flex:0 0 45%;
  min-width:360px;
  min-height:420px;
  background-image: url('/dinossauros/dinos.jpg');
  background-repeat:no-repeat;
  background-position:right center;
  background-size:contain;
}

.hero h1{
  font-size:3.5rem;
  line-height:1.1;
  color: var(--page-text);
  margin-bottom:25px;
}

.tag{
  display:inline-block;
  background:#fefcdb;
  color:#e4af1c;
  padding:8px 15px;
  border-radius:999px;
  margin-bottom:20px;
  font-size:.9rem;
  font-weight:600;
}

.hero h1 span{
  color:#1d9122;
}

.hero p{
  font-size:1.1rem;
  line-height:1.8;
  color: var(--page-text);
  opacity: 0.85;
  max-width:700px;
}

.hero-buttons{
  display:flex;
  gap:15px;
  margin-top:35px;
}

.hero-buttons .primary-btn i,
.hero-buttons .secondary-btn i {
  margin-right: 10px;
}

.primary-btn,
.secondary-btn{
  text-decoration:none;
  padding:15px 25px;
  border-radius:999px;
  font-weight:600;
  transition:.3s;
}

.primary-btn{
  background:#2d6cdf;
  color:white;
}

.primary-btn:hover{
  transform:translateY(-4px);
  background:#1d4fb3;
}

.secondary-btn{
  border:2px solid #2d6cdf;
  color:#2d6cdf;
}

.secondary-btn:hover{
  background:#2d6cdf;
  color:white;
}

.features{
  display:grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
  gap:25px;
  margin-bottom:70px;
}

.feature-card{
  background: var(--surface);
  padding:30px;
  border-radius:20px;
  box-shadow: 0 15px 35px var(--shadow, rgba(0,0,0,.08));
  transition:.3s;
}

.feature-card:hover{
  transform: translateY(-10px);
}

.icon{
  font-size:2rem;
  margin-bottom:15px;
  color: #e4af1c;
}

.feature-card h3{
  margin-bottom:10px;
  color: var(--page-text);
}

.feature-card p{
  color: var(--page-text);
  opacity: 0.75;
  line-height:1.7;
}

.info-section{
  background: var(--surface);
  padding:40px;
  border-radius:25px;
  margin-bottom:40px;
  box-shadow:0 10px 30px var(--shadow, rgba(0,0,0,.06));
}

.info-section h2{
  margin-bottom:20px;
  color: var(--page-text);
  font-size:2rem;
}

.info-section > p{
  line-height:1.8;
  color: var(--page-text);
  opacity: 0.8;
  margin-bottom:16px;
}

.info-section > p:last-of-type{
  margin-bottom:30px;
}

.info-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:24px;
  margin-top:10px;
}

.info-card{
  background: var(--surface-muted);
  padding:24px;
  border-radius:16px;
  border-left:4px solid #2ddf71;
  transition:transform .3s;
}

.info-card:hover{
  transform:translateY(-4px);
}

.info-card.triassico{
  border-left-color:#f59e0b;
}

.info-card.cretaceo{
  border-left-color:#10b981;
}

.info-card.jurassico{
  border-left-color:#ef4444;
}

.info-icon{
  font-size:2rem;
  display:block;
  margin-bottom:12px;
  color: var(--accent);
}

.info-card h4{
  color: var(--page-text);
  margin-bottom:10px;
}

.info-card p{
  color: var(--page-text);
  opacity: 0.75;
  line-height:1.7;
  font-size:.95rem;
}

.info-card p strong{
  color: var(--page-text);
}

.info-card p em{
  font-style:italic;
  color: var(--accent);
}

.preservation{
  background: var(--surface);
  padding:40px;
  border-radius:25px;
  margin-bottom:40px;
  box-shadow:0 10px 30px var(--shadow, rgba(0,0,0,.06));
}

.preservation h2{
  margin-bottom:20px;
  color: var(--page-text);
  font-size:2rem;
}

.preservation h2 i {
  margin-right: 12px;
  color: #2d6cdf;
}

.preservation > p{
  line-height:1.8;
  color: var(--page-text);
  opacity: 0.8;
  margin-bottom:30px;
}

.preservation-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
  gap:24px;
}

.preservation-card{
  background: var(--surface-muted);
  padding:28px;
  border-radius:16px;
  display:flex;
  gap:18px;
  align-items:flex-start;
  transition:transform .3s;
  border:1px solid var(--border);
}

.preservation-card:hover{
  transform:translateY(-4px);
}

.preservation-card.tragedy{
  border-top:4px solid #ef4444;
}

.preservation-card.smuggling{
  border-top:4px solid #f59e0b;
}

.preservation-card.future{
  border-top:4px solid #10b981;
}

.preservation-icon{
  font-size:2.2rem;
  flex-shrink:0;
  color: #2d6cdf;
}

.preservation-card.tragedy .preservation-icon {
  color: #ef4444;
}

.preservation-card.smuggling .preservation-icon {
  color: #f59e0b;
}

.preservation-card.future .preservation-icon {
  color: #10b981;
}

.preservation-text h4{
  color: var(--page-text);
  margin-bottom:12px;
}

.preservation-text p{
  color: var(--page-text);
  opacity: 0.75;
  line-height:1.8;
  font-size:.95rem;
  margin-bottom:12px;
}

.preservation-text p:last-child{
  margin-bottom:0;
}

.preservation-text p strong{
  color: var(--page-text);
}

.preservation-text ul{
  list-style:none;
  padding:0;
  margin:12px 0;
}

.preservation-text ul li{
  color: var(--page-text);
  opacity: 0.8;
  line-height:1.8;
  font-size:.92rem;
  padding-left:20px;
  position:relative;
}

.preservation-text ul li::before{
  content:"🦴";
  position:absolute;
  left:0;
  opacity:.7;
}

@media(max-width:1024px){
  .dino-display{
    max-width:850px;
    height:620px;
  }

  .dino-img.oxalaia{
    max-width:780px;
  }
}

@media(max-width:768px){

  .home-container{
    padding:20px;
  }

  .hero{
    flex-direction:column;
    text-align:center;
  }

  .hero-content{
    flex-direction:column;
    align-items:center;
    padding:22px;
  }

  .hero h1{
    font-size:2.5rem;
  }

  .hero-buttons{
    justify-content:center;
    flex-wrap:wrap;
  }

  .side-image{
    display:none;
  }

  .info-grid{
    grid-template-columns:1fr;
  }

  .preservation-grid{
    grid-template-columns:1fr;
  }

  .preservation-card{
    flex-direction:column;
    padding:20px;
  }

  .info-section,
  .preservation{
    padding:24px;
  }

}

@media(max-width:480px){
  .hero h1{
    font-size:2rem;
  }

  .hero p{
    font-size:1rem;
  }

  .primary-btn,
  .secondary-btn{
    padding:12px 20px;
    font-size:.9rem;
  }

  .dino-display{
    max-width:450px;
    height:300px;
  }

  .dino-img.oxalaia{
    max-width:420px;
  }
}

</style>
