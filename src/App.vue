<template>
  
  <MainNav page="Add"/>
  <AddProduct msg="Dont remove yet using it to test"/>
</template>

<script>
import AddProduct from './components/AddProduct.vue'

import MainNav from './components/mainNav.vue'


export default {
  name: 'App',
  components: {
    AddProduct,
    MainNav,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
