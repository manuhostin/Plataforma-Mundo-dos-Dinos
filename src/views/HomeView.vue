<template>
  <section class="home-container">

    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
        <div class="content-text">
          <span class="tag">
             Paleontologia Brasileira
          </span>

          <h1>
            Descubra o Fantástico Mundo dos
            <span>Dinossauros Brasileiros</span>
          </h1>

          <p>
            Viaje milhões de anos ao passado e explore espécies encontradas
            no território brasileiro. Descubra fósseis, localizações,
            curiosidades e a importância de preservar nossa história natural.
          </p>

          <div class="hero-buttons">
            <router-link to="/catalogo" class="primary-btn">
              <font-awesome-icon icon="book-open" class="fa-icon" /> Abrir Catálogo
            </router-link>

            <router-link to="/mapa" class="secondary-btn">
              <font-awesome-icon icon="map-marked-alt" class="fa-icon" /> Explorar Mapa
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
        <h3>Mapa Interativo</h3>
        <p>
          Explore regiões do Brasil onde fósseis foram encontrados e
          visualize descobertas importantes.
        </p>
      </div>

      <div class="feature-card">
        <div class="icon">
          <font-awesome-icon icon="book-open" class="fa-icon" />
        </div>
        <h3>Catálogo</h3>
        <p>
          Navegue por espécies brasileiras com descrições detalhadas e imagens dos dinossauros.
        </p>
      </div>

      <div class="feature-card">
        <div class="icon">
          <font-awesome-icon icon="lightbulb" class="fa-icon" />
        </div>
        <h3>Curiosidades</h3>
        <p>
          Conheça detalhes incríveis sobre animais que viveram há
          milhões de anos.
        </p>
      </div>

    </section>

    <!-- Introdução -->
    <section class="info-section">

      <h2>Os Dinossauros no Brasil</h2>

      <p>
        Os Dinossauros foram um grupo de répteis que viveram há milhões de anos,
        durante a <strong>Era Mesozóica</strong>. Haviam de todos os tipos:
        quadrúpedes, bípedes, carnívoros, herbívoros, gigantescos, médios e pequenos.
        Botavam ovos, alguns tinham penas, andavam em bandos ou sozinhos e habitaram
        todas as partes da Terra. Por serem tão diversos, os Dinossauros causam
        fascínio entre diferentes grupos de pessoas.
      </p>

      <p>
        No Brasil, fósseis desses animais têm sido encontrados em vários estados,
        como <strong>Minas Gerais, Rio Grande do Sul, Maranhão, São Paulo, Ceará,
        Paraná e Mato Grosso</strong>. É possível encontrar restos desses répteis
        em todas as regiões do país, sendo que cada área revela um pouco de como
        era a realidade brasileira naquele tempo.
      </p>

      <div class="info-grid">
        <div class="info-card triassico">
          <span class="info-icon">
            <font-awesome-icon icon="tree" class="fa-icon" />
          </span>
          <h4>Período Triássico (~225 MA)</h4>
          <p>
            No <strong>Rio Grande do Sul</strong>, temos evidências dos mais
            antigos dinossauros a andar sob a Terra, há cerca de 225 milhões
            de anos. O clima era quente e semiárido, com estações bem definidas.
            Grandes desertos e florestas de coníferas dominavam a paisagem, e
            os primeiros dinossauros, como o <em>Staurikosaurus</em> e o
            <em>Saturnalia</em>, disputavam espaço com répteis ancestrais.
          </p>
        </div>

        <div class="info-card cretaceo">
          <span class="info-icon">
            <font-awesome-icon icon="leaf" class="fa-icon" />
          </span>
          <h4>Período Cretáceo (~110 MA)</h4>
          <p>
            No <strong>Ceará</strong>, fósseis da <strong>Bacia do Araripe</strong>
            revelam um clima tropical com grandes lagos e florestas úmidas.
            Espinossaurídeos como o <em>Irritator</em> e o <em>Angaturama</em>
            patrulhavam as margens dos rios, enquanto pterossauros gigantes
            sobrevoavam a região. Já em <strong>Minas Gerais</strong>, o clima
            era mais árido, com desertos e dunas, onde titanossauros como o
            <em>Baurutitan</em> e abelissaurídeos como o <em>Pycnonemosaurus</em>
            dominavam.
          </p>
        </div>

        <div class="info-card jurassico">
          <span class="info-icon">
            <font-awesome-icon icon="question-circle" class="fa-icon" />
          </span>
          <h4>E o Período Jurássico?</h4>
          <p>
            Você deve ter notado que o Brasil tem poucos fósseis do
            <strong>Período Jurássico</strong> (200 a 145 milhões de anos atrás).
            Isso acontece porque, durante essa época, grande parte do território
            brasileiro estava coberta por <strong>intensas atividades vulcânicas</strong>
            que destruíram rochas sedimentares, além de extensos desertos e
            condições desfavoráveis para a fossilização. Enquanto na Europa e
            na China encontramos grandes predadores como o <em>Allosaurus</em>,
            no Brasil esse período é um verdadeiro "vazio fossilífero".
          </p>
        </div>
      </div>

    </section>

    <!-- Preservação -->
    <section class="preservation">

      <h2>
        <font-awesome-icon icon="shield-alt" class="fa-icon" /> Preservar é proteger a história
      </h2>

      <p>
        A preservação dos fósseis e sítios paleontológicos é essencial para
        que futuras gerações possam continuar aprendendo sobre a evolução
        da vida no planeta. Cada descoberta representa uma peça única da
        história natural do Brasil e do mundo.
      </p>

      <div class="preservation-grid">
        <div class="preservation-card tragedy">
          <div class="preservation-icon">
            <font-awesome-icon icon="fire" class="fa-icon" />
          </div>
          <div class="preservation-text">
            <h4>A Tragédia do Museu Nacional (2018)</h4>
            <p>
              Em <strong>setembro de 2018</strong>, o <strong>Museu Nacional</strong>
              da Universidade Federal do Rio de Janeiro, uma das mais importantes
              instituições científicas das Américas, foi devastado por um incêndio
              que consumiu grande parte de seu acervo de <strong>20 milhões de itens</strong>.
            </p>
            <p>
              Entre as perdas irreparáveis estavam fósseis únicos, como o
              <strong>holótipo do Maxakalisaurus topai</strong> (o maior dinossauro
              brasileiro montado em tamanho real) e o
              <strong>Oxalaia quilombensis</strong>, o maior carnívoro descrito
              no país. Além disso, perderam-se coleções inteiras de fósseis do
              <strong>Cretáceo e Triássico brasileiro</strong> que nunca poderão ser
              estudados novamente.
            </p>
            <p>
              A tragédia evidenciou a necessidade urgente de <strong>valorização
              e investimento</strong> na ciência e na preservação do patrimônio
              paleontológico brasileiro. Muitos dos espécimes perdidos existem
              hoje apenas em fotografias, moldes e memórias.
            </p>
          </div>
        </div>

        <div class="preservation-card smuggling">
          <div class="preservation-icon">
            <font-awesome-icon icon="handcuffs" class="fa-icon" />
          </div>
          <div class="preservation-text">
            <h4>Tráfico de Fósseis e Colonialismo Científico</h4>
            <p>
              Além dos incêndios, o <strong>tráfico ilegal de fósseis</strong>
              é uma das maiores ameaças ao patrimônio paleontológico brasileiro.
              Espécimes únicos são retirados do país ilegalmente e vendidos
              para museus e colecionadores no exterior.
            </p>
            <p>
              O caso do <strong>Ubirajara jubatus</strong> é emblemático:
              retirado ilegalmente do <strong>Ceará em 1995</strong>, o fóssil
              permaneceu na Alemanha por quase 30 anos, até que uma campanha
              internacional (<em>#UbirajaraBelongsToBR</em>) forçou sua
              repatriação em <strong>2023</strong>. O <em>Mirischia asymmetrica</em>
              e o <em>Santanaraptor placidus</em> também foram vítimas do
              contrabando.
            </p>
            <p>
              A ciência brasileira enfrenta ainda o <strong>colonialismo
              científico</strong>, onde pesquisadores estrangeiros levam
              fósseis do país sem contrapartida ou colaboração com
              instituições locais, reforçando a necessidade de leis mais
              rigorosas e de uma <strong>ciência feita no Brasil, para o
              Brasil</strong>.
            </p>
          </div>
        </div>

        <div class="preservation-card future">
          <div class="preservation-icon">
            <font-awesome-icon icon="star" class="fa-icon" />
          </div>
          <div class="preservation-text">
            <h4>O Futuro da Paleontologia Brasileira</h4>
            <p>
              Apesar dos desafios, a paleontologia brasileira vive uma
              <strong>era de ouro</strong>. Nos últimos anos, novas espécies
              vêm sendo descobertas em ritmo acelerado:
            </p>
            <ul>
              <li><strong>2020</strong> — <em>Spectrovenator ragei</em> (MG), o abelissaurídeo mais completo do Cretáceo Inferior</li>
              <li><strong>2021</strong> — <em>Berthasaura leopoldinae</em> (PR), um dos raros dinossauros sem dentes</li>
              <li><strong>2022</strong> — <em>Caieiria allocaudata</em> (MG), um novo titanossauro</li>
              <li><strong>2023</strong> — <em>Ubirajara jubatus</em> é repatriado e o <em>Tietasaura derbyiana</em> (BA) é descrito</li>
              <li><strong>2024</strong> — <em>Navaornis hestiae</em> (SP), uma ave fossilizada com cérebro preservado em 3D</li>
            </ul>
            <p>
              O futuro é promissor, mas depende da <strong>valorização da ciência, dos paleontólogos brasileiros
              e da preservação do patrimônio</strong>. Cada fóssil é uma janela
              para o passado e um tesouro para a humanidade. Preservar é
              proteger nossa história e garantir que as próximas gerações
              possam continuar explorando o fascinante mundo dos dinossauros
              brasileiros.
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
}

