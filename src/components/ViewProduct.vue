<template>
  <MainNav page="View"> 
    <button class="btn btn-outline-success"><router-link :to="{ name: 'AddProduct'}" >Add</router-link></button>
    <button class="btn btn-outline-success ms-3">Mass Delete</button>
  </MainNav>
  <div class="container">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
  </div>
</template>

<script>
import MainNav from './mainNav.vue'
export default {
    setup() {
        return {};
    },
    components: { MainNav, }
}
</script>

<style lang="scss" scoped>

</style>