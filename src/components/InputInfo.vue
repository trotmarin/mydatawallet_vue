<template>
    <div id="inputinfo">
        <h3> 당신의 정보를 입력해주세요 </h3>
        <div class="row justify-content-right">
            <div class="row-md-4 mr-3">
                <div class="card">
                    <div class="card-header"><h5>INFO GROUP 1</h5></div>
                    <div class="card-body">
                        <!-- <form @submit="formSubmit"> -->
                        <strong>자주쓰는 ID:</strong>
                        <input type="text" class="form-control" v-model="email" placeholder="필수항목" style="background-color: #ffe3d1;">
                        <br>
                        <strong>휴대폰번호(예>01090412798):</strong>
                        <input type="text" class="form-control" v-model="hp" placeholder="필수항목" style="background-color: #ffe3d1;">
                        <br>
                        <strong>대표 계좌번호(예>40040101010231):</strong>
                        <input type="text" class="form-control" v-model="account" placeholder="필수항목" style="background-color: #ffe3d1;">
                        <br>
                      
                        <!-- </form> -->
                    </div>
                </div>
            </div>

            <div class="row-md-4 mr-3">
                <div class="card">
                    <div class="card-header"><h5>INFO GROUP 2</h5></div>
                    <div class="card-body">
                        <!-- <form @submit="formSubmit"> -->
                        
                        <strong>이름:</strong>
                        <input type="text" class="form-control" v-model="name" placeholder="필수항목"  style="background-color: #ffe3d1">
                        <br>
                        <strong>직장명(예>국민은행):</strong>
                        <input type="text" class="form-control" placeholder="(입력금지)구현중" v-model="inputinfos.company">
                        <br>
                        <strong>주소(예>여의도동 광장아파트 1동 1001호):</strong>
                        <input type="text" class="form-control" v-model="address" placeholder="필수항목" style="background-color: #ffe3d1;">
                        <br>
                        <strong>생년월일(예>810520):</strong>
                        <input type="text" class="form-control" placeholder="(입력금지)구현중" v-model="inputinfos.borndate">

                        <!-- </form> -->
                    </div>
                </div>
            </div>

            <div class="row-md-4 mr-3">
                <div class="card">
                    <div class="card-header"><h5>INFO GROUP 3</h5></div>
                    <div class="card-body">
                        <!-- <form @submit="formSubmit"> -->
                        <strong>대학교명(예>한국대):</strong>
                        <input type="text" class="form-control" placeholder="(입력금지)구현중" v-model="inputinfos.college">
                        <br>
                        <strong>고등학교명(예>고려고):</strong>
                        <input type="text" class="form-control" placeholder="(입력금지)구현중" v-model="inputinfos.highschool">
                        <br>
                        <strong>중학교명(예>신라중):</strong>
                        <input type="text" class="form-control" placeholder="(입력금지)구현중" v-model="inputinfos.middleschool">
                        <br>
                        <strong>초등학교명(예>백제초):</strong>
                        <input type="text" class="form-control" placeholder="(입력금지)구현중" v-model="inputinfos.elementaryschool">

                        <!-- </form> -->
                    </div>
                </div>
            </div>

            <div class="row-md-4">

                <button type="submit" class="btn btn-danger btn-lg" @click="startScrapping()">② 스크래핑 시작</button>
            </div>


        </div>
                <button type="submit" class="btn btn-info btn-lg" @click="postInputInfo()">① 내정보 등록</button> &nbsp;
                <br><br>
    </div>

                 
</template>

<script type="text/javascript">
import { mapState } from 'vuex'
import Vue from 'vue';
import axios from 'axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
Vue.use(Loading);


export default {
  name: 'InputInfo',

  data() {
    return {
        email:'',
        hp: '',
        account: '',
        address: '',
        name: '',
    }},

  mounted () {
    this.$store.dispatch('loadInputInfo')
  },
 
  computed: mapState([
    'inputinfos'
  ]),
  methods : {
   
      postInputInfo : function() {
        let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,
        });

        var hp_sub = this.hp.substr( this.hp.length-4, 4 )
        axios.post('https://blooming-cove-56374.herokuapp.com/user_info/', 
        {
          email: this.email,
          hp: hp_sub,
          account: this.account,
          address: this.address,
          name: this.name,
           }
          ).then(response => {
                console.log(response)
                this.result = response.data
                loader.hide()
            }).catch(ex => {
                console.log("ERROR!!: ",ex)
            })
      },

    startScrapping : function() {
        let loader = this.$loading.show({
            // Optional parameters
            container: this.fullPage ? null : this.$refs.formContainer,
            canCancel: true,
            onCancel: this.onCancel,
            });
        axios.get('https://blooming-cove-56374.herokuapp.com/google_web/')
        axios.get('https://blooming-cove-56374.herokuapp.com/naver_web/')
        axios.get('https://blooming-cove-56374.herokuapp.com/naver_blog/')
        axios.get('https://blooming-cove-56374.herokuapp.com/naver_cafe/')
        .then(response => {
                console.log(response)
                this.result = response.data
                loader.hide()
            }).catch(ex => {
                console.log("ERROR!!: ",ex)
            })}
}
}
</script>


<style>
#inputinfo {
  text-align: start;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 100px;
  font-size: 0.7rem;
}
.card-header{
    height: 50px;
    text-align: center;
    font-style:oblique;
    }
.card-body{max-height: 300px;}



</style>
