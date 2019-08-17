import { createSelector } from 'reselect';

export const getSeries = createSelector(
    state => state.search.series,
    (series) => series.map(({ id, name, image, summary }) => ({
        id,
        name,
        image: image && image.medium,
        summary
    }))
);

export const getIsLoading = (state) => state.search.isLoading;

export const getError = (state) => state.search.error;