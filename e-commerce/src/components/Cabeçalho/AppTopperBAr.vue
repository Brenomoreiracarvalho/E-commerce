<template>
  <v-toolbar>
    <v-btn variant="plain" to="/">E-COMMERCE</v-btn>

    <template v-slot:append>
      <v-btn icon="mdi-magnify"></v-btn>

      <v-btn icon="mdi-cart"></v-btn>
    </template>
  </v-toolbar>
</template>

<script setup>

</script>

<style >
.v-toolbar{
  background-color: transparent !important;
  box-shadow: none
}
</style>
