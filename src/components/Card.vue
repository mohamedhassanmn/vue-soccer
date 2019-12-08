<template>
    <v-container>
      <v-row dense justify="center">
        <v-col v-for="(card) in $store.state.data.slice(0,9)" lg="4" md="6"
          :key="card.title"
        >
        <router-link :to="{name:'pathTrack',params:{title:card.title.toLowerCase().split(' ').join('')}}">
          <v-card class="card">
            <v-img
              :src="card.thumbnail"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title style="color:white" v-text="card.title"></v-card-title>
            </v-img>

            <v-bottom-navigation color="#2ecc71">
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-bottom-navigation>
          </v-card>
        </router-link>
        </v-col>
      </v-row>
      <br><br><br>
      <v-row class="align">
        <router-link to="/view">
            <v-btn al="center" color="#2ecc71">load all</v-btn>
        </router-link>
      </v-row>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>
.align{
    justify-content: center
}
</style>