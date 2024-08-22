<template>
  <v-layout
    full-height
    class="bg-primary"
  >
    <v-container class="d-flex flex-column justify-center align-center">
      <lottie-player
        src="https://lottie.host/56b18fa0-76b7-4373-8673-7307e7b08f3d/oeQJMAhZyX.json"
        speed="1"
        style="width: 300px; height: 230px"
        loop
        autoplay
        direction="1"
        mode="normal"
      ></lottie-player>
      <h1>Bem-vindo!</h1>
      <p class="text-center mt-1">
        Conheça mais sobre<br />
        nosso aplicativo
      </p>
      <v-btn
        variant="flat"
        append-icon="mdi-arrow-right"
        rounded="lg"
        class="text-primary text-capitalize text-body-1 mt-6 px-10"
        size="large"
        to="/home"
        @click="finishTutorial()"
        >Próximo</v-btn
      >
    </v-container>
  </v-layout>
</template>

<script setup>
import { userStore } from '../store/user'
import { useRouter } from 'vue-router'

const store = userStore()
const router = useRouter()

function finishTutorial() {
  store.user.finishedTutorial = true
  router.push('/home')
}
</script>