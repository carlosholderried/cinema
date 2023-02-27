<template>
  <HeaderComp />
 
  <table border="1">   
        <tr>
          <td>Sala</td>
          <td>Horario</td>
          <td>Data</td>
          <td>Dublado</td>
          <td>3D</td>
        </tr>                                              
          <tr v-for="item in secao" :key="item.movies">
            <td>{{item.sala}}</td>
            <td>{{item.horario}}</td>
            <td>{{item.data}}</td>
            <td>{{item.dublado}}</td>
            <td>{{item.d3}}</td>
            <td><router-link :to="'/'">comprar</router-link></td>            
          </tr>
      </table> 
</template>

<script>
import HeaderComp from './HeaderComp.vue'
import axios from 'axios';
export default{
    name:'SecaoC',
    data(){
      return{
              secao:[]      
        // secao:{
              //   sala: '',
              //   horario: '',
              //   data: '',
              //   dublado: '',
              //   d3: ''
              // }          
            }
    },
    components:{
      HeaderComp
    },
    methods:{
                async LoadData(){
                let result = await axios.
                  get("http://localhost:3000/secao?idFilme="+this.$route.params.filmeId+"&data="+this.$route.params.data);
                  console.log(result)
                  this.secao=result.data;
                console.log(this.secao)
              }
    },
    mounted()
    {
        this.LoadData();
    }
}
</script>
