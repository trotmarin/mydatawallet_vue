<template>
  <div id="navercafe">
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
        <tr v-for="navercafe in navercafes" :key="navercafe.id">
          <td>{{ navercafe.id }}</td>
          <td>{{ navercafe.title }}</td>
          <td><a v-bind:href="navercafe.link" onclick="window.open(this.href, '팝업창', 'width=800, height=800'); return false;">{{ navercafe.preview }}</a></td>
          <td>{{ navercafe.param_1 }}</td>
          <td>{{ navercafe.param_2 }}</td>
          <td>{{ navercafe.accuracy }}</td>
          <td><input type="checkbox" id="checkbox"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'NaverCafe',
  mounted () {
    this.$store.dispatch('loadNaverCafe')
  },
  computed: mapState([
    'navercafes'
  ])
}

</script>
<style>
#navercafe {
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
  thead tr {
  }
  tbody tr:nth-child(2n) {
  }
  tbody tr:nth-child(2n+1) {
    background-color:#dce7da;
  }
</style>