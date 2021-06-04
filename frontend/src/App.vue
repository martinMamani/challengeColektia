<template>
  <div id="app">
    <Header></Header>
    <Body></Body>
  </div>
</template>

<script>
import Header from './components/Header'
import Body from './components/Body'

export default {
  name: 'App',
  components: {
   Header,
   Body,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: coral;
}
</style>
