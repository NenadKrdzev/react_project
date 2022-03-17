import NavBar from './NavBar';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Create from './Create';
import RecipeDetails from './RecipeDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div className="content">
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/recipes/:id">
          <RecipeDetails />
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
