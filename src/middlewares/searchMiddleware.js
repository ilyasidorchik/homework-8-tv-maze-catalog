// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.

import {
    searchRequest,
    searchSuccess,
    searchFailure
} from '../actions/search';

export const searchMiddleware = store => next => action => {
    if (action.type === searchRequest.toString()) {
        fetch(`http://api.tvmaze.com/search/shows?q=${action.payload}`, {
            method: 'GET',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(shows => shows.map(show => show.show))
            .then(data => {
                store.dispatch(searchSuccess(data))
            })
            .catch(error => {
                store.dispatch(searchFailure(error))
            });
    }

    next(action);
};