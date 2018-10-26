<template>
  <div id="app">
    
    <SearchBoxStore />
    <SearchResultsStore />
  </div>
</template>

<script>
/* eslint-disable */
//import SearchBox from './components/SearchBox.vue'
import SearchBoxStore from './components/SearchBoxStore.vue'
//import SearchResults from './components/SearchResults.vue'
import SearchResultsStore from './components/SearchResultsStore.vue'


export default {
  name: 'MainApp',
  components: {
    //SearchBox,
    //SearchResults,
    SearchBoxStore,
    SearchResultsStore
  },
  data: function () {
      return {
          searchQuery: null,
          show: false
      }
  },
  methods: {
      parentHandler(inputText) {
          this.searchQuery = inputText;
          //console.log("Der Parent hat folgendes erhalten: " + event);
      }
  }

}
</script>

<style>
body, html {
  padding: 1em;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
