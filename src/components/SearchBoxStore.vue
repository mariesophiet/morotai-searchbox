<template>
    <div class="search-box">
        <div class="content">
        <input class="input" id="input" :class="{visible: attachVisible}" type="text" placeholder="Search" :value="searchQuery" 
               @input="triggerChangeTextEvent" @keyup.enter="search"/>
        </div>
        <button id="button" type="button" v-on:click="visibility"><img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png" alt="icon"/></button>
        <button id="delete" type="button" v-on:click="visibility" v-if="attachVisible"><img src="https://image.flaticon.com/icons/svg/458/458594.svg"/></button>
    </div>
</template>

<script>
/* eslint-disable */
import _ from "lodash";

export default {
  name: "SearchBoxStore",
  data: function() {
    return {
      change: ""
    };
  },
  computed: {
    searchQuery() {
      return this.$store.state.searchQuery;
    },
    searchQueryEntered() {
      if (this.$store.state.searchQuery.length > 0) return true;
    },

    attachVisible() {
      return this.$store.state.attachVisible;
    }
  },
  methods: {
    triggerChangeTextEvent(event) {
      console.log("triggerChangeTextEvent: " + event.target.value);
      this.change = event.target.value;
      this.debouncedGetAnswer();

      //this.$store.commit("changeSearchQuery", event.target.value);
    },
    triggerShow(event) {
      event.preventDefault();

      //this.$store.commit("changeShow", event.target.value);
    },
    search() {
      console.log("search:" + this.change);
      this.$store.commit("changeSearchQuery", this.change);
    },
    visibility() {
      this.$store.commit("changeVisibility");
    }
  },
  created: function() {
    this.debouncedGetAnswer = _.debounce(this.search, 1000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  font-size: 20px;
  width: inherit;
  position: absolute;
}
#input.input.visible {
  width: inherit;
}
.search-box {
  /*overflow: auto;*/
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
button {
  float: right;
  height: 35px;
  width: 35px;
  border: none;
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
img {
  height: 20px;
  width: 20px;
}
</style>
