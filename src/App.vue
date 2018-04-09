<template>
  <div id="app">
    <v-toolbar color="primary"></v-toolbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css?family=Roboto')
  #app
    font-family: "Roboto"
  .toolbar
    margin-bottom: 2rem

</style>
