<template>
  <v-layout
    full-height
    class="bg-primary d-flex flex-column"
  >
    <v-container class="pa-6">
      <h1>Cadastre-se</h1>
    </v-container>
    <v-card class="h-100 rounded-t-xl">
      <v-container class="pa-6">
        <v-tabs-window v-model="state.tab">
          <v-tabs-window-item value="one">
            <h2 class="text-low pt-6">Qual seu perfil?</h2>
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
            <v-img
              class="mx-auto"
              width="60%"
              src="../assets/1.svg"
            ></v-img>
            <p class="text-primary text-h6 mt-6">Dados pessoais</p>
            <v-row class="mt-3">
              <v-col
                cols="12"
                class=""
              >
                <v-text-field
                  rounded="lg"
                  label="Email"
                  hide-details
                  variant="outlined"
                  color="primary"
                  v-model="state.user.email"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                class=""
              >
                <v-text-field
                  rounded="lg"
                  label="Nome"
                  hide-details
                  variant="outlined"
                  color="primary"
                  v-model="state.user.name"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  rounded="lg"
                  label="CNPJ"
                  hide-details
                  variant="outlined"
                  color="primary"
                  v-model="state.user.cpfCnpj"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  rounded="lg"
                  label="Endereço"
                  hide-details
                  variant="outlined"
                  color="primary"
                  v-model="state.user.address"
                ></v-text-field>
              </v-col>
              <v-col cols="8">
                <v-text-field
                  rounded="lg"
                  label="CEP"
                  hide-details
                  variant="outlined"
                  color="primary"
                  v-model="state.user.cep"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  rounded="lg"
                  label="Número"
                  hide-details
                  variant="outlined"
                  color="primary"
                  v-model="state.user.number"
                ></v-text-field>
              </v-col>
              <v-col cols="8">
                <v-text-field
                  rounded="lg"
                  label="Cidade"
                  hide-details
                  variant="outlined"
                  color="primary"
                  v-model="state.user.city"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  rounded="lg"
                  label="UF"
                  hide-details
                  variant="outlined"
                  color="primary"
                  v-model="state.user.uf"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                class=""
              >
                <v-text-field
                  rounded="lg"
                  label="Celular"
                  hide-details
                  type="tel"
                  variant="outlined"
                  color="primary"
                  v-model="state.user.phone"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                class=""
              >
                <v-text-field
                  rounded="lg"
                  label="Senha"
                  hide-details
                  variant="outlined"
                  color="primary"
                  type="password"
                  v-model="state.user.password"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  rounded="lg"
                  label="Complemento (opcional)"
                  hide-details
                  variant="outlined"
                  color="primary"
                  v-model="state.user.complement"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-btn
              block
              color="primary"
              class="text-capitalize text-body-1 mt-6"
              size="large"
              rounded="lg"
              variant="flat"
              @click="setActiveTab('three')"
              >Próximo</v-btn
            >
          </v-tabs-window-item>
          <v-tabs-window-item value="three">
            <v-img
              class="mx-auto"
              width="60%"
              src="../assets/2.svg"
            ></v-img>
            <p class="text-primary text-h6 mt-6">Informações adicionais</p>
            <v-row
              class="mt-3 flex-nowrap"
              align="center"
            >
              <v-col
                cols="3"
                class="pr-0"
              >
                <v-img
                  v-if="!state.user.profilePicture"
                  width="60"
                  height="60"
                  id="imagePreview"
                  src="../assets/avatar.svg"
                ></v-img>
                <v-img
                  v-else
                  width="60"
                  height="60"
                  class="rounded-circle"
                  cover
                  :src="state.user.profilePicture"
                ></v-img>
              </v-col>
              <v-col class="pl-0 pb-4">
                <v-file-input
                  ref="fileInputRef"
                  class="d-none"
                  @update:model-value="readImage($event)"
                ></v-file-input>
                <v-btn
                  color="primary"
                  class="text-capitalize text-body-1"
                  variant="flat"
                  size="large"
                  block
                  prepend-icon="mdi-camera"
                  rounded="lg"
                  @click="openFileInput()"
                  >Carregar imagem de perfil</v-btn
                >
              </v-col>
            </v-row>
            <p class="mt-8">Alimentos que costuma doar</p>
            <v-chip-group
              multiple
              class="mt-3"
              color="primary"
              v-model="state.user.categories"
            >
              <v-chip
                filter
                size="large"
                class="text-body-1"
                value="carnes"
                >Carnes</v-chip
              >
              <v-chip
                filter
                size="large"
                class="text-body-1"
                value="doces"
                >Doces</v-chip
              >
              <v-chip
                filter
                size="large"
                class="text-body-1"
                value="massas"
                >Massas</v-chip
              >
              <v-chip
                filter
                size="large"
                class="text-body-1"
                value="salgados"
                >Salgados</v-chip
              >
              <v-chip
                filter
                size="large"
                class="text-body-1"
                value="temperos"
                >Temperos</v-chip
              >
              <v-chip
                filter
                size="large"
                class="text-body-1"
                value="vegetais"
                >Vegetais</v-chip
              >
            </v-chip-group>
            <v-textarea
              variant="outlined"
              label="Descrição"
              rounded="lg"
              color="primary"
              class="mt-6"
              v-model="state.user.description"
            />
            <v-btn
              block
              color="primary"
              class="text-capitalize text-body-1 mt-2"
              size="large"
              rounded="lg"
              variant="flat"
              @click="saveUser()"
              >Próximo</v-btn
            >
          </v-tabs-window-item>
        </v-tabs-window>
      </v-container>
    </v-card>
  </v-layout>
</template>

<script setup>
import { onBeforeUnmount, onMounted, reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { userStore } from '../store/user'

const state = reactive({
  tab: 'one',
  user: {
    email: '',
    password: '',
    name: '',
    cpfCnpj: '',
    address: '',
    cep: '',
    phone: '',
    number: '',
    city: '',
    uf: '',
    complement: '',
    profilePicture: '',
    categories: [],
    description: '',
    active: false
  }
})
const router = useRouter()
const store = userStore()
const root = getCurrentInstance().proxy

function handlePopState() {
  switch (state.tab) {
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

function saveUser() {
  store.user = Object.assign({}, state.user)
  router.push('/successCreate')
}

function setActiveTab(tab) {
  state.tab = tab
  window.history.pushState({ tab }, '')
}

function openFileInput() {
  root.$refs.fileInputRef.click()
}

function readImage(file) {
  const fileReader = new FileReader()
  fileReader.onload = function (e) {
    console.log(e)
    state.user.profilePicture = e.target.result
  }
  fileReader.readAsDataURL(file)
}

onMounted(() => {
  window.addEventListener('popstate', handlePopState)
})
onBeforeUnmount(() => {
  window.removeEventListener('popstate', handlePopState)
})
</script>
