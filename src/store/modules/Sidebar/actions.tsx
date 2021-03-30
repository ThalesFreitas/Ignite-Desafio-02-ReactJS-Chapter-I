
export function addGenre(genre_id: number){
    return {
        type: 'ADD_GENRE',
        payload: {
            genre_id,
        }
    };
}

