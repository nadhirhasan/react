import './App.css';
import { BrowserRouter as Router ,Switch ,Route } from 'react-router-dom';
import Navbar from './Navbar/navbar';
import Card from './1stcard/card';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path = "/" exact = {true}>
            {Card}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
