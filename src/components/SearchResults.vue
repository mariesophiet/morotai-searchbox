<template>
  <div class="search-results">
    <div class="search-query">
      You have searched for {{ searchQuery }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchResults',
  props: {
      searchQuery: String
  },
}
</script>

<style scoped>
.search-results {
  margin-top: 1em;
}

.search-query {
  font-style: italic;
}
</style>
