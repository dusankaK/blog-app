<template>
  <div id="app">
    <NavBar/>
      <div class="container">
        <div class="col-sm-10 offset-sm-1">
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: "app",
  components: {
    NavBar
  }
}
</script>

<style>

</style>
