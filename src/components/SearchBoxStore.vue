<template>
    <div class="search-box">
        
        <form  v-on:submit.prevent></form>
        
        <div class="content">
        <input class="input" id="input" :class="{visible: attachVisible}" type="text" placeholder="Search" :value="searchQuery" 
               @input="triggerChangeTextEvent" @keyup.enter="search"/>
        </div>
        <button id="button" type="button" v-on:click="attachVisible = !attachVisible"><i>Button</i></button>
    </div>
</template>

<script>
/* eslint-disable */
import _ from 'lodash'

export default {
  name: "SearchBoxStore",
  data: function() {
    return {
      attachVisible: false,
      change: ''
    };
  },
  computed: {
    searchQuery() {
      return this.$store.state.searchQuery;
    }
  },
  methods: {
    triggerChangeTextEvent(event) {
      this.change = event.target.value;
      this.debouncedGetAnswer();
      

      //this.$store.commit("changeSearchQuery", event.target.value);
    },
    triggerShow(event) {
      event.preventDefault();

      //this.$store.commit("changeShow", event.target.value);
    },
    search() {
      this.$store.commit("changeSearchQuery", this.change);
    }
  },
  created: function() {
    this.debouncedGetAnswer = _.debounce(this.search, 1000);
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  font-size: 20px;
}
.search-box {
  overflow: auto;
  display: inline-flex;
}
.content .input {
  right: 0;
  position: absolute;
}
.content {
  position: relative;
  width: 212px;
  margin-right: 5px;
}
#button {
  float: right;
  height: 50px;
  width: 50px;
}
.input {
  visibility: hidden;
  display: inline;
  left: 0;
}
#input {
  width: auto;
  position: absolute;
}
@keyframes reducetime {
  0% {
    width: 0%;
    left: 100%;
  }
  100% {
    width: 100%;
    left: 0%;
  }
}
.visible {
  visibility: visible;
  animation-name: reducetime;
  animation-duration: 1s;
}
</style>
