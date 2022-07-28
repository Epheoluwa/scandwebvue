<template>

<form @submit.prevent="submitform" id="product_form">
  <div class="hello">
    <MainNav page="Add"> 
      <button class="btn btn-outline-success" type="submit">Save</button>
      <button class="btn btn-outline-danger ms-3"><router-link :to="{ name: 'ViewProduct'}" >Cancel</router-link></button>
    </MainNav>
    <div class="container">
      <div class="row g-3">
          <div class="col-md-6">
            <div class="row mb-3">
                  <label for="name" class="col-sm-2 col-form-label">Name</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="name" placeholder="Product Name" v-model="data.name">
                  </div>
                  <span v-if="v$.value.name.$error" class="invalid-feedback" style="display:block"> {{ v$.value.name.$errors[0].$message }} </span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row mb-3">
                  <label for="sku" class="col-sm-2 col-form-label">SKU</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" :class="errrorClass" id="sku" placeholder="Product SKU" v-model="data.sku">
                  </div>
                  <span v-if="v$.value.sku.$error" class="invalid-feedback" style="display:block"> {{ v$.value.sku.$errors[0].$message }} </span>
                  <span v-show="error" class="invalid-feedback" style="display:block">
                    SKU must be unique 
                  </span>
            </div>
            
          </div>
          <div class="col-md-6">
            <div class="row mb-3">
                  <label for="price" class="col-sm-2 col-form-label">Price</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="price" placeholder="Product Price" v-model="data.price">
                  </div>
                  <span v-if="v$.value.price.$error" class="invalid-feedback" style="display:block"> {{ v$.value.price.$errors[0].$message }} </span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row mb-3">
                  <label for="productType" class="col-sm-3 col-form-label">Product type</label>
                  <div class="col-sm-9">
                    <select id="productType" class="form-select" v-model="data.prod_type" @click="defineShowtype">
                      <option value="size" id="DVD">DVD</option>
                      <option value="book" id="Book">Book</option>
                      <option value="furniture" id="Furniture">Furniture</option>
                    </select>
                  </div>
                  <span v-if="v$.value.prod_type.$error" class="invalid-feedback" style="display:block"> {{ v$.value.prod_type.$errors[0].$message }} </span>
            </div>
          </div>
          <div class="col-md-6" v-show="sizetype">
            <div class="row mb-3">
                  <label for="size" class="col-sm-2 col-form-label">Size (MB)</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="size" placeholder="Product Size" v-model="data.size" >
                  </div>
                  <span v-if="v$.value.size.$error" class="invalid-feedback" style="display:block"> {{ v$.value.size.$errors[0].$message }} </span>
            </div>
            <p>Please provide size in megabyte</p>
          </div>
          <div class="col-md-6" v-show="booktype">
            <div class="row mb-3">
                  <label for="weight" class="col-sm-2 col-form-label">Weight</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="weight" placeholder="Product Weight" v-model="data.weight">
                  </div>
                  <span v-if="v$.value.weight.$error" class="invalid-feedback" style="display:block"> {{ v$.value.weight.$errors[0].$message }} </span>
            </div>
            <p>Please provide weight in kilogram</p>
          </div>
          <div class="col-md-12" v-show="furnituretype">
            
            <div class="row">
               <div class="col-md-4" >
                  <div class="row mb-3">
                        <label for="height" class="col-sm-2 col-form-label">Height</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="height" placeholder="Product Height" v-model="data.height" >
                        </div>
                        <span v-if="v$.value.height.$error" class="invalid-feedback" style="display:block"> {{ v$.value.height.$errors[0].$message }} </span>
                  </div>
                </div>
                <div class="col-md-4" >
                  <div class="row mb-3">
                        <label for="width" class="col-sm-2 col-form-label">Width</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="width" placeholder="Product Width" v-model="data.width">
                        </div>
                        <span v-if="v$.value.width.$error" class="invalid-feedback" style="display:block"> {{ v$.value.width.$errors[0].$message }} </span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="row mb-3">
                        <label for="length" class="col-sm-2 col-form-label">Length</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="length" placeholder="Product Length" v-model="data.length">
                        </div>
                        <span v-if="v$.value.length.$error" class="invalid-feedback" style="display:block"> {{ v$.value.length.$errors[0].$message }} </span>
                  </div>
                </div>
            </div>
               <p>Please provide dimension in HxWxL format</p>
          </div>
        
      </div>
    </div>
   
  </div>
  </form>
</template>

<script>
import MainNav from './mainNav.vue' 
import { reactive, ref, onUpdated, onMounted, onBeforeMount } from 'vue'
import useValidate from '@vuelidate/core'
// import { required, alpha, numeric, helpers} from '@vuelidate/validators'
import useValidatefunction from '../composables/validation.js'
// import axios from 'axios'; 
// import { useRouter } from "vue-router";
export default {
  name: 'HelloWorld',
  components: { MainNav, },
  setup(){
    const data = reactive({
      name: '',
      sku: '',
      price: '',
      prod_type: '',
      weight: '',
      height: '',
      size: '',
      width: '',
      length: ''
    })
    //router variable defination
    // const router = useRouter();

    //conditions handling the different input show and hide
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

    const { rulesforDvd, rulesforBook, rulesforFurniture, rules} = useValidatefunction()
    const v$ = reactive({
      value: ""
    })
    onBeforeMount(()=> {
      v$.value = useValidate(rules, data)
      console.log("On Beforemounted v$ :" ,v$.value)
      
    })
    onMounted(()=> {
      
      v$.value = useValidate(rules, data)
      console.log("No Type yet")
      console.log("On mounted v$ :" , v$)
    })
    onUpdated(()=> {
      if(sizetype.value){
       v$.value = useValidate(rulesforDvd, data)
        console.log("DVD")
        console.log("On dvd v$ :" , v$.value)
      }
      if(booktype.value){
       v$.value = useValidate(rulesforBook, data)
        console.log("BOOKS")
        console.log("On books v$ :" ,v$.value)
      
      }
      if(furnituretype.value){
       v$.value = useValidate(rulesforFurniture, data)
        console.log("FURNITURE")
        console.log("On furni v$ :" ,v$.value)
        
      }
      
    })
    //error handling starts here
    const errrorClass = ref('')
    const error = ref(false)

    //form submission function
    const submitform = async () => {
      // console.log(data)
      console.log("On submit v$ :" ,v$.value)
      const result = await v$.value.$validate();
      if(result){
        console.log("Data saved")
      }else{
        console.log("Data Not saved")
      }

      // axios.post('http://localhost/phpcrudapi/api/create.php', 
      //   {...data}, { headers: {
      //     'Content-type': 'application/json',
      //   }})
      //   .then(function(response) {
      //     // console.log(response.data.status)
      //     if (response.data.status == true ) {
      //       router.push({name: 'ViewProduct'})
      //     }else{
      //       errrorClass.value = 'is-invalid'
      //       error.value = true
      //     }
      //     })
      //   .catch(function(e){
      //     console.log("Error:",e)
      //   })
    }
    return{
      data,
      submitform,
      sizetype,
      booktype,
      furnituretype,
      defineShowtype,
      error,
      errrorClass,
      v$
    }
  }
}
</script>

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