/* HERO */

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
  background: rgba(255,255,255,1);
  padding:28px;
  border-radius:22px;
  box-shadow: 0 30px 80px rgba(15,23,42,0.08);
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
  color:#1e293b;
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


.hero h1{
  font-size:3.5rem;
  line-height:1.1;
  color:#1e293b;
  margin-bottom:25px;
}

.hero h1 span{
  color:#1d9122;
}

.hero p{
  font-size:1.1rem;
  line-height:1.8;
  color:#475569;
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

/* CARDS */

.features{
  display:grid;
  grid-template-columns:
  repeat(auto-fit,minmax(250px,1fr));

  gap:25px;

  margin-bottom:70px;
}

.feature-card{

  background:white;
  padding:30px;
  border-radius:20px;

  box-shadow:
  0 15px 35px rgba(0,0,0,.08);

  transition:.3s;
}

.feature-card:hover{
  transform:
  translateY(-10px);
}

.icon{
  font-size:2rem;
  margin-bottom:15px;
  color: #e4af1c;
}

.feature-card h3{
  margin-bottom:10px;
  color:#1e293b;
}

.feature-card p{
  color:#64748b;
  line-height:1.7;
}

/* INFO SECTION */

.info-section{
  background:white;
  padding:40px;
  border-radius:25px;
  margin-bottom:40px;
  box-shadow:0 10px 30px rgba(0,0,0,.06);
}

.info-section h2{
  margin-bottom:20px;
  color:#1e3b25;
  font-size:2rem;
}

.info-section > p{
  line-height:1.8;
  color:#475569;
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
  background:#f8fafc;
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
  color: #000000;
}

.info-card h4{
  color:#1e293b;
  margin-bottom:10px;
}

.info-card p{
  color:#64748b;
  line-height:1.7;
  font-size:.95rem;
}

.info-card p strong{
  color:#1e293b;
}

.info-card p em{
  font-style:italic;
  color:#dfa72d;
}

/* PRESERVATION */

.preservation{
  background:white;
  padding:40px;
  border-radius:25px;
  margin-bottom:40px;
  box-shadow:0 10px 30px rgba(0,0,0,.06);
}

.preservation h2{
  margin-bottom:20px;
  color:#1e293b;
  font-size:2rem;
}

.preservation h2 i {
  margin-right: 12px;
  color: #2d6cdf;
}

.preservation > p{
  line-height:1.8;
  color:#475569;
  margin-bottom:30px;
}

.preservation-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
  gap:24px;
}

.preservation-card{
  background:#f8fafc;
  padding:28px;
  border-radius:16px;
  display:flex;
  gap:18px;
  align-items:flex-start;
  transition:transform .3s;
  border:1px solid #e2e8f0;
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
  color:#1e293b;
  margin-bottom:12px;
}

.preservation-text p{
  color:#64748b;
  line-height:1.8;
  font-size:.95rem;
  margin-bottom:12px;
}

.preservation-text p:last-child{
  margin-bottom:0;
}

.preservation-text p strong{
  color:#1e293b;
}

.preservation-text ul{
  list-style:none;
  padding:0;
  margin:12px 0;
}

.preservation-text ul li{
  color:#475569;
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

/* RESPONSIVO */

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
