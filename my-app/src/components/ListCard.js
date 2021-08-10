// import { useSelector} from 'react-redux'
// import { useEffect} from 'react'
import {useRouteMatch, useHistory} from 'react-router-dom'

export default function ListCard ({ movie }) {
  const {path} = useRouteMatch()
  const history = useHistory()

  const goDetail= (e) => {
    e.preventDefault()
    history.push('/character/detail/' + 1)
  }
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> {movie.name} </h5>
          <p className="card-text mt-2">Birth year {movie.birth_year} </p>
          <p className="card-text mt-2">Eye color {movie.eye_color} </p>
          <div className="d-flex justify-content-center">
            {path === '/' && <button className="btn mx-3" style={{ backgroundColor: 'blue'}} onClick={goDetail}> See more </button> }
          </div>
        </div>
      </div>
    </div>
  )
}