<template>
  <div class="home">

    <v-container>
      <v-row>
        <v-col
          v-for="produto in produtosPaginados"
          :key="produto.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <CardProduto
            :produto="produto"
            @adicionar="() => $emit('adicionar-ao-carrinho', produto)"
          />
        </v-col>
      </v-row>

      <v-pagination
        v-model="paginaAtual"
        :length="paginas"
        @input="mudarPagina"
      ></v-pagination>
    </v-container>
  </div>
</template>

<script>
import CardProduto from '../Produtos/CardProduto.vue';
import produtos from '../Mock/Produtos.js';

const produtosPorPagina = 12;

export default {
  name: 'Home',
  components: {
    CardProduto,
  },
  props: {
    categoriaFiltrada: {
      type: String,
      default: 'Todos',
    },
  },
  data() {
    return {
      produtos,
      paginaAtual: 1,
    };
  },
  computed: {
    produtosFiltrados() {
      if (this.categoriaFiltrada === 'Todos') {
        return this.produtos;
      }
      return this.produtos.filter(
        (p) => p.categoria === this.categoriaFiltrada
      );
    },
    paginas() {
      return Math.ceil(this.produtosFiltrados.length / produtosPorPagina);
    },
    produtosPaginados() {
      const inicio = (this.paginaAtual - 1) * produtosPorPagina;
      return this.produtosFiltrados.slice(inicio, inicio + produtosPorPagina);
    },
  },
  methods: {
    mudarPagina(pagina) {
      this.paginaAtual = pagina;
    },
  },
  watch: {
    categoriaFiltrada() {
      this.paginaAtual = 1; // reseta pagina quando muda categoria
    },
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 60px;
}
</style>
