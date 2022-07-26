<template>

<form @submit.prevent="submitform">
  <div class="hello">
    <MainNav page="Add"> 
      <button class="btn btn-outline-success" type="submit">Save</button>
      <button class="btn btn-outline-danger ms-3"><router-link :to="{ name: 'ViewProduct'}" >Cancel</router-link></button>
    </MainNav>
    <div class="container">
      <div class="row g-3">
          <div class="col-md-6">
            <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-2 col-form-label">Name</label>
                  <div class="col-sm-10">
                    <input type="name" class="form-control" id="colFormLabel" placeholder="Product Name" v-model="data.name">
                  </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-2 col-form-label">SKU</label>
                  <div class="col-sm-10">
                    <input type="name" class="form-control" id="colFormLabel" placeholder="Product SKU" v-model="data.sku">
                  </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-2 col-form-label">Price</label>
                  <div class="col-sm-10">
                    <input type="number" class="form-control" id="colFormLabel" placeholder="Product Price" v-model="data.price">
                  </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-3 col-form-label">Product type</label>
                  <div class="col-sm-9">
                    <select id="" class="form-select" v-model="data.prod_type" @click="defineShowtype">
                      <option value="size">DVD</option>
                      <option value="book">Book</option>
                      <option value="furniture">Furniture</option>
                    </select>
                  </div>
            </div>
          </div>
          <div class="col-md-6" v-show="sizetype">
            <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-2 col-form-label">Size</label>
                  <div class="col-sm-10">
                    <input type="number" class="form-control" id="colFormLabel" placeholder="Product Size" v-model="data.size">
                  </div>
            </div>
          </div>
          <div class="col-md-6" v-show="booktype">
            <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-2 col-form-label">Weight</label>
                  <div class="col-sm-10">
                    <input type="number" class="form-control" id="colFormLabel" placeholder="Product Weight" v-model="data.weight">
                  </div>
            </div>
          </div>
          <div class="col-md-4" v-show="furnituretype">
            <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-2 col-form-label">Height</label>
                  <div class="col-sm-10">
                    <input type="number" class="form-control" id="colFormLabel" placeholder="Product Height" v-model="data.height">
                  </div>
            </div>
          </div>
          <div class="col-md-4" v-show="furnituretype">
            <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-2 col-form-label">Width</label>
                  <div class="col-sm-10">
                    <input type="number" class="form-control" id="colFormLabel" placeholder="Product Width" v-model="data.width">
                  </div>
            </div>
          </div>
          <div class="col-md-4" v-show="furnituretype">
            <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-2 col-form-label">Length</label>
                  <div class="col-sm-10">
                    <input type="number" class="form-control" id="colFormLabel" placeholder="Product Length" v-model="data.length">
                  </div>
            </div>
          </div>
      </div>
    </div>
   
  </div>
  </form>
</template>

<script>
import MainNav from './mainNav.vue' 
import { reactive, ref } from 'vue'
export default {
  name: 'HelloWorld',
  components: { MainNav, },
  setup(){
    const data = reactive({
      'name': '',
      'sku': '',
      'price': '',
      'prod_type': '',
      'weight': '',
      'height': '',
      'size': '',
      'width': '',
      'length': ''
    })
    const sizetype = ref(false);
    const booktype = ref(false);
    const furnituretype = ref(false);
    const defineShowtype = function(){
      if(data.prod_type === "size" ){
        sizetype.value = true
        booktype.value = false
        furnituretype.value = false
      }
      if(data.prod_type === "book" ){
        sizetype.value = false
        booktype.value = true
        furnituretype.value = false
      }
      if(data.prod_type === "furniture" ){
        sizetype.value = false
        booktype.value = false
        furnituretype.value = true
      }
     
      
    }
    
    const submitform = function () {
      
    }
    return{
      data,
      submitform,
      sizetype,
      booktype,
      furnituretype,
      defineShowtype
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
