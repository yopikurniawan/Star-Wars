import {useHistory} from 'react-router-dom'

export default function Navbar () {
  const history = useHistory()
  const goHome = (e) => {
    e.preventDefault()
    history.push('/')
  }
 
  return (
    <div className="sticky-top mb-2">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button className="btn navbar-brand" onClick={goHome}>Movies</button>
          <div className="d-flex justify-content-end">
            <button className="btn" onClick={goHome}> Home </button>
          </div>
        </div>
      </nav>
    </div>
  )
}