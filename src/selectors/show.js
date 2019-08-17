import { createSelector } from 'reselect';

export const getShow = createSelector(
    state => state.show,
    (show) => show.map(({ name, image: { original }, summary, _embedded: { cast } }) => ({
        name,
        image: original,
        summary,
        persons: cast.map(({ person: { name }, person: { image: { original } } }) => ({
            name, original
        }))
    }))
);

export const getIsLoading = (state) => state.isLoading;

export const getError = (state) => state.error;