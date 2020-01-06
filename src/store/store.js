import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import Axios from 'axios';

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    state: {
    googlewebs: [],
    naverwebs: [],
    navercafes: [],
    naverblogs: [],
    inputinfos: [],
  },

  actions: {

  //   postInputInfo : async (store, inputinfos) => {
  //     let { data } = await axios.post('https://blooming-cove-56374.herokuapp.com/user_info', inputinfos)
  //     if(data.status == 200 ){
  //     store.commit('ADD_INPUTINFO', inputinfos)
  //     }
  // },
    // postInputInfo( { commit }) {
    //   axios
    //   .post('https://blooming-cove-56374.herokuapp.com/user_info')
    //   .then(r => r.data)
    //   .then(inputinfos => {
    //   commit('ADD_INPUTINFO', inputinfos)
    //    })
    //   },

    loadGoogleWeb ({ commit }) {
      axios
        // .get('http://127.0.0.1:8080/google_web/list_only/')
        .get('https://blooming-cove-56374.herokuapp.com/google_web/list_only/')
        .then(r => r.data)
        .then(googlewebs => {
        commit('SET_GOOGLEWEB', googlewebs)
        })
    },

    loadNaverWeb ({ commit }) {
      axios
        // .get('http://127.0.0.1:8080/naver_web/list_only/')
        .get('https://blooming-cove-56374.herokuapp.com/naver_web/list_only/')
        .then(r => r.data)
        .then(naverwebs => {
        commit('SET_NAVERWEB', naverwebs)
        })
    },

    loadNaverCafe ({ commit }) {
      axios
        // .get('http://127.0.0.1:8080/naver_cafe/list_only/')
        .get('https://blooming-cove-56374.herokuapp.com/naver_cafe/list_only/')
        .then(r => r.data)
        .then(navercafes => {
        commit('SET_NAVERCAFE', navercafes)
        })
    },

    loadNaverBlog ({ commit }) {
      axios
        // .get('http://127.0.0.1:8080/naver_blog/list_only/')
        .get('https://blooming-cove-56374.herokuapp.com/naver_blog/list_only/')
        .then(r => r.data)
        .then(naverblogs => {
        commit('SET_NAVERBLOG', naverblogs)
        })
    },

  },
  mutations: {
    ADD_INPUTINFO : (state, inputinfos) => {
      state.inputinfos.push(inputinfos)
    },
    SET_GOOGLEWEB (state, googlewebs) {
      state.googlewebs = googlewebs
    },
    SET_NAVERWEB (state, naverwebs) {
      state.naverwebs = naverwebs
    },

    SET_NAVERCAFE (state, navercafes) {
      state.navercafes = navercafes
    },

    SET_NAVERBLOG (state, naverblogs) {
      state.naverblogs = naverblogs
    },
  }
})