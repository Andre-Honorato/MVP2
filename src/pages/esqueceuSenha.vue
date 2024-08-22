<template>
  <v-container class="pa-6">
    <h1>Esqueceu sua senha?</h1>
    <p class="text-low mt-3 mb-6">Enviaremos um e-mail com instruções de como redefinir sua senha</p>
    <v-row>
      <v-col cols="12">
        <v-text-field color="primary" v-model="email" variant="outlined" label="Email" />
      </v-col>
      <v-col class="pt-2">
        <v-btn
          block
          color="primary"
          size="large"
          class="text-capitalize text-body-1"
          rounded="lg"
          variant="flat"
          @click="verify()"
          >Enviar</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { userStore } from '../store/user'
import { useRouter } from 'vue-router';

const email = ref('')
const store = userStore()
const router = useRouter()

function verify() {
  if (store.user && store.user.email === email.value) {
    router.push('/mudarSenha')
  }
}
</script>