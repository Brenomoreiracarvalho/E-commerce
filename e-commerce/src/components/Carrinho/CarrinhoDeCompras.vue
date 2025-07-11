<template>
  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
    width="400"
  >
    <v-list>
      <v-list-item
        v-for="item in carrinho"
        :key="item.produto.id"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.produto.nome }}</v-list-item-title>
          <v-list-item-subtitle>Qtd: {{ item.quantidade }}</v-list-item-subtitle>
          <v-list-item-subtitle>
            Preço unitário: R$ {{ item.produto.preco.toFixed(2).replace('.', ',') }}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon @click="$emit('remover', item.produto.id)">
            <v-icon color="red">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <div class="pa-4 font-weight-bold">
      Total: R$ {{ total.toFixed(2).replace('.', ',') }}
    </div>

    <router-link to="/checkout">
      <v-btn color="green" class="mt-4" block>Finalizar Compra</v-btn>
    </router-link>
  </v-navigation-drawer>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  carrinho: {
    type: Array,
    required: true
  }
});
const emit = defineEmits(['update:modelValue', 'remover']);
const drawer = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
});
const total = computed(() =>
  props.carrinho.reduce(
    (acc, item) => acc + item.produto.preco * item.quantidade,
    0
  )
);
</script>

