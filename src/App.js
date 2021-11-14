import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from 'react-router-dom';
import './App.css';
import { ProductList, ProductDetails } from './pages';
import Home from './pages/home/home.component';
import React from 'react';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact caseSensitive element={<Home />} />
          <Route
            path="products/:id"
            caseSensitive
            element={<ProductDetails />}
          />
          <Route
            path="categories/:id"
            caseSensitive
            element={<ProductList />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
