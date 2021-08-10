export function fetchMovies () {
    return (dispatch, getState) => {
      fetch('https://swapi.dev/api/people')
        .then(res => res.json())
        .then(data => {
          dispatch({ type: 'SET_MOVIES', payload: data.results})
        })
        .catch(err => {console.log(err)})
    }
  }

export function getMovieById (id) {
  return (dispatch, getState) => {
    fetch('https://swapi.dev/api/people/' + id)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'SET_MOVIE', payload: data })
      })
      .catch(err => {console.log(err)})
  }
}