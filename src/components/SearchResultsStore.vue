<template>
    <div class="search-result-container">
        <div v-if="attachVisible" class="search-query">
            <div v-if="searchQueryEntered">You have searched for "{{ searchQuery }}"</div>
            <div class="search-results" v-if="searchQueryEntered">
            
            <ul><li v-for="result in results" :key="result.title"> {{result.objectID}}, {{result.title}}, {{result.type}}</li>
              </ul>
            </div>
        </div>
        </div>
    
</template>

<script>
export default {
  name: "SearchResultsStore",
  computed: {
    searchQueryEntered() {
      if (this.$store.state.searchQuery.length > 0) {
        return true;
      } else if (this.$store.state.attachVisible == false) {
        return false;
      }
      return false;
    },
    searchQuery() {
      return this.$store.state.searchQuery;
    },
    results() {
      return this.$store.state.results;
    },
    attachVisible() {
      return this.$store.state.attachVisible;
    }
  }
};
</script>

<style scoped>
.search-result-container {
  margin-top: 1em;
}

.search-results {
  margin-top: 1em;
}

.search-query {
  font-style: italic;
}

ul {
  list-style-type: none;
}
</style>
