<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <router-view/>
    <ul>
      <li v-for="(repo,index) in repos" :key="index">{{index}}</li>
    </ul>
  </div>
</template>

<script>
import header from '@/components/header/header.vue';
import axios from 'axios'
const response = require('./common/data/seller.json');
export default {
  name: 'App',
  data () {
    return {
      seller: {
      },
      repos: []
    }
  },
  created() {
    // fetch()
    this.seller = Object.assign({}, this.seller, response.data)
    axios.get('https://api.github.com/users/shunwuyu/repos')
      .then(data => {
        console.log(data);
        this.repos = data.data
      })
  },
  components: {
    'v-header': header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
