import styled from 'styled-components';
import { ProductCard } from '@src/molecules';
import { theme } from '@src/constants';

const SBlockWrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 16px;
`;

const SH1 = styled.h1`
  margin-left: 0px;
`;

const categories = [
  {
    id: '11',
    offer: 10,
    discount: 10500,
    image: theme.ovenImage,
    price: 9000,
    name: 'Microwave Oven 1000L',
    btn_name: 'View Details',
  },
  {
    offer: 10,
    discount: 10500,
    image: theme.ovenImage,
    price: 9000,
    name: 'Microwave Oven 1000L',
    btn_name: 'View Details',
  },
  {
    offer: 10,
    discount: 10500,
    image: theme.ovenImage,
    price: 9000,
    name: 'Microwave Oven 1000L',
    btn_name: 'View Details',
  },
  {
    offer: 10,
    discount: 10500,
    image: theme.ovenImage,
    price: 9000,
    name: 'Microwave Oven 1000L',
    btn_name: 'View Details',
  },
];

export const HomeProductsSlider = () => {
  return (
    <div>
      <SH1>Blockbuster offers!</SH1>
      <SBlockWrapper>
        {categories.map(({ offer, discount, image, price, name, btn_name }) => (
          <ProductCard
            offer={offer}
            discount={discount}
            image={image}
            price={price}
            name={name}
            btn_name={btn_name}
          />
        ))}
      </SBlockWrapper>
    </div>
  );
};
