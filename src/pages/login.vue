<template>
  <v-layout
    full-height
    class="d-flex justify-center align-center"
  >
    <v-container class="d-flex justify-center align-center flex-column pa-6">
      <v-img
        src="../assets/logo.png"
        width="228"
        height="228"
      />
      <v-row class="w-100 mt-2">
        <v-col
          cols="12"
          class="pb-2"
        >
          <v-text-field
            variant="outlined"
            color="primary"
            label="Email"
            v-model="state.email"
          />
        </v-col>
        <v-col
          cols="12"
          class="pb-0"
        >
          <v-text-field
            variant="outlined"
            color="primary"
            label="Senha"
            type="password"
            v-model="state.password"
          />
        </v-col>
        <v-col
          cols="12"
          class="d-flex justify-end pa-0"
        >
          <v-btn
            class="text-capitalize text-body-1"
            variant="text"
            color="primary"
            to="/esqueceuSenha"
            style="text-transform: none;"
            >Esqueci minha senha</v-btn
          >
        </v-col>
        <v-col
          cols="12"
          class="mt-4"
        >
          <v-btn
            class="text-capitalize text-body-1"
            size="large"
            variant="flat"
            color="primary"
            rounded="lg"
            block
            @click="verifyUser()"
            >Login</v-btn
          >
        </v-col>
        <v-col
          cols="12"
          class="d-flex justify-center pa-0 mt-4"
        >
          <v-btn
            class="text-capitalize text-body-1"
            variant="text"
            color="primary"
            to="/cadastro"
            block
            style="text-transform: none;"
            >Cadastre-se</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script setup>
import { reactive } from 'vue'
import { userStore } from '../store/user'
import { useRouter } from 'vue-router'

const state = reactive({
  email: '',
  password: ''
})
const store = userStore()
const router = useRouter()

function verifyUser() {
  if (
    store.user &&
    state.email === store.user.email &&
    state.password === store.user.password
  ) {
    store.user.active = true
    router.push('/bemVindo')
  }
}
</script>
