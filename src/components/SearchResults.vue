<template>
    <div class="search-result-container">
        <div v-if="attachVisible" class="search-query">
            <div v-if="searchQueryEntered">You have searched for "{{ searchQuery }}"</div>
            <div class="search-results" v-if="searchQueryEntered"><div>
              <template v-for="result in results">
                <SearchResultItem :key="result.title" :title="result.title" :objectID="result.objectID" :type="result.type"></SearchResultItem>
              </template>
            </div>
          </div>
        </div>
    </div>
    
</template>

<script>
import SearchResultItem from "@/components/SearchResultItem.vue";
export default {
  name: "SearchResults",
  components: {
    SearchResultItem
  },
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

</style>
