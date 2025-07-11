<template>
  <v-card>
    <AppTopperBAr
      @categoria-selecionada="categoriaSelecionada = $event"
      @abrir-carrinho="drawerCarrinho = true"
    />

    <home
      :categoria-filtrada="categoriaSelecionada"
      @adicionar-ao-carrinho="adicionarAoCarrinho"
    />

    <CarrinhoDeCompras
      v-model="drawerCarrinho"
      :carrinho="carrinho"
      @remover="removerDoCarrinho"
    />
  </v-card>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted } from 'vue';
import home from '../components/Home/index.vue';
import AppTopperBAr from '../components/Cabeçalho/AppTopperBAr.vue';
import CarrinhoDeCompras from '../components/Carrinho/CarrinhoDeCompras.vue';

const categoriaSelecionada = ref('Todos');
const carrinho = reactive([]);
const drawerCarrinho = ref(false);


function adicionarAoCarrinho(produto) {
  const item = carrinho.find(i => i.produto.id === produto.id);
  if (item) {
    item.quantidade++;
  } else {
    carrinho.push({ produto, quantidade: 1 });
  }
}

function removerDoCarrinho(produtoId) {
  const index = carrinho.findIndex(i => i.produto.id === produtoId);
  if (index !== -1) {
    carrinho.splice(index, 1);
  }
}

const totalCarrinho = computed(() =>
  carrinho.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0)
);

watch(
  carrinho,
  (newVal) => {
    localStorage.setItem('carrinho', JSON.stringify(newVal));
  },
  { deep: true }
);

onMounted(() => {
  const salvo = localStorage.getItem('carrinho');
  if (salvo) {
    const carrinhoSalvo = JSON.parse(salvo);
    carrinhoSalvo.forEach(item => carrinho.push(item));
  }
});
</script>
