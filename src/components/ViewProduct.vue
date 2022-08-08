<template>
  <MainNav page="View"> 
    <button class="btn btn-outline-success"><router-link :to="{ name: 'AddProduct'}" >ADD</router-link></button>
    <button class="btn btn-outline-success ms-3" @click="massDeletebtn" id="delete-product-btn">MASS DELETE</button>
  </MainNav>
  <div class="container">
    <div class="row" v-if="datavalue.length > 0">
      <div class="col-md-3 mb-3" v-for="prod in datavalue" :key="prod.id">
        <div class="card" >
          <div class="card-body">
            <input type="checkbox" :productid="prod.id"  id="" class="checkboxstyle delete-checkbox" @click="deleteThis($event)"/>
            <h5 class="card-title">{{prod.name}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{prod.sku}} </h6>
            <p class="card-text">{{prod.price}} $</p>
            <p class="card-text" v-if="prod.size">Size: {{prod.size}} MB</p>
            <p class="card-text" v-if="prod.weight">Weight: {{prod.weight}}KG</p>
            <p class="card-text" v-if="prod.height">Dimension:{{prod.height}}x{{prod.width}}x{{prod.length}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import MainNav from './mainNav.vue';
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';
// import MainFooter from './mainFooter.vue';
import { useRouter } from 'vue-router';
export default {
  components: { MainNav },
    setup() {
      const datavalue = ref([]);
      const prod_id = reactive([]);
      const router = useRouter();
      const fetchdata = async() =>{
        let response = await axios.get('https://epheoluwa.000webhostapp.com/api/getproduct.php')
        datavalue.value = response.data;
      }
      
      onMounted(fetchdata);
      const deleteThis = function(event){
        if(event.target.checked){
           prod_id.push(event.currentTarget.getAttribute('productid'));
        }else{
          prod_id.splice(prod_id.indexOf(event.currentTarget.getAttribute('productid')), 1)
        }
       
      }

      const massDeletebtn = function(){
        deleting(prod_id);
      }

      const deleting = async(id)=>{
        console.log("Delete btn")
        const idval = [...id];
        // console.log(idval);
          idval.forEach(element => {
            var data =  JSON.stringify({
              "id": element
            }); 

            //fetch delete
            fetch('https://epheoluwa.000webhostapp.com/api/delete.php/', {
              method: 'post',
              body: data
            }).then(function(response) {
              console.log(response)
              // return response.json();
              if (response.status == 404) {
                console.log(response)
              }else{
                router.go();
              }
            });

            //axios delete
            // var config = {
            //   method: 'delete',
            //   url: 'https://epheoluwa.000webhostapp.com/api/delete.php/',
            //   headers: { 
            //     'Content-Type': 'application/json'
            //   },
            //   data : data
            // };

            // axios(config)
            // .then(function (response) {
            //   console.log(JSON.stringify(response.data));
            // })
            // .catch(function (error) {
            //   console.log(error);
            // });
          });
          // router.go();
      }
        return {
          datavalue,
          deleteThis,
          massDeletebtn
          };
    }
    
}
</script>

<style scoped>
.checkboxstyle{
  margin-right: 80%;
}

</style>