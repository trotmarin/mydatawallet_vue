<template>
  <div id="container">
    <table class="table">
      <colgroup>
        <col width="4%">
        <col width="20%">
        <col width="44%">
        <col width="6%">
        <col width="6%">
        <col width="7%">
        <col width="6%">
      </colgroup>
      <thead>
        <tr id="table-title">
          <th>ID</th>
          <th>제목</th>
          <th>내용</th>
          <th>변수1</th>
          <th>변수2</th>
          <th>점수</th>
          <th>내꺼</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="naverblog in naverblogs" :key="naverblog.id">
          <td>{{ naverblog.id }}</td>
          <td>{{ naverblog.title }}</td>
          <td><a v-bind:href="naverblog.link" onclick="window.open(this.href, '팝업창', 'width=800, height=800'); return false;">{{ naverblog.preview }}</a></td>
          <td>{{ naverblog.param_1 }}</td>
          <td>{{ naverblog.param_2 }}</td>
          <td>{{ naverblog.accuracy }}</td>
          <td><input type="checkbox" id="checkbox"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'NaverBlog',
  mounted () {
    this.$store.dispatch('loadNaverBlog')
  },
  computed: mapState([
    'naverblogs'
  ])
}

</script>
<style>
#container {
  align-content: center;
  max-width: 800px;
}
#table-title {
  text-align: center;
  max-height: 3.6em;
}
#checkbox {
    zoom: 2.5;
    text-align: center;
}
.table {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: #2c3e50;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 80px;
  margin-right: 80px;
  font-size: 0.7rem;
  table-layout:fixed;
  max-width: 800px;
}
  th, td {
    padding: 10px;
  }
</style>