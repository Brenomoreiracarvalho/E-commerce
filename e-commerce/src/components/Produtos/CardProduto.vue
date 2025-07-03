<template>
  <v-card variant="tonal">
    <v-img
      :src="produto.imagem"
      height="200px"
      class="white--text align-end"
    ></v-img>
    <v-card-title class="text-h5">{{ produto.nome }}</v-card-title>
    <v-card-subtitle class="text-subtitle-1">{{ produto.descricao }}</v-card-subtitle>
    <v-card-text>
      <p>{{ produto.detalhes }}</p>
      <p>Preço: R$ {{ produto.preco.toFixed(2).replace('.', ',') }}</p>
    </v-card-text>
    <v-card-actions>
      <v-row class="w-100" dense>
        <v-col
          cols="12"
          sm="12"
        >
          <v-btn
            color="primary"
            variant="outlined"
            @click="$emit('adicionar')"
          >
            Adicionar ao Carrinho
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          sm="12"
        >
          <v-btn
            color="secondary"
            variant="text"
          >
            Comprar Agora
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CardProduto',
  props: {
    produto: {
      type: Object,
      required: true
    }
  }
};
</script>


<style scoped>
.v-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>

