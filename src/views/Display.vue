<template>
    <div>
        <Navbar/>
        <h2 class="heading-2">{{videoData.title}} </h2>
        <div class="video">
            <div v-html="embed"></div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
    data(){
        return {
            videoData:{},
            embed:""
        }
    },
    created(){
        this.embed=this.$store.getters.getData[this.$route.params.title].embed
        this.videoData=this.$store.getters.getData[this.$route.params.title]
    },
    components:{
        Navbar
    }
}
</script>

<style>
    .video{
        display:flex;
        justify-content: center;
        width:100%
    }
    .heading-2{
        margin:5% 100px;
        font-size:30px;
    }

</style>