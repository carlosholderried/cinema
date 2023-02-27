<template>
  <HeaderComp />

  <table border="1">   
        <tr>
          <td>Filme</td>
       <!--   <td>Sala</td>
          <td>Horario</td>
          <td>Dublado</td>
          <td>3d</td>
          <td>Id</td> -->
        </tr>                                            
          <tr v-for="item in filme" :key="item.id">                       
              <td>              
              <!-- <button v-on:click="GetSecao(item)">comprar</button> -->
              <router-link :to="'/data-c/'+item.id">{{ item.titulo }}</router-link>
              </td>
          </tr>
      </table>
</template>

<script>
import HeaderComp from './HeaderComp.vue'
import axios from 'axios';
export default{
    name:'HomePage',
    data(){
      return{
              filme:[]
            }
    },
    components:{
      HeaderComp
    },
    methods:{
              async LoadData(){
                let result = await axios.
                get("http://localhost:3000/filme")
                //get("https://192.168.0.6:7087/Filmes")

                //const filmes = [...new Set(result.data.map((item) => item.filme))]
                this.filme=result.data;
              }
    },
    mounted()
    {
        this.LoadData();
    }
}
</script>