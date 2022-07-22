<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <form class="row g-3">
          <div class="col-md-6">
            <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-10">
                    <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
                  </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-2 col-form-label">State</label>
                  <div class="col-sm-10">
                    <select id="inputState" class="form-select">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
            </div>
          </div>
      </form>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
