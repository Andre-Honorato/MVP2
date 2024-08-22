<template>
  <v-layout full-height class="d-flex flex-column">
    <div class="w-100 bg-primary">
      <v-container class="pa-6 pb-10">
        <v-row>
          <v-col cols="12" class="d-flex justify-end pb-0">
            <v-btn to="/editarPerfil" icon variant="flat" size="small">
              <v-icon color="primary">mdi-pencil</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="h-100 mt-0" align="center">
          <v-col>
            <v-img class="rounded-circle" cover width="130" height="130" :src="store.user.profilePicture"></v-img>
          </v-col>
          <v-col class="text-center">
            <h2>{{ store.user.name }}</h2>
            <h3 class="font-weight-medium">{{ store.user.address }}, {{ store.user.number }}</h3>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container class="pa-6">
      <h1>Descrição</h1>
      <p class="text-low text-body-1 mt-2">{{ store.user.description }}</p>
    </v-container>
  </v-layout>
  <v-bottom-navigation
    v-model="screen"
    mode="shift"
    grow
    base-color="low"
    color="primary"
  >
    <v-btn value="home" to="/home">
      <v-icon>mdi-home</v-icon>
      <span>Início</span>
    </v-btn>
    <v-btn value="coletas" to="/coletas">
      <v-icon>mdi-shopping</v-icon>
      <span>{{ store.user.type === 'ong' ? 'Coletas' : 'Doações' }}</span>
    </v-btn>
    <v-btn value="favoritos" to="/favoritos">
      <v-icon>mdi-heart</v-icon>
      <span>Favoritos</span>
    </v-btn>
    <v-btn
      value="perfil"
      to="/perfil"
    >
      <v-icon>mdi-account</v-icon>
      <span>Perfil</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup>
import { ref } from 'vue'
import { userStore } from '../store/user'

const screen = ref('perfil')
const store = userStore()
</script>
