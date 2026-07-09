<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="left-info">
        <p><strong>O Fantástico Mundo dos Dinossauros</strong></p>
        <p>Pesquisa sobre a paleofauna brasileira</p>
      </div>
      <div class="right-info">Desenvolvido por: Manu Hostin</div>
    </div>
  </footer>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap');

.footer {
  font-family: 'Lexend Deca', sans-serif;
  background-color: var(--surface);
  padding: 20px 40px;
  border-top: 1px solid var(--border);
  font-size: 10px;
  color: var(--page-text);
  display: flex;
  justify-content: center;
}

.footer-content {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.left-info p {
  margin: 0;
  font-weight: 300;
  line-height: 1.2;
  color: var(--page-text);
}

.right-info {
  font-weight: 300;
  color: var(--page-text);
}
</style>
