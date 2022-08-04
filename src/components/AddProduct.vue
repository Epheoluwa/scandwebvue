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
            <p>Amount in dollars[$]</p>
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
                  <div v-if="sizetype">
                      <span v-if="v$.value.size.$error ? v$.value.size.$error : empty" class="invalid-feedback" style="display:block"> {{ v$.value.size.$errors[0].$message }} </span>
                  </div>
                  
            </div>
            <p>Please provide size in megabyte</p>
          </div>
          <div class="col-md-6" v-show="booktype">
            <div class="row mb-3">
                  <label for="weight" class="col-sm-2 col-form-label">Weight</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="weight" placeholder="Product Weight" v-model="data.weight">
                  </div>
                  <div v-if="booktype">
                    <span v-if="v$.value.weight.$error ? v$.value.weight.$error : empty" class="invalid-feedback" style="display:block"> {{ v$.value.weight.$errors[0].$message }} </span>
                  </div>
                  
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
                        <div v-if="furnituretype">
                            <span v-if="v$.value.height.$error ? v$.value.height.$error: empty " class="invalid-feedback" style="display:block"> {{ v$.value.height.$errors[0].$message }} </span>
                        </div>

                  </div>
                </div>
                <div class="col-md-4" >
                  <div class="row mb-3">
                        <label for="width" class="col-sm-2 col-form-label">Width</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="width" placeholder="Product Width" v-model="data.width">
                        </div>
                        <div v-if="furnituretype">
                          <span v-if="v$.value.width.$error ? v$.value.width.$error : empty" class="invalid-feedback" style="display:block"> {{ v$.value.width.$errors[0].$message }} </span>
                        </div>
                        
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="row mb-3">
                        <label for="length" class="col-sm-2 col-form-label">Length</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="length" placeholder="Product Length" v-model="data.length">
                        </div>
                        <div v-if="furnituretype">
                          <span v-if="v$.value.length.$error ? v$.value.length.$error : empty" class="invalid-feedback" style="display:block"> {{ v$.value.length.$errors[0].$message }} </span>
                        </div>

                  </div>
                </div>
            </div>
               <p>Please provide dimension in HxWxL format</p>
          </div>
        
      </div>
    </div>
   
  </div>
  </form>
  <MainFooter></MainFooter>
</template>

<script>
import MainNav from './mainNav.vue' 
import { reactive, ref, onMounted, onBeforeMount, nextTick } from 'vue'
import useValidate from '@vuelidate/core'
import useValidatefunction from '../composables/validation.js'
import axios from 'axios'; 
import { useRouter } from "vue-router";
import MainFooter from './mainFooter.vue';
export default {
  name: 'HelloWorld',
  components: { MainNav, MainFooter },
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
    const router = useRouter();

    //conditions handling the different input show and hide
    const sizetype = ref(false);
    const booktype = ref(false);
    const furnituretype = ref(false);
    const defineShowtype = async()=>{
      if(data.prod_type === "size" ){
        await nextTick()
         v$.value = useValidate(rulesforDvd, data)
        sizetype.value = true
        booktype.value = false
        furnituretype.value = false
        data.height = ""
        data.weight = ""
        data.length = ""
        data.width = ""
      }
      if(data.prod_type === "book" ){
        await nextTick()
         v$.value = useValidate(rulesforBook, data)
        sizetype.value = false
        booktype.value = true
        furnituretype.value = false
        data.height = ""
        data.size = ""
        data.length = ""
        data.width = ""
      }
      if(data.prod_type === "furniture" ){
        await nextTick()
         v$.value = useValidate(rulesforFurniture, data)
         sizetype.value = false
        booktype.value = false
        furnituretype.value = true
        data.weight = ""
        data.size = ""
        
      }
    }

    const { rulesforDvd, rulesforBook, rulesforFurniture, rules} = useValidatefunction()
    const v$ = reactive({
      value: ""
    })
    onBeforeMount(()=> {
      v$.value = useValidate(rules, data)      
    })
    onMounted(()=> {
      v$.value = useValidate(rules, data)
    })

    //error handling starts here
    const errrorClass = ref('')
    const error = ref(false)
    const empty = ref(false)

    //form submission function
    const submitform = async () => {
      const result = await v$.value.$validate();
      if(result){
        console.log("Data saved")
          axios.post('http://localhost/phpcrudapi/api/create.php', 
        {...data}, { headers: {
          'Content-type': 'application/json',
        }})
        .then(function(response) {
           console.log(response.data.status)
          if (response.data.status == false ) {
            errrorClass.value = 'is-invalid'
            error.value = true
          }else{
            router.push({name: 'ViewProduct'})
          }
          })
        .catch(function(e){
          console.log("Error:",e)
        })
      }
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
      v$,
      empty
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
