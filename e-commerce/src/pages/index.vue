<template>
  <v-card>
    <AppTopperBAr @categoria-selecionada="categoriaSelecionada = $event" />
    <home :categoria-filtrada="categoriaSelecionada" />
  </v-card>
</template>

<script setup>
import { ref } from 'vue';
import home from '@/components/Home/index.vue';
import AppTopperBAr from '@/components/Cabeçalho/AppTopperBAr.vue';

const categoriaSelecionada = ref('Todos');
</script>
