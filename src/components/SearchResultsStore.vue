<template>
    <div class="search-result-container">
        <div class="search-query">
            <div v-if="searchQueryEntered">You have searched for {{ searchQuery }}</div>


            <div class="search-results" v-if="searchQueryEntered">
                <div>
                    {{ result1 }}
                </div>
                <div>
                    {{ result2 }} 
                </div>
                <div>
                    {{ result3 }}
                </div>
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
      }
      return false;
    },
    searchQuery() {
      return this.$store.state.searchQuery;
    },
    result1() {
      return this.$store.state.result1;
    },
    result2() {
        return this.$store.state.result2;
    },
    result3() {
        return this.$store.state.result3;
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
</style>
