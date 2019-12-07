<template>
  <v-parallax dark src="/hero.jpg">
    <v-row class="row">
            <v-col align="center" class="text">
                <h1 >Watch football</h1><br>
                <h4>Highlights and goals of the latest football matches!</h4>
            </v-col>
    </v-row>
  </v-parallax>
</template>
<script>
export default {
}
</script>
<style scoped>
.row{
    align-items:center;
}
.text{
    color:#f1f2f6;
    font-size: 27px;
    font-family: 'Righteous', cursive;
}
</style>