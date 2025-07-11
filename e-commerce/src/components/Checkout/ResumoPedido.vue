<template>
  <v-card class="pa-4 mb-4" elevation="1">
    <v-card-title class="text-h6">Resumo do Pedido</v-card-title>
    <v-divider class="mb-3" />

    <v-list density="compact">
      <v-list-item
        v-for="item in carrinho"
        :key="item.produto.id"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.produto.nome }}</v-list-item-title>
          <v-list-item-subtitle>
            <v-btn
              icon
              size="x-small"
              @click="$emit('diminuir', item.produto.id)"
              :disabled="item.quantidade === 1"
            >
              <v-icon size="16">mdi-minus</v-icon>
            </v-btn>

            {{ item.quantidade }} × R$ {{ item.produto.preco.toFixed(2).replace('.', ',') }}

            <v-btn
              icon
              size="x-small"
              @click="$emit('aumentar', item.produto)"
            >
              <v-icon size="16">mdi-plus</v-icon>
            </v-btn>


          </v-list-item-subtitle>
        </v-list-item-content>

        <div>
         R$ {{ itemTotal(item).toFixed(2).replace('.', ',') }}
        </div>

        <v-list-item-action>
          <v-btn icon @click="$emit('remover', item.produto.id)">
            <v-icon color="red">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <v-divider class="my-3" />

    <div class="text-right font-weight-bold">
      Total: R$ {{ total.toFixed(2).replace('.', ',') }}
    </div>
  </v-card>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  carrinho: {
    type: Array,
    required: true
  }
});

defineEmits(['aumentar', 'diminuir', 'remover']);

const total = computed(() =>
  props.carrinho.reduce(
    (acc, item) => acc + item.produto.preco * item.quantidade,
    0
  )
);

const itemTotal = item =>
  item.produto.preco * item.quantidade
</script>
