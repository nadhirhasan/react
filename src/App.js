import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from 'react-router-dom';
import HomeTamplate from './tamplates/home-tamplate/home-tamplate.tamplates';
import { ProductDetailTamplate } from './tamplates/product-detail-tamplate';
import { ElectronicsProducts } from './tamplates/electronics-products-tamplate/electronics-products-tamplate.tamplates';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact caseSensitive element={<HomeTamplate />} />
          <Route path="product-detail" caseSensitive element={<ProductDetailTamplate />} />
          <Route path="electronics-products" caseSensitive element={<ElectronicsProducts />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
