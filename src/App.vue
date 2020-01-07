<template>
<div id="main">
<div id="appbar">
  <nav>
    <ul>
      <li><router-link to="/InputInfo">정보입력</router-link></li>
      <li><router-link to="/NaverBlog">Naver블로그</router-link></li>
      <li><router-link to="/NaverCafe">Naver카페</router-link></li>
      <li><router-link to="/NaverWeb">Naver웹검색</router-link></li>
      <li><router-link to="/GoogleWeb">Google웹검색</router-link></li>
    </ul>
  </nav>
  <hr>
</div>
  <div id="app">
   <router-view></router-view>
  </div>
</div>
</template>

<script>
import GoogleWeb from './components/GoogleWeb.vue'
import NaverBlog from './components/NaverBlog.vue'
import NaverCafe from './components/NaverCafe.vue'
import NaverWeb from './components/NaverWeb.vue'
import InputInfo from './components/InputInfo.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router'
import { mapState } from 'vuex';

const router = new VueRouter({
  routes :[

    { path: '/naverblog', component: NaverBlog},
    { path: '/navercafe', component: NaverCafe},
    { path: '/naverweb', component: NaverWeb},
    { path:'/googleweb', component: GoogleWeb},
    { path:'/inputinfo', component: InputInfo},
    { path:'', component: InputInfo},
  ]
})

export default {
  name: 'app',
  router,
    computed: {
    ...mapState(['isLoading', 'refCount'])
  },
  created() {
    this.axios.interceptors.request.use((config) => {
      this.$store.commit('loading', true);
      return config;
    }, (error) => {
      this.$store.commit('loading', false);
      return Promise.reject(error);
    });

    this.axios.interceptors.response.use((response) => {
      this.$store.commit('loading', false);
      return response;
    }, (error) => {
      this.$store.commit('loading', false);
      return Promise.reject(error);
    });
  }
}
</script>

<style>
#appbar {
margin-top: 40px;
margin-left: 80px;
font-size: 1.2rem;
table-layout:fixed;
text-align: center;
max-width: 800px;
}

ul { list-style-type: none; margin:1px; padding: 1px; overflow: hidden;}
li { float:left; border: solid 1px #000000; margin:3px;}
li a { display: block; color: black; text-align: center; padding: 14px 16px; }
li a:hover { background-color: black; color:white;}
</style>
