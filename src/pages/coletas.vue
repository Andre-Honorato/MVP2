<template>
  <v-layout full-height>
    <v-container v-if="!favorites.length" class="pa-6 d-flex flex-column justify-center align-center h-100">
      <v-icon color="low" size="96">mdi-shopping</v-icon>
      <h3 class="text-low">Nenhuma {{ storeUser.user.type === 'ong' ? 'coleta' : 'doação' }} feita</h3>
    </v-container>
    <v-container v-else class="pa-6">
      <h3>Minhas {{ storeUser.user.type === 'ong' ? 'coletas' : 'doações' }}</h3>
      <v-row
        v-for="product in favorites"
        :key="product.id"
        class="pt-3 mt-4"
      >
        <v-col cols="10" @click="see(product)">
          <v-row>
            <v-col cols="3">
              <v-img class="rounded-circle" width="52" height="52" :src="product.image"></v-img>
            </v-col>
            <v-col
              class="pl-0"
              cols="9"
            >
              <v-row>
                <v-col
                  cols="12"
                  class="py-0"
                >
                  <h5 class="text-uppercase">{{product.name}}</h5>
                </v-col>
                <v-col
                  class="py-0"
                  cols="12"
                >
                <span
                    class="bg-secondary text-chip rounded text-caption py-1 px-2"
                    >{{
                      product.collected
                        ? isOng
                          ? 'Ajuda realizada'
                          : 'Coleta realizada'
                        : isOng
                        ? 'Disponível para ajuda'
                        : 'Disponível para coleta'
                    }}</span
                  >
                </v-col>
                <v-col
                  cols="12"
                  class="pb-0 pt-2"
                >
                  <v-icon
                    size="18"
                    color="low"
                    >mdi-clock-time-four-outline</v-icon
                  >
                  <span class="text-low ml-1 text-body-2">{{ product.start }} às {{ product.end }}</span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="2"
          class="pl-0"
        >
          <v-btn @click.stop="favoriteItem(product)" icon variant="flat" color="transparent" width="auto" height="auto">
            <v-icon v-if="!product.favorite" color="low">mdi-heart-outline</v-icon>
            <v-icon v-else color="red">mdi-heart</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
  <v-bottom-navigation v-model="screen" mode="shift" grow base-color="low" color="primary">
      <v-btn value="home" to="/home">
        <v-icon>mdi-home</v-icon>
        <span>Início</span>
      </v-btn>
      <v-btn value="coletas" to="/coletas">
        <v-icon>mdi-shopping</v-icon>
        <span>{{ storeUser.user.type === 'ong' ? 'Coletas' : 'Doações' }}</span>
      </v-btn>
      <v-btn value="favoritos" to="/favoritos">
        <v-icon>mdi-heart</v-icon>
        <span>Favoritos</span>
      </v-btn>
      <v-btn value="perfil" to="/perfil">
        <v-icon>mdi-account</v-icon>
        <span>Perfil</span>
      </v-btn>
    </v-bottom-navigation>
</template>

<script setup>
import { ref } from 'vue'
import { userStore } from '../store/user'
import { productsStore } from '../store/products'
import { useRouter } from 'vue-router'

const screen = ref('favoritos')
const favorites = ref([])
const storeUser = userStore()
const storeProducts = productsStore()
const isOng = ref(false)
const router = useRouter()

function see(product) {
  router.push(`/perfilOutro?id=${product.id}`)
}

function updateFavorites() {
  if (storeUser.user.type === 'ong') {
    favorites.value = storeProducts.products.markets.filter(obj => obj.favorite)
  }
  else {
    favorites.value = storeProducts.products.ongs.filter(obj => obj.favorite)
  }
}

function updateCollects() {
  if (storeUser.user.type === 'ong') {
    favorites.value = storeProducts.products.markets.filter(obj => obj.collected)
  }
  else {
    isOng.value = true
    favorites.value = storeProducts.products.ongs.filter(obj => obj.collected)
  }
}

updateCollects()
function favoriteItem(product) {
  if (storeUser.user.type === 'ong') {
    const index = storeProducts.products.markets.findIndex(obj => obj.id === product.id)
    storeProducts.products.markets[index].favorite = !storeProducts.products.markets[index].favorite
    updateCollects()
  }
  else {
    const index = storeProducts.products.ongs.findIndex(obj => obj.id === product.id)
    storeProducts.products.ongs[index].favorite = !storeProducts.products.ongs[index].favorite
    updateCollects()
  }
}
</script>
