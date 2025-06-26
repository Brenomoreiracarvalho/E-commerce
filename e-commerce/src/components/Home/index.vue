<template>
  <div class="home">
    <h1>Bem-vindo ao E-commerce</h1>

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
          <CardProduto :produto="produto" />
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
const prodtosPorPagina = 12;
const paginas = Math.ceil(produtos.length / prodtosPorPagina);
export default {
  name: 'Home',
  components: {
    CardProduto
  },
  data() {
    return {
      produtos: produtos,
      paginas: paginas,
      paginaAtual: 1,
    };
  }
  ,
  computed: {
    produtosPaginados() {
      const inicio = (this.paginaAtual - 1) * prodtosPorPagina;
      return this.produtos.slice(inicio, inicio + prodtosPorPagina);
    }
  },
  methods: {
    mudarPagina(pagina) {
      this.paginaAtual = pagina;
    }
  }
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 60px;
}
.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 24px;
  background: #42b983;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;
}
.btn:hover {
  background: #369870;
}
</style>
