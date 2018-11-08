<template>
    <div class="search-box">
      <form class="wrapper" v-on:submit.prevent autocomplete="off">
        <button id="delete" type="button" v-on:click="visible" v-if="attachVisible"></button>
        <div class="content">
          <input class="input" id="input" :class="{visible: attachVisible}" type="text" placeholder="Search" :value="searchQuery" 
               @input="triggerChangeTextEvent" @keyup.enter="search"/>
        </div>
      </form>
      <button id="button" type="button" v-on:click="visibility"><img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png" alt="icon"/></button>
    </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "SearchBox",
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
      this.change = event.target.value;
      this.debouncedGetAnswer();
    },
    triggerShow(event) {
      event.preventDefault();
    },
    search() {
      this.$store.commit("changeSearchQuery", this.change);
    },
    visibility() {
      this.$store.commit("changeVisibility");
      if (this.$store.state.attachVisible) {
        this.search();
      } else {
        this.$store.commit("changeVisibility");
      }
    },
    visible() {
      this.$store.commit("changeVisibility");
    }
  },
  created: function() {
    this.debouncedGetAnswer = _.debounce(this.search, 1000);
  }
};
</script>

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
  background: transparent;
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
.wrapper button {
  overflow: visible;
}
#delete {
  z-index: 1;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 15px;
  top: 4px;
  background-image: url(https://image.flaticon.com/icons/svg/458/458594.svg);
}
.wrapper {
  position: relative;
}
</style>
