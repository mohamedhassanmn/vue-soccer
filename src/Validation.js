export const Authenticate = (to,from,next) => {
    if(localStorage.getItem("token")){
      console.log("hi in and out")
      next()
    }else{
      console.log("erroe")
      next("/login")
    }
  }