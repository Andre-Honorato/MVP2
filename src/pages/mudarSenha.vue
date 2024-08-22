<template>
  <v-container class="pa-6">
    <h1>Mudar senha</h1>
    <p class="text-low mt-3 mb-6">Insira a nova senha para seu usuário.</p>
    <v-form
      ref="formOne"
      @submit.prevent
    >
      <v-row>
        <v-col cols="12">
          <v-text-field
            type="password"
            v-model="senha"
            variant="outlined"
            label="Nova senha"
            :rules="rules.ruleRequerido"
          />
        </v-col>
        <v-col class="pt-2">
          <v-btn
            block
            color="primary"
            size="large"
            class="text-capitalize text-body-1"
            rounded="lg"
            variant="flat"
            type="submit"
            @click="validate()"
            >Enviar</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue'
import { userStore } from '../store/user'
import { useRouter } from 'vue-router'

const store = userStore()
const senha = ref('')
const router = useRouter()
const root = getCurrentInstance().proxy
const rules = {
  ruleRequerido: [
    (value) => {
      if (value) return true

      return 'Campo obrigatório'
    },
    (value) => {
      if (value && value.length >= 6) return true

      return 'Mínimo 6 caracteres'
    }
  ]
}

function change() {
  store.user.password = senha.value
  router.push('/login')
}

async function validate() {
  const valid = (await root.$refs['formOne'].validate()).valid
  if (valid) {
    change()
  }
}
</script>
