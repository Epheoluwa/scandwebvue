<template>
  <MainNav page="View"> 
    <button class="btn btn-outline-success"><router-link :to="{ name: 'AddProduct'}" >Add</router-link></button>
    <button class="btn btn-outline-success ms-3">Mass Delete</button>
  </MainNav>
  <div class="container">
    <div class="row" >
      <div class="col-md-3 mb-3" v-for="prod in datavalue" :key="prod.id">
        <div class="card" >
          <div class="card-body">
            <input type="checkbox" name="" id="" class="checkboxstyle"/>
            <h5 class="card-title">{{prod.sku}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{prod.name}}</h6>
            <p class="card-text">{{prod.price}}$</p>
            <p class="card-text" v-if="prod.size">Size:{{prod.size}}</p>
            <p class="card-text" v-if="prod.weight">Weight:{{prod.weight}}</p>
            <p class="card-text" v-if="prod.height">Dimension:{{prod.height}}x{{prod.width}}x{{prod.length}}</p>
            
          </div>
        </div>
      </div>

    </div>
    
  </div>
</template>

<script>
import MainNav from './mainNav.vue'
import { onMounted, ref } from 'vue';
import axios from 'axios';
export default {
  components: { MainNav, },
  
    setup() {
      const datavalue = ref([]);
      const fetchdata = async() =>{
        let response = await axios.get('http://localhost/phpcrudapi/api/getproduct.php')
        datavalue.value = response.data;
      }
      onMounted(fetchdata);
        return {
          datavalue
          };
    }
    
}
</script>

<style scoped>
.checkboxstyle{
  margin-right: 80%;
}
</style>