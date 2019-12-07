<template>
  <v-footer
    dark
    color="#2ecc71" class="align"
  >
    <v-card
      flat
      tile
      color="#2ecc71"
      class=" lighten-1 white--text"
    >
      <v-card-text class="white--text copy">
        &copy; <strong>VueSoccer</strong> - {{ new Date().getFullYear() }} 
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<style scoped>
    .copy{
        font-size:18px;
    }
    .align{
        display:flex;
        justify-content: center
    }
</style>

