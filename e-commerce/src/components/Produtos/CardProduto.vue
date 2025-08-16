<template>
  <v-container class="my-6">
    <template v-if="carrinho.length > 0">
      <div v-if="step === 1">
        <ResumoPedido
          :carrinho="carrinho"
          @aumentar="aumentarProduto"
          @diminuir="diminuirProduto"
          @remover="removerDoCarrinho"
        />
      </div>

      <div v-else-if="step === 2">
        <FormularioEntrega
          ref="formularioEntregaRef"
          @validouFormulario="proximoStep"
          @voltarStep="voltarStep"
        />
      </div>

      <div v-else-if="step === 3">
        <v-card class="pa-6 text-center">Tela de Pagamento</v-card>
      </div>
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

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ResumoPedido from '@/components/Checkout/ResumoPedido.vue'
import FormularioEntrega from '@/components/Checkout/FormularioEntrega.vue'

const carrinho = ref([])
const step = ref(1)
const router = useRouter()
const formularioEntregaRef = ref(null)

onMounted(() => {
  const salvo = localStorage.getItem('carrinho')
  carrinho.value = salvo ? JSON.parse(salvo) : []
})

function salvarCarrinho() {
  localStorage.setItem('carrinho', JSON.stringify(carrinho.value))
}

function aumentarProduto(produto) {
  const item = carrinho.value.find(i => i.produto.id === produto.id)
  if (item) {
    item.quantidade++
    salvarCarrinho()
  }
}

function diminuirProduto(produtoId) {
  const item = carrinho.value.find(i => i.produto.id === produtoId)
  if (item && item.quantidade > 1) {
    item.quantidade--
    salvarCarrinho()
  }
}

function removerDoCarrinho(produtoId) {
  const index = carrinho.value.findIndex(i => i.produto.id === produtoId)
  if (index !== -1) {
    carrinho.value.splice(index, 1)
    salvarCarrinho()
  }
}

function proximoStep() {
  if (step.value < 3) step.value++
}

function voltarStep() {
  if (step.value > 1) step.value--
}
</script>
