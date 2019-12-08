<template>
  <div>
        <div v-if="!$route.params.title">
            <Navbar/>
            <Card v-if="$store.state.data" :val='$store.state.data'/>
            <v-overlay v-else :value="overlay">
                <v-progress-circular indeterminate size="64"></v-progress-circular>
            </v-overlay>
        </div>
        <div v-else>
            <router-view></router-view>
        </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
export default {
    components:{
        Navbar,
        Card
    }
}
</script>

<style>

</style>