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
        result1: '',
        result2: '',
        result3: ''
    },
    mutations: {
        changeSearchQuery(state, newSearchQuery) {
            state.searchQuery = newSearchQuery;
            //store.dispatch('debounced');
            state.result1 = Math.random();
            algolia();
        },
        changeResult1(state) {
            state.result1 = Math.random();
        },
        /* changeResults(state, array[]) {
             state.results = array;
         },*/
        MUTATE_ITEMS(state, results) {
            Vue.set(state, 'results', results)
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