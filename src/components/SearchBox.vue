<template>
  <div class="search-box">
    <input type="text" :value="searchQuery" @input="triggerChangeTextEvent" />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'SearchBox',
  props: {
      searchQuery: String
  },
  methods: {
      triggerChangeTextEvent(event) {
          console.log(event)
          this.$emit('textHasChanged', event.target.value);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  font-size: 20px;

}

</style>
