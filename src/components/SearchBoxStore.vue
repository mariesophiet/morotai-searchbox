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
/*import { TweenMax } from "gsap";
import { TweenLite } from "gsap"
//import $ from "jquery";
import 'gsap/CSSPlugin';*/

/* eslint-disable */

export default {
  name: "SearchBoxStore",
  data: function() {
    return {
      attachVisible: false
    };
  },
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

      //this.$store.commit("changeShow", event.target.value);
    },
    search() {
      this.$store.state.result1 = Math.random();
      this.$store.state.result2 = Math.random();
      this.$store.state.result3 = Math.random();
    }
  }
};

/*var left = new TimelineMax();
left.from($("#input"), 2, { width: 0 }, 1).from($("#input"), 2, { left: 400 }, 1);*/

// animation of input-box
/*TweenLite.defaultEase = Power0.easeNone;
TweenMax.set(".mask", {transformOrigin:"100% 50%"});
TweenMax.from(".mask2", 2.2, {width:"0px", ease:Power0.easeNone, repeat:-1, repeatDelay:2});*/
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
