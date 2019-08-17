// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.

import {
    showRequest,
    showSuccess,
    showFailure
} from '../actions/shows.js';

export const showMiddleware = store => next => action => {
    if (action.type === showRequest.toString()) {
        fetch(`http://api.tvmaze.com/shows/${action.payload}?embed=cast`, {
            method: 'GET',
            mode: 'cors'
        })
            .then(response => response.json())
            .then(data => {
                store.dispatch(showSuccess(data))
            })
            .catch(error => {
                store.dispatch(showFailure(error))
            });
    }

    return next(action);
};