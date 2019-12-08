<template>
    <div class="background">
        <v-container fluid class="container">
            <v-row class="row">
                <v-col align="center">
                    <v-card
                        class="mx-auto"
                        max-width="344"
                        v-if="!loader"
                    >
                        <v-card-text>
                            <br>
                           <router-link to="/"><h2 id="logo">VueSoccer</h2></router-link>
                            <br><br><br>
                            <v-text-field
                                label="username"
                                v-model="userDetail.username"
                            ></v-text-field>
                        <v-text-field
                                label="email"
                                type="email"
                                v-model="userDetail.email"
                            ></v-text-field>
                        <v-text-field
                                label="password"
                                type="password"
                                v-model="userDetail.password"
                            ></v-text-field>
                        </v-card-text>
                        <v-card-actions class="align">
                            <v-btn color="#2ecc71" class="btn" @click="save">
                                REGISTER
                            </v-btn>
                            <br><br>
                        </v-card-actions>
                        <br><br> 
                        <router-link to="/login">already an user?</router-link>
                        <br><br>
                    </v-card>
                     <v-overlay  v-if="loader">
                        <v-progress-circular indeterminate size="64"></v-progress-circular>
                    </v-overlay>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userDetail:{
                username:"",
                email:"",
                password:""
            },
            loader:false
        }
    },
    methods:{
        save(){
            this.loader=true
            this.$http.post('data.json',this.userDetail)
            .then(
                res=>{
                    this.loader=false
                    localStorage.setItem("userId",res.body.name)
                    this.$router.push("/view")
                },
                err=>alert(err)
            )
        }
    }
}
</script>

<style>
#logo{
    font-family: 'Alatsi', sans-serif;
    font-size:30px;
    color:#2ecc71;
}
.align{
    justify-content: center;
}
.btn{
    color:#fff !important;
}
.background{
    height:100vh;
    background: #2ecc71;
}
.container{
    height:100%;
    width:100%
}
.row{
    height:100%;
    align-items: center
}
</style>