<template>
  <HeaderComp />
 <!--  
  <table border="1">   
        <tr>
          <td>Movie</td>
       <td>Sala</td>
          <td>Horario</td>
          <td>Dublado</td>
          <td>3d</td>
          <td>Id</td>
        </tr>                                            
          <tr v-for="item in secao" :key="item.movies">      
          </tr>
      </table> -->
</template>

<script>
import HeaderComp from './HeaderComp.vue'
// import axios from 'axios';
export default{
    name:'DataR',
    data(){
      return{
              secao:{
                filme:'',
                sala:'',
                horario:'',
                data:'',
                dublado:'',
              }
            }
    },
    components:{
      HeaderComp
    },
    methods:{
              //   async LoadData(filme){
              //   console.log(filme)
              //   let result = await axios.
              //   get("http://localhost:3000/secao?filme="+this.$route.params.filme,{
              //           filme:this.secao.filme,
              //           sala:this.secao.sala,
              //           horario:this.secao.horario,
              //           data:this.secao.data,
              //           dublado:this.secao.dublado,
              //       });
              //   this.secao=result.data;
              // }
    },
    mounted()
    {
        //this.LoadData();
    }
}
</script>