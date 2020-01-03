<template>
  <div id="googleweb">
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
        <tr v-for="googleweb in googlewebs" :key="googleweb.id">
          <td>{{ googleweb.id }}</td>
          <td>{{ googleweb.title }}</td>
          <td><a v-bind:href="googleweb.link" onclick="window.open(this.href, '팝업창', 'width=800, height=800'); return false;">{{ googleweb.preview }}</a></td>
          <td>{{ googleweb.param_1 }}</td>
          <td>{{ googleweb.param_2 }}</td>
          <td>{{ googleweb.accuracy }}</td>
          <td><input type="checkbox" id="checkbox"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'GoogleWeb',
  mounted () {
    this.$store.dispatch('loadGoogleWeb')
  },
  computed: mapState([
    'googlewebs'
  ])
}

</script>
<style>
#googleweb {
  align-content: center;
  max-width: 800px;
}
#table-title {
  text-align: center;
  max-height: 3.6em;
}
#checkbox {
    zoom: 1.5;
    text-align: center;
}
.table {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  margin-top: 40px;
  margin-bottom: 40px;


  font-size: 0.7rem;
  table-layout:fixed;
  max-width: 800px;
}
  th, td {
    padding: 10px;
  }

  tbody tr:nth-child(2n) {
    background-color:white;
  }
  tbody tr:nth-child(2n+1) {
    background-color:black;
  }
  
</style>