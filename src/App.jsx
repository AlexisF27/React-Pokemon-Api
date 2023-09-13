import "./App.css";
import PokemonDetail from "./detail/PokemonDetail";
import Launcher from "./launcher/Launcher";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <div className="nav-bar">
          NavBar
        </div>
        <div className="comtent">
          <Switch>
            <Route exact path="/">
              <Launcher/>
            </Route>
            <Route path="/pokemon/:name">
              <PokemonDetail/>
            </Route>

          </Switch>
        </div>
      </div>
      
    </Router>
  );
}

export default App;
