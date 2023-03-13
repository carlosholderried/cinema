<template>
  <body>
    <HeaderComp />

    <br>  
    <td><img class="sessionImage"
                :src="Movie.imageUrl"
                alt="">
    </td>
    <h1>{{Movie.title }}</h1>

    <p>Selecione a data</p>
      <select v-model="picked" @click="loadData()">
          <option disabled value="">Selecione o filme</option>
          <option v-for="(item, index) in dias" :value="item" :key="index">{{ item.getDate() }}/{{ item.getMonth()+1 }}
          </option>
      </select>
 

    <table border="1">
      <tr>
        <td>Horário</td>
        <td>Data</td>
        <td>Dub/Leg</td>
        <td>3D</td>
        <td>Comprar</td>
      </tr>
      <tr v-for="item in Sessions" :key="item.id">
        <td>{{ item.hour }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.dub }}</td>
        <td>{{ item.d3 }}</td>
        <div class="nav">
          <td><router-link :to="'/'">Escolher</router-link></td>
        </div>
      </tr>
    </table>
  </body>
</template>

<script>
import HeaderComp from './HeaderComp.vue'
import axios from 'axios';

export default {
  name: 'NewSessions',
  data() {
    return {
      Sessions: [],
      picked: new Date(),
      dias: [],
      strDate: '',
      strMouth:'',

      Movie: {
        title: '',
        age: '',
        imageUrl:'',
        genre: '',
        lenght: ''
      }
    }
  },

  components: {
    HeaderComp
  },

  methods: {
    loadData() {
      console.log(this.picked)
      this.strMouth =this.picked.getMonth()+1;
      this.strDate = this.picked.getDate() + '/' + this.strMouth ;
      console.log(this.strDate)
      axios.get(axios.baseURL + "Movies/" + this.$route.params.id + "/find-sessions", {
        params: {
          date: this.strDate
        }
      })
        .then((response) => {
          this.Sessions = response.data;
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    loadMovie() {
      axios.get(axios.baseURL + "Movies/" + this.$route.params.id)
        .then((response) => {
          this.Movie = response.data;
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
        .finally
    },
    addDays(days) {
      this.date = new Date();
      this.date.setDate(this.date.getDate() + days);
      return this.date;
    }
  },
  mounted() {
    for (var i = 0; i < 7; i++) {
      this.dias.push(this.addDays(i))
      console.log(this.dias[i])
    }
    this.loadMovie();
  },

}
</script>


<style>
body {
  background-color: rgb(54, 54, 54);
}

.datas {
  display: flex;
  align-content: center;
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

.Texto {
  text-align: center;
  color: #d6d6d6f2;
}

.sessionImage{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}

</style>