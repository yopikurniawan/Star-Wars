const initState = {
    movies: [],
    movie: {},
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return {...state, movies: action.payload}
        case 'SET_MOVIE':
            return {...state, movies: action.payload}
        default:
            return state;
    }
}

export default reducer