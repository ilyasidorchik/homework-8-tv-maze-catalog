// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.

import {
    showRequest,
    showSuccess,
    showFailure
} from '../actions/shows';
import { show } from '../api';

export const showMiddleware = store => next => action => {
    if (action.type === showRequest.toString()) {
        show(action.payload)
            .then(data => {
                store.dispatch(showSuccess(data))
            })
            .catch(error => {
                store.dispatch(showFailure(error))
            });
    }

    next(action);
};