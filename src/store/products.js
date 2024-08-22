import { ref } from 'vue'
import { defineStore } from 'pinia'

export const productsStore = defineStore('products', () => {
  const products = ref({
    markets: [
      {
        id: 1,
        favorite: false,
        collected: false,
        name: 'Amigão supermercado',
        address: 'R. Saudades, 1004',
        image: '/src/assets/markets/amigao.png',
        description: 'Amigão supermercado é um supermercado localizado no endereço R. Saudades, 1004',
        categories: ['Carnes', 'Doces', 'Massas'],
        start: '08:00',
        end: '22:00'
      },
      {
        id: 2,
        favorite: false,
        collected: false,
        name: 'Bandeirante supermercado',
        address: 'R. João Galo, 94',
        image: '/src/assets/markets/bandeirantes.png',
        description: 'Bandeirante supermercado é um supermercado localizado no endereço R. João Galo, 94',
        categories: ['Condimentos'],
        start: '07:00',
        end: '21:00'
      },
      {
        id: 3,
        favorite: false,
        collected: false,
        name: 'Tonin Super',
        address: 'Av. Euclides Miragaia, 2427',
        image: '/src/assets/markets/tonin.png',
        description: 'Tonin Super é um supermercado localizado no endereço Av. Euclides Miragaia, 2427',
        categories: ['Vegetais', 'Massas', 'Condimentos'],
        start: '06:00',
        end: '23:00'
      },
      {
        id: 4,
        favorite: false,
        collected: false,
        name: 'Supermercados Jardim',
        address: 'R. Natal Masson, 663',
        image: '/src/assets/markets/jardim.png',
        description: 'Supermercados Jardim é um supermercado localizado no endereço R. Natal Masson, 663',
        categories: ['Doces', 'Massas'],
        start: '08:00',
        end: '20:00'
      },
      {
        id: 5,
        favorite: false,
        collected: false,
        name: 'Supermercado paulista',
        address: 'Av. Pedro Gonçalves, 761',
        image: '/src/assets/markets/paulista.png',
        description: 'Supermercado paulista é um supermercado localizado no endereço Av. Pedro Gonçalves, 761',
        categories: ['Laticínios', 'Condimentos'],
        start: '07:30',
        end: '22:00'
      },
      {
        id: 6,
        favorite: false,
        collected: false,
        name: 'Shekinah supermercado',
        address: 'R. Waldemar Vicente, 15',
        image: '/src/assets/markets/shekinah.png',
        description: 'Shekinah supermercado é um supermercado localizado no endereço R. Waldemar Vicente, 15',
        categories: ['Carnes', 'Vegetais'],
        start: '09:00',
        end: '20:00'
      }
    ],
    ongs: [
      {
        id: 1,
        favorite: false,
        collected: false,
        name: 'Ação da Cidadania',
        address: 'Rua da Gamboa, 246',
        image: '/src/assets/ongs/acao.png',
        description: 'Ação da Cidadania é uma ONG localizada no endereço Rua da Gamboa, 246',
        categories: ['Doces', 'Massas', 'Laticínios', 'Condimentos'],
        start: '10:00',
        end: '18:00'
      },
      {
        id: 2,
        favorite: false,
        collected: false,
        name: 'Amigos do bem',
        address: 'Rua Dr. Gabriel de Resende, 122',
        image: '/src/assets/ongs/amigos.png',
        description: 'Amigos do bem é uma ONG localizada no endereço Rua Dr. Gabriel de Resende, 122',
        categories: ['Carnes'],
        start: '09:00',
        end: '17:00'
      },
      {
        id: 3,
        favorite: false,
        collected: false,
        name: 'Misturaí - POA',
        address: 'Luiz Manoel, 229',
        image: '/src/assets/ongs/misturai.png',
        description: 'Misturaí - POA é uma ONG localizada no endereço Luiz Manoel, 229',
        categories: ['Laticínios', 'Vegetais'],
        start: '11:00',
        end: '19:00'
      },
      {
        id: 4,
        favorite: false,
        collected: false,
        name: 'Banco de alimentos',
        address: 'Rua Atibaia, 218',
        image: '/src/assets/ongs/banco.png',
        description: 'Banco de alimentos é uma ONG localizada no endereço Rua Atibaia, 218',
        categories: ['Carnes', 'Massas', 'Condimentos'],
        start: '08:30',
        end: '16:30'
      },
      {
        id: 5,
        favorite: false,
        collected: false,
        name: 'Tem gente com fome!',
        address: 'Rua das Flores, 123',
        image: '/src/assets/ongs/fome.png',
        description: 'Tem gente com fome! é uma ONG localizada no endereço Rua das Flores, 123',
        categories: ['Doces', 'Vegetais'],
        start: '07:00',
        end: '15:00'
      },
      {
        id: 6,
        favorite: false,
        collected: false,
        name: 'Hamburgada do Bem',
        address: 'Avenida Paulista, 4567',
        image: '/src/assets/ongs/hamburgada.png',
        description: 'Hamburgada do Bem é uma ONG localizada no endereço Avenida Paulista, 4567',
        categories: ['Carnes', 'Massas'],
        start: '10:00',
        end: '20:00'
      }
    ]
  })

  return {
    products
  }
})