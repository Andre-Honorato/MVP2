<template>
  <v-container class="pa-6">
    <h1>Esqueceu sua senha?</h1>
    <p class="text-low mt-3 mb-6">Enviaremos um e-mail com instruções de como redefinir sua senha</p>
    <v-row>
      <v-col cols="12">
        <v-text-field variant="outlined" label="Email" />
      </v-col>
      <v-col class="pt-2">
        <v-btn
          block
          color="primary"
          size="large"
          class="text-capitalize text-body-1"
          rounded="lg"
          variant="flat"
          >Enviar</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>
