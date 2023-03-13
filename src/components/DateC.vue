<template>
  <body>
    <HeaderComp />
    <table border="1">
      <tr>
        <td>date</td>
      </tr>
      <tr v-for="item in sessions" :key="item.id">
        <div class="dateInfo">
          <td>
            <router-link :to="'/sessions-c/' + this.$route.params.id + '/' + item.date">{{ item.date }}</router-link>
          </td>
        </div>
      </tr>
    </table>
  </body>
</template>

<script>
import HeaderComp from './HeaderComp.vue'
import axios from 'axios';
const axiosRequest = require('axios')

export default {
  name: 'DateC',
  data() {
    return {
      sessions: []
    }
  },
  components: {
    HeaderComp
  },
  methods: {
    loadData() {
      axiosRequest
      axios.get(axios.baseURL + "something" + this.$route.params.id,)
        //axios.get(axios.baseURL+"/Movies/"+this.$route.params.id+"/Sessions")
        .then((response) => {
          this.Sessions = response.data;
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted() {
    this.loadData();
  }
}
</script>

<style>
body {
  background-color: rgb(54, 54, 54);
}

.dateInfo {
  background-color: #683f3f;
  overflow: hidden;
}

.dateInfo a {
  float: left;
  color: #d6d6d6f2;
  padding: 14px 16px;
  font-size: 20px;
  text-decoration: none;
  text-align: center;
}

.dateInfo a:hover {
  background: #ac6868;
  color: #ffffff
}
</style>