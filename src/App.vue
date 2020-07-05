<template>
  <div id="app">
    <Header/>
    <Home/>
    <Sidebar/>
  </div>
</template>

<script>
import Home from './views/Home'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default {
  name: 'App',
  components: {
    Home,
    Header,
    Sidebar
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
