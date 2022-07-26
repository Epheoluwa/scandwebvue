<template>
    <div class="mb-5">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <h4>Product {{page}}</h4>
                <div class="d-flex justify-content-between">
                  <slot></slot> 
                </div>
                
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'mainNav',
    props:{
      page: String,
    }
}
</script>

<style lang="scss" scoped>

</style>