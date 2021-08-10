import {useDispatch, useSelector} from 'react-redux'
import React, {useState, useEffect} from 'react'
import {fetchMovies} from '../store/actions/movieActions'
import ListCard from '../components/ListCard'

export default function Home () {
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  const movies = useSelector(state => state.moviesReducer.movies)
  
  useEffect(() => {
    console.log('---fetchnya jalan---')
    dispatch(fetchMovies())
  }, [dispatch])

  useEffect(() => {
    setData(movies)
  }, [movies])
  return (
    <div className="container">
      {/* {JSON.stringify(data, null, 2)} */}
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {data.map(movie => <ListCard key={movie.id} movie={movie}></ListCard> )}
      </div>
    </div>
  )
}