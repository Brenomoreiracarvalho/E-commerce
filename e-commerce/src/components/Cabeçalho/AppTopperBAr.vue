<template>
  <v-toolbar class="px-4 py-2" height="auto" flat>
    <!-- Logo -->
    <v-btn variant="plain" to="/" class="text-h6 mr-4">
      E-COMMERCE
    </v-btn>

    <!-- Menu de categorias centralizado -->
    <v-row
      class="flex-grow-1"
      align="center"
      justify="center"
      no-gutters
    >
      <!-- Botão "Todos" -->
      <v-col cols="auto">
        <v-btn
          variant="outlined"
          size="small"
          rounded="lg"
          @click="selecionarCategoria('Todos')"
        >
          Todos
        </v-btn>
      </v-col>

      <!-- Demais categorias -->
      <v-col
        v-for="categoria in categorias"
        :key="categoria"
        cols="auto"
      >
        <v-btn
          variant="outlined"
          size="small"
          rounded="lg"
          @click="selecionarCategoria(categoria)"
        >
          {{ categoria }}
        </v-btn>
      </v-col>
    </v-row>

    <!-- Carrinho -->
    <v-btn icon class="ml-4">
      <v-icon>mdi-cart</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import produtos from '../Mock/Produtos.js';

export default {
  name: 'AppTopperBar',
  data() {
    return {
      produtos,
    };
  },
  computed: {
    categorias() {
      return [...new Set(this.produtos.map(p => p.categoria))];
    }
  },
  methods: {
    selecionarCategoria(categoria) {
      console.log("Categoria selecionada:", categoria);
    }
  }
};
</script>

<style scoped>
.v-toolbar {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  flex-wrap: wrap;
}
</style>
