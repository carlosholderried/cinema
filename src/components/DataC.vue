<template>
  <HeaderComp />
 
  <table border="1">   
        <tr>
          <td>Data</td>
        </tr>                                            
          <tr v-for="item in secao" :key="item.movies">  
               <td>                           
                <router-link :to="'/secao-c/'+this.$route.params.id+'/'+item.data">{{ item.data }}</router-link>
              </td>  
          </tr>
      </table> 
</template>

<script>
import HeaderComp from './HeaderComp.vue'
import axios from 'axios';
export default{
    name:'DataC',
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
                  get("http://localhost:3000/secao?idFilme="+this.$route.params.id,{
                        data:this.secao.data,
                    });
                this.secao=result.data;
              }
    },
    mounted()
    {
        this.LoadData();
    }
}
</script>