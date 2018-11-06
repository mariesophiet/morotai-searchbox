import algoliasearch from 'algoliasearch';
import { store } from '../store';

/* eslint-disable */
export function algolia() {
    console.log("algolia");
    var client = algoliasearch('2LU01OUKRN', '02914a952f251d62334d1019959ca2ba');
    var index = client.initIndex('6EuNqjHYcVKRWFky');
    console.log("algolia 2");

    index.search(
        {
            query: store.getters.query,
            attributesToRetrieve: ['title', 'type', 'objectID'],
            hitsPerPage: 10,
            typoTolerance: "true"
        },
        function searchDone(err, content) {
            console.log("searchDone");
            if (err) throw err;
            store.commit("MUTATE_ITEMS", content.hits);
        }
    )
}