import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        searchQuery: '',
        show: false,
        result1: '',
        result2: '',
        result3: ''
    },
    mutations: {
        changeSearchQuery(state, newSearchQuery) {
            state.searchQuery = newSearchQuery;
        },
        changeShow(state) {
            state.show = !state.show;
        }
    }
    /*actions:{
        // API's can be called here and then accordingly can be passed for mutation
    },
    mutations: {
        changeStateOne(state, payload) {
            state.state1 += payload; // Recieved the payload from the action at the bottom
        },
        changeStateTwo(state, payload) {
            state.state2 += payload; // Recieved the payload from the action at the bottom.
        }
    }*/
})