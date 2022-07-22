<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <h4>Product {{page}}</h4>
      <div class="d-flex justify-content-between">
        <button class="btn btn-outline-success">Save</button>
        <button class="btn btn-outline-danger ms-3">Cancel</button>
      </div>
      
  </div>
</nav>
    </div>
</template>

<script>
export default {
    name: 'mainNav',
    props:{
      page: String
    }
}
</script>

<style lang="scss" scoped>

</style>