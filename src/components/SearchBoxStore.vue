<template>
    <div class="search-box">
        <form v-if="!show" v-on:submit.prevent></form>
        <input v-if="!show" type="text" placeholder="Search" :value="searchQuery" @input="triggerChangeTextEvent" />
        <button id="button" type="button" v-on:click="triggerShow"><i>Button</i></button>
    </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "SearchBoxStore",
  watch: {
    searchQuery: function() {
      this.$store.state.result1 = Math.random();
      this.$store.state.result2 = Math.random();
      this.$store.state.result3 = Math.random();
    }
  },

  computed: {
    searchQuery() {
      return this.$store.state.searchQuery;
    },
    show() {
      return this.$store.state.show;
    }
  },
  methods: {
    triggerChangeTextEvent(event) {
      this.$store.commit("changeSearchQuery", event.target.value);
    },
    triggerShow(event) {
      event.preventDefault();
      this.$store.commit("changeShow", event.target.value);
    }
  },
  search() {
    this.$store.state.result1 = Math.random();
    this.$store.state.result2 = Math.random();
    this.$store.state.result3 = Math.random();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  font-size: 20px;
}
</style>
