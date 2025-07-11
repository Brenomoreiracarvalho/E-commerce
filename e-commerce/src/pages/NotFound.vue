<template>
  <v-container class="text-center my-12">
    <v-icon size="64" color="grey">mdi-alert-circle-outline</v-icon>
    <h1 class="text-h4 mt-4">404 - Página não encontrada</h1>
    <p class="mb-4">A página que você tentou acessar não existe.</p>
    <router-link to="/">
      <v-btn color="primary">Voltar para a página inicial</v-btn>
    </router-link>
  </v-container>
</template>
