<template>
  <v-layout
    full-height
    class="bg-primary d-flex flex-column"
  >
    <v-container class="pa-6">
      <h1>Editar perfil</h1>
    </v-container>
    <v-card class="h-100 rounded-t-xl">
      <v-container class="pa-6">
        <v-tabs-window v-model="state.tab">
          <v-tabs-window-item value="two">
            <v-img
              class="mx-auto"
              width="60%"
              src="../assets/1.svg"
            ></v-img>
            <p class="text-primary text-h6 mt-6">Dados pessoais</p>
            <v-form
              ref="formOne"
              @submit.prevent
            >
              <v-row class="mt-3">
                <v-col
                  cols="12"
                  class="pb-1"
                >
                  <v-text-field
                    rounded="lg"
                    label="Nome"
                    variant="outlined"
                    color="primary"
                    v-model="state.user.name"
                    :rules="state.ruleRequerido"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  class="pt-0 pb-1"
                >
                  <v-text-field
                    rounded="lg"
                    label="CEP"
                    variant="outlined"
                    color="primary"
                    @blur="searchCEP()"
                    v-maska="'#####-###'"
                    :rules="state.ruleCep"
                    v-model="state.user.cep"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="8"
                  class="pt-0 pb-1"
                >
                  <v-text-field
                    rounded="lg"
                    label="Endereço"
                    :rules="state.ruleRequerido"
                    variant="outlined"
                    color="primary"
                    v-model="state.user.address"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="4"
                  class="pt-0 pb-1"
                >
                  <v-text-field
                    rounded="lg"
                    label="Número"
                    :rules="state.ruleRequerido"
                    variant="outlined"
                    color="primary"
                    v-model="state.user.number"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="8"
                  class="pt-0 pb-1"
                >
                  <v-text-field
                    rounded="lg"
                    label="Cidade"
                    variant="outlined"
                    color="primary"
                    :rules="state.ruleRequerido"
                    v-model="state.user.city"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="4"
                  class="pt-0 pb-1"
                >
                  <v-autocomplete
                    rounded="lg"
                    label="UF"
                    :items="ufs"
                    variant="outlined"
                    :rules="state.ruleRequerido"
                    color="primary"
                    v-model="state.user.uf"
                  ></v-autocomplete>
                </v-col>
                <v-col
                  cols="12"
                  class="pt-0 pb-1"
                >
                  <v-text-field
                    rounded="lg"
                    label="Celular"
                    type="tel"
                    variant="outlined"
                    v-maska="'(##) #####-####'"
                    :rules="state.ruleCelular"
                    color="primary"
                    v-model="state.user.phone"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  class="pt-0 pb-1"
                >
                  <v-text-field
                    rounded="lg"
                    label="Complemento (opcional)"
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
                type="submit"
                @click="validate('formOne', 'three')"
                >Próximo</v-btn
              >
            </v-form>
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
                  class="text-capitalize text-body-1 py-6"
                  variant="flat"
                  block
                  prepend-icon="mdi-camera"
                  rounded="lg"
                  @click="openFileInput()"
                  >Carregar imagem de perfil</v-btn
                >
              </v-col>
            </v-row>
            <p class="mt-8">
              Deseja
              {{ state.user.type === 'ong' ? 'receber' : 'doar' }}
            </p>
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
                value="laticinios"
                >Laticínios</v-chip
              >
              <v-chip
                filter
                size="large"
                class="text-body-1"
                value="condimentos"
                >Condimentos</v-chip
              >
              <v-chip
                filter
                size="large"
                class="text-body-1"
                value="vegetais"
                >Vegetais</v-chip
              >
            </v-chip-group>
            <p class="mt-4">Horário de funcionamento</p>
            <v-form
              @submit.prevent
              ref="formSecond"
            >
              <v-row class="mt-3">
                <v-col
                  cols="6"
                  class="pr-2 pb-0"
                >
                  <v-text-field
                    v-model="state.user.start"
                    prepend-inner-icon="mdi-clock-fast"
                    color="primary"
                    variant="outlined"
                    label="Abertura"
                    v-maska="'##:##'"
                    :rules="state.ruleHorario"
                  ></v-text-field>
                </v-col>
                <v-col
                  class="pl-2 pb-0"
                  cols="6"
                >
                  <v-text-field
                    v-model="state.user.end"
                    prepend-inner-icon="mdi-alarm-off"
                    color="primary"
                    variant="outlined"
                    label="Fechamento"
                    v-maska="'##:##'"
                    :rules="state.ruleHorario"
                  ></v-text-field>
                </v-col>
              </v-row>
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
                @click="validate('formSecond', 'save')"
                >Próximo</v-btn
              >
            </v-form>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-container>
    </v-card>
  </v-layout>
  <v-snackbar
    v-model="state.snackbar"
    multi-line
    color="error"
    location="top right"
    :close-on-content-click="true"
    :timeout="2000"
    rounded="pill"
    min-width="0"
  >
    {{ state.snackbarText }}
    <template v-slot:actions>
      <v-btn
        color="white"
        icon
        @click="state.snackbar = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
