import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource';
import { algolia } from '../src/components/algolia.js';

Vue.use(VueResource);
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        searchQuery: '',
        results: [],
        attachVisible: false
    },
    mutations: {
        changeSearchQuery(state, newSearchQuery) {
            state.searchQuery = newSearchQuery;
            console.log("changeSearchQuery: " + this.searchQuery);
            algolia();
        },
        MUTATE_ITEMS(state, results) {
            Vue.set(state, 'results', results)
        },
        changeVisibility(state) {
            state.attachVisible = !state.attachVisible;
        }
    },
    getters: {
        query: state => {
            return state.searchQuery;
        }
    },
    actions: {
        loadItems: (context, results) => {
            context.commit('MUTATE_ITEMS', results);
            console.log("loadItems:");
        }

    }

    /* actions: {
         submit() {
             this.$http.post('https://testproject-b1731.firebaseio.com/data.json', this.searchQuery)
                 .then(response => {
                     console.log(response)
                 }, error => {
                     console.log(error);
                 });
*/






    /*actions:{
        // API's can be called here and then accordingly can be passed for mutation
    },
    mutations: {
        changeStateOne(state, payload) {
            state.state1 += payload; // Received the payload from the action at the bottom
        },
        changeStateTwo(state, payload) {
            state.state2 += payload; // Received the payload from the action at the bottom.
        }
    }*/

});