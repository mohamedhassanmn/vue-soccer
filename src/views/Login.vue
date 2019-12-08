<template>
    <div class="background">
        <v-container fluid class="container">
            <v-row class="row">
                <v-col v-if="!checkStatus" align="center">
                    <v-card
                        class="mx-auto"
                        max-width="344"
                    >
                        <v-card-text>
                            <br>
                            <router-link to="/"><h2 id="logo">VueSoccer</h2></router-link>
                            <br><br><br>
                            <v-alert v-if="invalidmsg" color="#ff4757" type="error">
                                Invalid Username or Password
                            </v-alert>
                        <v-text-field
                                label="email"
                                type="email"
                                v-model="userLogin.email"
                            ></v-text-field>
                        <v-text-field
                                label="password"
                                type="password"
                                v-model="userLogin.password"
                            ></v-text-field>
                        </v-card-text>
                        <v-card-actions class="align">
                            <v-btn color="#2ecc71" class="btn" @click="check">
                                LOGIN
                            </v-btn>
                            <br><br>
                        </v-card-actions>
                        <br><br> 
                        <router-link to="/signup">create a new account</router-link>
                        <br><br>
                    </v-card>
                </v-col>
                 <v-overlay v-if="checkStatus">
                    <v-progress-circular indeterminate size="64"></v-progress-circular>
                </v-overlay>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userLogin:{
                email:"",
                password:""
            },
            checkStatus:false,
            invalidmsg:false
        }
    },
    methods:{
        check(){
            this.checkStatus=true
            this.$http.get('data.json')
            .then(
                res=>{
                    let flag=false
                    let id
                    let arr=[]
                    for(let key in res.body){
                        res.body[key].userId=key
                        arr.push(res.body[key])
                    }
                    for(let i=0;i<arr.length;i++){
                        if(arr[i].email==this.userLogin.email&&arr[i].password==this.userLogin.password){
                            flag=true
                            id=arr[i].userId
                        }
                    }
                    if(flag){
                        this.$router.push("/")
                        localStorage.setItem("userId",id)
                    }else{
                        this.checkStatus=false
                        this.invalidmsg=true
                    }

                },
                err=>alert(err)
            )
        }
    },
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