import { onBeforeUnmount, onMounted, reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { userStore } from '../store/user'
import { vMaska } from 'maska/vue'

const state = reactive({
  tab: 'two',
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
  },
  snackbar: false,
  snackbarText: '',
  ruleRequerido: [
    (value) => {
      if (value) return true

      return 'Campo obrigatório'
    }
  ],
  ruleCnpj: [
    (value) => {
      if (value) return true

      return 'Campo obrigatório'
    },
    (value) => {
      if (value && value.length === 18) return true

      return 'CNPJ inválido'
    }
  ],
  ruleCep: [
    (value) => {
      if (value) return true

      return 'Campo obrigatório'
    },
    (value) => {
      if (value && value.length === 9) return true

      return 'CEP inválido'
    }
  ],
  ruleCelular: [
    (value) => {
      if (value) return true

      return 'Campo obrigatório'
    },
    (value) => {
      if (value && value.length === 15) return true

      return 'Celular inválido'
    }
  ],
  ruleSenha: [
    (value) => {
      if (value) return true

      return 'Campo obrigatório'
    },
    (value) => {
      if (value && value.length >= 6) return true

      return 'Mínimo 6 caracteres'
    }
  ],
  ruleHorario: [
    (value) => {
      if (value) return true

      return 'Campo obrigatório'
    },
    (value) => {
      if (value && value.length === 5) return true

      return 'Horário inválido'
    }
  ]
})
const router = useRouter()
const store = userStore()
const root = getCurrentInstance().proxy
const ufs = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO'
]

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

async function searchCEP() {
  if (state.user.cep.length === 9) {
    const cep = state.user.cep.replace('-', '')
    const data = await (
      await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    ).json()
    if (!data.erro) {
      state.user.address = data.logradouro
      state.user.city = data.localidade
      state.user.uf = data.uf
    }
  }
}

async function validate(refForm, next) {
  const valid = (await root.$refs[refForm].validate()).valid
  if (valid) {
    if (state.tab !== 'three') {
      if (next === 'save') {
        saveUser()
      } else {
        setActiveTab(next)
      }
    } else {
      if (!state.user.profilePicture) {
        state.snackbarText = 'Carregue uma imagem de perfil'
        state.snackbar = true
      } else if (!state.user.categories.length) {
        state.snackbarText = `Escolha o que deseja ${
          state.user.type === 'ong' ? 'receber' : 'doar'
        }`
        state.snackbar = true
      } else {
        saveUser()
      }
    }
  }
}

function saveUser() {
  store.user = Object.assign({}, state.user)
  router.push('/successEdit')
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
    state.user.profilePicture = e.target.result
  }
  fileReader.readAsDataURL(file)
}

onMounted(() => {
  window.addEventListener('popstate', handlePopState)
  state.user = Object.assign({}, store.user)
})
onBeforeUnmount(() => {
  window.removeEventListener('popstate', handlePopState)
})
</script>
