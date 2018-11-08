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
        }
    }
});