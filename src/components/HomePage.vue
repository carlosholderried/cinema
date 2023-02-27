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
          <tr v-for="item in secao" :key="item.filme">         <!-- lista items-->
              <td>{{ item }}</td>
              <td>              
              <!-- <button v-on:click="GetSecao(item)">comprar</button> -->
              <router-link :to="'/data-r/'+item.filme">Comprar Ingresso</router-link>
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
              secao:[]
            }
    },
    components:{
      HeaderComp
    },
    methods:{
              async LoadData(){
                let result = await axios.
                get("http://localhost:3000/secao")
                const filmes = [...new Set(result.data.map((item) => item.filme))]
                this.secao=filmes;
              }
    },
    mounted()
    {
        this.LoadData();
    }
}
</script>