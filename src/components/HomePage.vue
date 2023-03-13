<template>
  <body>
    <HeaderComp />
    <!-- <div class="hpImage"> 
    <img src="https://i.giphy.com/media/6pJNYBYSMFod2/giphy.webp" alt="">
  </div>  -->
    <h1>Catálogo de filmes</h1>
    <div class="cinema">
      <table border="1">
        <tr>
          <td></td>
          <td>Título</td>
          <td>Classificação</td>
          <td>Duração</td>
          <td>Gênero</td>
        </tr>
        <tr v-for="item in Movies" :key="item.id">          
            <td><img class="image"
                :src="item.imageUrl"
                alt="">
            </td>
          <td>{{ item.title }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.lenght }}</td>
          <td>{{ item.genre }}</td>
          <div class="nav">
            <td>
              <router-link :to="'/new-sessions/' + item.id">Ver datas</router-link>
            </td>
          </div>
        </tr>
      </table>
    </div>
  </body>
</template>

<script>
import HeaderComp from './HeaderComp.vue'
import axios from 'axios';
axios.baseURL = 'http://192.168.0.6:7087/'
const axiosRequest = require('axios')

//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default {
  name: 'HomePage',
  data() {
    return {
      Movies: [],
    }
  },
  components: {
    HeaderComp
  },
  methods: {
    // async Loaddate(){
    //   let result = await axios.
    //   get(axios.baseURL+"Movies")        
    //   this.Movies=result.data;
    // }
    LoadDate() {
      axiosRequest
      axios.get(axios.baseURL + "Movies")
        .then((response) => {
          this.Movies = response.data;
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
        .finally
    }
  },
  mounted() {
    this.LoadDate();
  }
}
</script>

<style>
body {
  background-color: rgb(54, 54, 54);
}

.image {
  width: 200px;
}

.cinema {
  float: left;
  color: #d6d6d6f2;
  padding: 14px 16px;
  font-size: 20px;
  text-decoration: none;
  text-align: center;
  margin-right: 5px;
  margin-left: 300px;
  overflow: hidden;
}
</style>