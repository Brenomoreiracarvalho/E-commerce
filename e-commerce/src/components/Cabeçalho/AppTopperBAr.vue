<template>
  <v-toolbar class="px-4 py-2" height="auto" flat>
    <v-btn variant="plain" to="/" class="text-h6 mr-4">
      E-COMMERCE
    </v-btn>

    <v-row class="flex-grow-1" align="center" justify="center" no-gutters>
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

      <v-col v-for="categoria in categorias" :key="categoria" cols="auto">
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

    <v-btn icon @click="$emit('abrir-carrinho')">
      <v-icon>mdi-cart</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import produtos from '../Mock/Produtos.js';

export default {
  name: 'AppTopperBAr',
  data() {
    return {
      produtos,
    };
  },
  computed: {
    categorias() {
      return [...new Set(this.produtos.map((p) => p.categoria))];
    },
  },
  methods: {
    selecionarCategoria(categoria) {
      this.$emit('categoria-selecionada', categoria);
    },
  },
};
</script>


<style scoped>
.v-toolbar {
  background-color: transparent !important;
  box-shadow: none;
  flex-wrap: wrap;
}
</style>
