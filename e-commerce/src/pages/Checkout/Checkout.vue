<template>
  <v-container class="my-6">
    <template v-if="carrinho.length > 0">
      <ResumoPedido
        :carrinho="carrinho"
        @aumentar="aumentarProduto"
        @diminuir="diminuirProduto"
        @remover="removerDoCarrinho"
      />
      <!-- Em breve: Formulário de Entrega e Pagamento -->
    </template>

    <template v-else>
      <v-card class="pa-6 text-center" elevation="1">
        <v-icon size="48" color="grey">mdi-cart-off</v-icon>
        <h3 class="mt-2">Seu carrinho está vazio</h3>
        <p>Adicione produtos antes de finalizar sua compra.</p>
        <router-link to="/">
          <v-btn color="primary" class="mt-4">Voltar à loja</v-btn>
        </router-link>
      </v-card>
    </template>
  </v-container>
</template>

<script>
import ResumoPedido from '@/components/Checkout/ResumoPedido.vue';

export default {
  name: 'CheckoutPage',

  components: {
    ResumoPedido,
  },

  data() {
    return {
      carrinho: [],
    };
  },

  mounted() {
    const salvo = localStorage.getItem('carrinho');
    this.carrinho = salvo ? JSON.parse(salvo) : [];
  },

  methods: {
    aumentarProduto(produto) {
      const item = this.carrinho.find(i => i.produto.id === produto.id);
      if (item) {
        item.quantidade++;
        this.salvarCarrinho();
      }
    },

    diminuirProduto(produtoId) {
      const item = this.carrinho.find(i => i.produto.id === produtoId);
      if (item && item.quantidade > 1) {
        item.quantidade--;
        this.salvarCarrinho();
      }
    },

    removerDoCarrinho(produtoId) {
      const index = this.carrinho.findIndex(i => i.produto.id === produtoId);
      if (index !== -1) {
        this.carrinho.splice(index, 1);
        this.salvarCarrinho();
      }
    },

    salvarCarrinho() {
      localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
    }
  }
};
</script>
