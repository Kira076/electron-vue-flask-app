<template>
  <div id="app">
    <Header/>
    <Home/>
  </div>
</template>

<script>
import Home from './views/Home'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Home,
    Header
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
