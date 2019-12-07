<template>
  <div>
    <Navbar/>
    <Heroimg/>
    <div class="heading-cont">
      <h2 class="heading-2">few glimpse</h2>
      <hr>
    </div>
    <Card/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import Heroimg from "@/components/Heroimg"
import Card from "@/components/Card"
import Footer from "@/components/Footer"



export default {
  methods:{
    sendReq(){
      console.log("hi")
      this.$store.dispatch("getData")
    }
  },
  components:{
    Navbar,
    Heroimg,
    Card,
    Footer
  },
  created(){
    console.log("hello")
    this.sendReq()
  }
}
</script>
<style scoped>
  .heading-cont{
    text-align:center;
    font-size: 30px !important;
    margin:3%;
    padding:2%;
    font-family: 'Righteous', cursive;
    color:#747d8c;
  }
  .heading-2{
    margin-bottom:20px;
  }
  hr{
    width:100px;
    margin:auto;
    color:#ccc;
  }
</style>
