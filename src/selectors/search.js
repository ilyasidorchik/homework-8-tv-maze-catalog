import { createSelector } from 'reselect';

export const getSeries = createSelector(
    state => state.series,
    (series) => series.map(({ id, name, image: { original }, summary }) => ({
        id,
        name,
        image: original,
        summary
    }))
);

export const getIsLoading = (state) => state.isLoading;

export const getError = (state) => state.error;