<template>
  <v-layout
    full-height
    class="d-flex flex-column"
  >
    <div class="w-100 bg-primary">
      <v-container class="pa-6 pb-10">
        <v-row>
          <v-col
            cols="12"
            class="d-flex justify-end pb-0"
          >
            <v-btn
              :prepend-icon="
                product.collected ? 'mdi-shopping' : 'mdi-shopping-outline'
              "
              @click="collectItem(product)"
              variant="flat"
              size="small"
              class="rounded-pill"
            >
              <template v-slot:prepend>
                <v-icon color="primary"></v-icon>
              </template>
              <span
                class="text-primary text-capitalize text-body-2 font-weight-medium"
                >{{ product.collected ? isOng ? 'Ajuda feita' : 'Coletado' : isOng ? 'Não ajudado' : 'Não coletado' }}</span
              >
            </v-btn>
          </v-col>
        </v-row>
        <v-row
          class="h-100 mt-4"
          align="center"
        >
          <v-col>
            <v-img
              class="rounded-circle"
              cover
              width="130"
              height="130"
              :src="product.image"
            ></v-img>
          </v-col>
          <v-col class="text-center">
            <h2>{{ product.name }}</h2>
            <h3 class="font-weight-medium">{{ product.address }}</h3>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container class="pa-6">
      <h1>Descrição</h1>
      <p class="text-low text-body-1 mt-2">{{ product.description }}</p>
      <h3 class="mt-4">
        Frequentemente 
        {{ storeUser.user.type === 'ong' ? 'doados' : 'recebidos' }}
      </h3>
      <v-chip-group
        multiple
        class="mt-3"
        color="primary"
        
        :model-value="product.categories"
      >
        <v-chip
          filter
          style="pointer-events: none;"
          v-for="category in product.categories"
          size="large"
          class="text-body-1"
          :value="category"
          >{{ category }}</v-chip
        >
      </v-chip-group>
    </v-container>
  </v-layout>
  <v-bottom-navigation
    v-model="screen"
    mode="shift"
    grow
    base-color="low"
    color="primary"
  >
    <v-btn
      value="home"
      to="/home"
    >
      <v-icon>mdi-home</v-icon>
      <span>Início</span>
    </v-btn>
    <v-btn
      value="coletas"
      to="/coletas"
    >
      <v-icon>mdi-shopping</v-icon>
      <span>{{ storeUser.user.type === 'ong' ? 'Coletas' : 'Doações' }}</span>
    </v-btn>
    <v-btn
      value="favoritos"
      to="/favoritos"
    >
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
import { onMounted, ref } from 'vue'
import { productsStore } from '../store/products'
import { useRoute } from 'vue-router'
import { userStore } from '../store/user'

const screen = ref('')
const product = ref(null)
const storeProducts = productsStore()
const storeUser = userStore()
const route = useRoute()
const isOng = ref(false)

const { id } = route.query
if (storeUser.user.type === 'ong') {
  product.value = storeProducts.products.markets.find(
    (obj) => obj.id === Number(id)
  )
} else {
  isOng.value = true
  product.value = storeProducts.products.ongs.find(
    (obj) => obj.id === Number(id)
  )
}
function collectItem(product) {
  if (storeUser.user.type === 'ong') {
    const index = storeProducts.products.markets.findIndex(
      (obj) => obj.id === product.id
    )
    storeProducts.products.markets[index].collected =
      !storeProducts.products.markets[index].collected
  } else {
    const index = storeProducts.products.ongs.findIndex(
      (obj) => obj.id === product.id
    )
    storeProducts.products.ongs[index].collected =
      !storeProducts.products.ongs[index].collected
  }
}
</script>
