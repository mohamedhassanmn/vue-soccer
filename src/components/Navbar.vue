<template>
  <div>
    <v-app-bar color="#2ecc71" dark>
      <v-toolbar-title id="logo" style="color:white">{{$store.state.logo}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon v-if="status"><router-link to="/login">LOGIN</router-link></v-btn>
      <v-btn icon v-else @click="remove"><router-link to="/">LOGOUT</router-link></v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
    data(){
        return{
            localStorageStatus:true
        }
    },
    methods:{
        remove(){
            localStorage.removeItem('userId')
            this.localStorageStatus=!this.localStorageStatus
        }
    },
    computed:{
        status(){
            return this.localStorageStatus
        }
    },
    created(){
        // console.log(localStorage.getItem("userId"))
        if(localStorage.getItem("userId")){
            this.localStorageStatus=false
        }
    }
}
</script>

<style scoped>
#logo{
    font-family: 'Alatsi', sans-serif;
    font-size:30px;
    color:#fff !important;
}
</style>