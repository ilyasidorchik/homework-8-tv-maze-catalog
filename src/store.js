import { createStore, compose, applyMiddleware } from 'redux';
import { searchMiddleware } from './middlewares/searchMiddleware';
import { showMiddleware } from './middlewares/showMiddleware';
import rootReducer from './reducers';

const getStore = () => {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(searchMiddleware),
            applyMiddleware(showMiddleware)
        )
    );

    return store;
};

export default getStore;