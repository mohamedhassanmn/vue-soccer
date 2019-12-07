import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import {FOOTBALL_API,HOST,KEY} from './config'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data:[]
  },
  mutations: {
   setData(state,payload){
    state.data=payload
   }
  },
  actions: {
    getData({commit}){
      console.log("i am in")
      axios.get(
        FOOTBALL_API,
        {
          headers:{
            'x-rapidapi-host':HOST,
            'x-rapidapi-key':KEY
          }
        }
      )
      .then(
        res=>{
        console.log(res.data)
        commit("setData",res.data)
        },
        err=>alert(err)
      )
    }
  },
  modules: {}
});
