import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Navbar from "./Navbar/navbar";
import Card from "./1stcard/card";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact caseSensitive element={<Card />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
