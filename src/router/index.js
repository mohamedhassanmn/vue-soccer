import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import {Authenticate} from '../Validation'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path:"/login",
    name:"login",
    component:()=>import("@/views/Login")
  },
  {
    path:"/signup",
    name:"signup",
    component:()=>import("@/views/Signup.vue")
  },{
    path:"/view",
    name:"view",
    component:()=>import("@/views/View.vue"),
    beforeEnter:Authenticate,
    children:[
      {path:':title',component:()=>import('@/views/Display.vue'),name:"pathTrack"}
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
