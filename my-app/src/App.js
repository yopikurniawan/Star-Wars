// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import CharacterDetail from './pages/CharacterDetail'
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/character/detail/:id">
          <CharacterDetail></CharacterDetail>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
