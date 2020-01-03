<template>
    <div id="inputinfo">
        <h3> 당신의 정보를 입력해주세요 </h3>
        <div class="row justify-content-right">
            <div class="row-md-4 mr-3">
                <div class="card">
                    <div class="card-header"><h5>INFO GROUP 1</h5></div>
                    <div class="card-body">
                        <form @submit="formSubmit">
                        <strong>자주쓰는 ID:</strong>
                        <input type="text" class="form-control" v-model="inputinfos.userid"  style="background-color: #ffe3d1;">
                        <br>
                        <strong>휴대폰번호(예>01090412798):</strong>
                        <input type="text" class="form-control" v-model="inputinfos.phone" style="background-color: #ffe3d1;">
                        <br>
                        <strong>대표 계좌번호(예>40040101010231):</strong>
                        <input type="text" class="form-control" v-model="inputinfos.account" style="background-color: #ffe3d1;">
                        <br>
                      
                        </form>
                    </div>
                </div>
            </div>

            <div class="row-md-4 mr-3">
                <div class="card">
                    <div class="card-header"><h5>INFO GROUP 2</h5></div>
                    <div class="card-body">
                        <form @submit="formSubmit">
                        
                        <strong>이름:</strong>
                        <input type="text" class="form-control" v-model="inputinfos.name" style="background-color: #ffe3d1">
                        <br>
                        <strong>직장명(예>국민은행):</strong>
                        <input type="text" class="form-control" v-model="inputinfos.compnay">
                        <br>
                        <strong>주소(예>여의도동 광장아파트 1동 1001호):</strong>
                        <input type="text" class="form-control" v-model="inputinfos.address" style="background-color: #ffe3d1;">
                        <br>
                        <strong>생년월일(예>810520):</strong>
                        <input type="text" class="form-control" v-model="inputinfos.borndate">

                        </form>
                    </div>
                </div>
            </div>

            <div class="row-md-4 mr-3">
                <div class="card">
                    <div class="card-header"><h5>INFO GROUP 3</h5></div>
                    <div class="card-body">
                        <form @submit="formSubmit">
                        <strong>대학교명(예>한국대):</strong>
                        <input type="text" class="form-control" v-model="inputinfos.college">
                        <br>
                        <strong>고등학교명(예>고려고):</strong>
                        <input type="text" class="form-control" v-model="inputinfos.highschool">
                        <br>
                        <strong>중학교명(예>신라중):</strong>
                        <input type="text" class="form-control" v-model="inputinfos.middleschool">
                        <br>
                        <strong>초등학교명(예>백제초):</strong>
                        <input type="text" class="form-control" v-model="inputinfos.elementaryschool">

                        </form>
                    </div>
                </div>
            </div>

            <div class="row-md-4">

                <button class="btn btn-danger btn-lg" >② 스크래핑 시작</button>
            </div>


        </div>
                <button class="btn btn-info btn-lg"  @click="setInputInfo">① 내정보 등록</button><br><br>
    </div>

                 
</template>

<script type="text/javascript">
import { mapState } from 'vuex'

export default {
  name: 'InputInfo',
  mounted () {
    this.$store.dispatch('setInputInfo')
  },
  computed: mapState([
    'inputinfos'
  ])
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
