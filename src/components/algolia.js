import algoliasearch from 'algoliasearch';
import { store } from '../store';

export function algolia() {
    var client = algoliasearch('2LU01OUKRN', '02914a952f251d62334d1019959ca2ba');
    var index = client.initIndex('6EuNqjHYcVKRWFky');

    index.search(
        {
            query: store.getters.query,
            attributesToRetrieve: ['title', 'type', 'objectID'],
            hitsPerPage: 10,
            typoTolerance: "true",
        },
        function searchDone(err, content) {
            if (err) throw err;
            store.commit("MUTATE_ITEMS", content.hits);
        }
    )
}