<template>
  <v-layout
    full-height
    class="bg-primary d-flex justify-center align-center"
  >
    <v-container class="d-flex justify-center align-center flex-column">
      <v-img width="184" height="184" src="../assets/success.svg"></v-img>
      <h2 class="text-center">Cadastro realizado <br>com sucesso!</h2>
    </v-container>
  </v-layout>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue';

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push('/login')
  }, 3000)
})
</script>