<template>
  <div id="app">
    
    <SearchBoxStore/>
    <SearchResultsStore/>
  </div>
</template>

<script>
/* eslint-disable */

import SearchBoxStore from "./components/SearchBoxStore.vue";
import SearchResultsStore from "./components/SearchResultsStore.vue";
import SearchResultItem from "./components/SearchResultItem.vue";



export default {
  name: "MainApp",
  components: {
    SearchBoxStore,
    SearchResultsStore,
    SearchResultItem
   
  },
  data: function() {
    return {
      searchQuery: null,
    };
  },
  methods: {
    parentHandler(inputText) {
      this.searchQuery = inputText;
      //console.log("Der Parent hat folgendes erhalten: " + event);
    }
  }
};
</script>

<style>
body,
html {
  padding: 1em;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
