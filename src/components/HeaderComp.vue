<template>
   <div class="nav">
            <router-link to="/">Home</router-link>
   </div>
</template>

<script>
export default{
        name:'HeaderComp',
        methods:{        
        }
}
</script>

<style>
.nav{
    background-color: #333;
    overflow: hidden;
}
.nav a {
  float: left;
  color: #f2f2f2f2;
  padding: 14px 16px;
  font-size: 17px;
  text-decoration: none;
  text-align: center;
  margin-right: 5px;
}
.nav a:hover{
    background: #ddd;
    color:#333
}
</style>