<template>
  <Main>
    <template v-slot:title>
      Sobre
    </template>
    <template v-slot:body>
      <p>
        Desenvolvido por Filipe Borges
      </p>
      <p>
        Email: filipborgs48@gmail.com
      </p>
      <p>
        GitHub:
        <a href="https://github.com/filipborgs">github.com/filipborgs</a>
      </p>
      <p>
        Linkedin:
        <a href="linkedin.com/in/filipe-borges-72a564161/"
          >linkedin.com/in/filipe-borges-72a564161</a
        >
      </p>
    </template>

    <template v-slot:footer>
      <p class="pt-3">
        Link do Desafio:
        <a
          href="https://github.com/estantevirtual/vagas/blob/master/desafios/frontend.md"
          >link</a
        >
      </p>
    </template>
  </Main>
</template>
