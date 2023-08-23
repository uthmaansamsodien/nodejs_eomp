import { createStore } from 'vuex'
import axios from 'axios'
const bkURL = "https://backend-cqoc.onrender.com/"
export default createStore({
  state: {
    users: null,
    user:null,
    products:null,
    product:null,
    spinner:false,
    token:null,
    msg:null
  },
  getters: {
  },
  mutations: {
    setUsers(state, users){
        state.users = users
    },
    setUser(state,user){
      state.user = user
    },
    setProducts(state, products){
      state.products = products
    },
    setProduct(state, product){
      state.product = product
    },
    setSpinner(state , value){
      state.spinner = value
    },
    setToken(state, token){
      state.token = token
    },
    setMsg(state, msg){
      state.msg = msg
    }
  },
  actions: {
    async fetchProducts(context){
      try{
        const {data} = await axios.get(`${bkURL}products`)
        context.commit("setProducts", data.results)
      }catch(e){
        context.commit("setMsg", "An error occurred")
      }
    }
  },
  modules: {
  }
})