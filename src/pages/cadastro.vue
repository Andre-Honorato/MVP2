<template>
  <v-layout
    full-height
    class="bg-primary d-flex flex-column"
  >
    <v-container class="pa-6">
      <h1>Cadastre-se</h1>
    </v-container>
    <v-card class="h-100 rounded-t-xl pt-6">
      <v-container class="pa-6">
        <v-tabs-window v-model="state.tab">
          <v-tabs-window-item value="one">
            <h2 class="text-low">Qual seu perfil?</h2>
            <v-row class="mt-6">
              <v-col cols="12">
                <v-card
                  variant="flat"
                  border
                  @click="setActiveTab('two')"
                >
                  <v-row
                    class="pa-6 h-100"
                    align="center"
                  >
                    <v-col cols="4">
                      <v-img
                        width="64"
                        height="64"
                        src="../assets/ong.svg"
                      ></v-img>
                    </v-col>
                    <v-col>
                      <h3>ONG</h3>
                      <p class="mt-1">
                        Disposto a coletar e distribuir alimentos
                      </p>
                    </v-col>
                  </v-row>
                </v-card>
                <v-card
                  class="mt-9"
                  variant="flat"
                  border
                  to="/cadastro"
                >
                  <v-row
                    class="pa-6 h-100"
                    align="center"
                  >
                    <v-col cols="4">
                      <v-img
                        width="64"
                        height="64"
                        src="../assets/estabelecimento.svg"
                      ></v-img>
                    </v-col>
                    <v-col>
                      <h3>ONG</h3>
                      <p class="mt-1">Disposto a doar alimentos</p>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-tabs-window-item>
          <v-tabs-window-item value="two">
            <h1 @click="setActiveTab('three')">outro</h1>
          </v-tabs-window-item>
          <v-tabs-window-item value="three">
            <h1>outro2</h1>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-container>
    </v-card>
  </v-layout>
</template>

<script setup>
import { onBeforeUnmount, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'

const state = reactive({
  tab: 'one'
})
const router = useRouter()

function handlePopState() {
  switch(state.tab) {
    case 'three':
      state.tab = 'two'
      break
    case 'two':
      state.tab = 'one'
      break
    case 'one':
      router.push('/login')
      break
  }
}

function setActiveTab(tab) {
  state.tab = tab
  window.history.pushState({ tab }, '')
}

onMounted(() => {
  window.addEventListener('popstate', handlePopState)
})
onBeforeUnmount(() => {
  window.removeEventListener('popstate', handlePopState)
})
</script>
