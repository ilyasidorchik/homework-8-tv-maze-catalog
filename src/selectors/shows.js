import { createSelector } from 'reselect';

export const getShow = createSelector(
    state => state.shows.show,
    (({ id, name, image, summary, _embedded }) => ({
        id,
        name,
        image: image && image.medium,
        summary,
        actors: _embedded
                && _embedded.cast.map(({ person: { id: personId, name, image },
                                         character: { id: characterId } }) => ({
            characterId,
            personId,
            name,
            image: image && image.medium
        }))
    }))
);

export const getIsLoading = (state) => state.shows.isLoading;

export const getError = (state) => state.shows.error;