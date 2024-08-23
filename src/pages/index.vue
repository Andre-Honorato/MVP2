<template>
<v-layout
    full-height
    class="bg-primary"
  >
    <v-container class="pa-6 d-flex flex-column">
      <h1 class="text-white">Integrantes do grupo</h1>
      <div class="d-flex flex-column mt-3">
        <span class="text-white mt-2">Alexia</span>
        <span class="text-white mt-2">André</span>
        <span class="text-white mt-2">Maria</span>
        <span class="text-white mt-2">Mariana</span>
      </div>
      <v-btn
        variant="flat"
        append-icon="mdi-arrow-right"
        rounded="lg"
        class="text-primary text-capitalize text-body-1 mt-6 px-10"
        size="large"
        to="/login"
        >Próximo</v-btn
      >
    </v-container>
  </v-layout>
  
  <p></p>
</template>

<script setup>
  //
</script>
