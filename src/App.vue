<template>
  <div id="app">
    
    <SearchBox/>
    <SearchResults/>
  </div>
</template>

<script>

import SearchBox from "./components/SearchBox.vue";
import SearchResults from "./components/SearchResults.vue";

export default {
  name: "MainApp",
  components: {
    SearchBox,
    SearchResults
  },
  data: function() {
    return {
      searchQuery: null,
    };
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
