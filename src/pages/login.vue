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
            >Cadastre-se</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>
