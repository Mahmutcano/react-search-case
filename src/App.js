import "./App.css";
import Home from "./pages/Home/Home";
import ListPage from "./pages/List/ListPage";
import Add from "./pages/Add/Add";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list-page" component={ListPage} />
          <Route path="/add-form" component={Add} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
