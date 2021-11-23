import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from './molecules';
import { ProductList, ProductDetails } from './pages';
import { Home } from './pages';

const SContent = styled.div`
  margin-top: 108px;
`;

export const App = () => {
  return (
    <Router>
      <Navbar />
      <SContent>
        <Switch>
          <Route path="/" caseSensitive element={<Home />} />
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
      </SContent>
    </Router>
  );
};
