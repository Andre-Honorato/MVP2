<template>
  <v-layout full-height>
    <v-container class="pa-6">
      <v-icon color="primary">mdi-map-marker-outline</v-icon>
      <span class="ml-1 text-low">{{ storeUser.user.address }}, {{ storeUser.user.number }}</span>
      <v-row class="mt-2">
        <v-col class="pb-0">
          <v-text-field
            color="primary"
            variant="outlined"
            rounded="pill"
            :label="`Busque por ${storeUser.user.type === 'ong' ? 'estabelecimentos' : 'ONGs'}`"
            hide-details
            v-model="filter"
          >
            <template #prepend-inner>
              <v-icon
                color="primary"
                class="opacity-100"
                >mdi-magnify</v-icon
              >
            </template>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row
        v-if="storeUser.user.type === 'ong'"
        v-for="product in filteredItems"
        :key="product.id"
        class="pt-10 mt-0"
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
                    >{{ product.collected ? 'Coleta realizada' : 'Disponível para coleta' }}</span
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
      <v-row
        v-else
        v-for="ong in filteredItems"
        :key="ong.id"
        class="pt-10 mt-0"
      >
        <v-col cols="10" @click="see(ong)">
          <v-row>
            <v-col cols="3">
              <v-img class="rounded-circle" width="52" height="52" :src="ong.image"></v-img>
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
                  <h5 class="text-uppercase">{{ong.name}}</h5>
                </v-col>
                <v-col
                  class="py-0"
                  cols="12"
                >
                  <span
                    class="bg-secondary text-chip rounded text-caption py-1 px-2"
                    >{{ ong.collected ? 'Ajuda realizada' : 'Disponível para ajuda' }}</span
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
                  <span class="text-low ml-1 text-body-2">{{ ong.start }} às {{ ong.end }}</span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="2"
          class="pl-0"
        >
          <v-btn @click.stop="favoriteItem(ong)" icon variant="flat" color="transparent" width="auto" height="auto">
            <v-icon v-if="!ong.favorite" color="low">mdi-heart-outline</v-icon>
            <v-icon v-else color="red">mdi-heart</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
  <v-bottom-navigation mandatory v-model="screen" mode="shift" grow base-color="low" color="primary">
      <v-btn value="home">
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
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { userStore } from '../store/user'
import { productsStore } from '../store/products'

const screen = ref('home')
const router = useRouter()
const storeUser = userStore()
const storeProducts = productsStore()
const filter = ref('')

function see(product) {
  router.push(`/perfilOutro?id=${product.id}`)
}

const filteredItems = computed(() => {
  if (filter.value) {
    if (storeUser.user.type === 'ong') {
      return storeProducts.products.markets.filter(obj => obj.name.toLowerCase().includes(filter.value))
    }
    return storeProducts.products.ongs.filter(obj => obj.name.toLowerCase().includes(filter.value))
  }
  else {
    if (storeUser.user.type === 'ong') {
      return storeProducts.products.markets
    }
    return storeProducts.products.ongs
  }
})

function favoriteItem(product) {
  if (storeUser.user.type === 'ong') {
    const index = storeProducts.products.markets.findIndex(obj => obj.id === product.id)
    storeProducts.products.markets[index].favorite = !storeProducts.products.markets[index].favorite
  }
  else {
    const index = storeProducts.products.ongs.findIndex(obj => obj.id === product.id)
    storeProducts.products.ongs[index].favorite = !storeProducts.products.ongs[index].favorite
  }
}
</script>