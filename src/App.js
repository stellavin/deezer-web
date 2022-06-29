import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages";
import ArtistPage from "./pages/artistView";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/artist:id">
          <ArtistPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
