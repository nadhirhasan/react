import styled from 'styled-components';
import { ProductCard, getCategoryById } from '../../molecules';
import { theme } from '../../constants';
import { Text } from '@src/atoms';
import { useParams } from 'react-router';

const SWrapper = styled.div``;

const SProductsWrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 24px;
  margin-top: 32px;
`;

const products = [
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

export const ProductlistContent = () => {
  const { id } = useParams();

  const category = getCategoryById(id);

  return (
    <SWrapper>
      <Text.Heading>{category?.title}</Text.Heading>
      <Text.TextGray mt="8px">24 products</Text.TextGray>
      <SProductsWrapper>
        {products.map(({ offer, discount, image, price, name, btn_name }) => (
          <ProductCard
            offer={offer}
            discount={discount}
            image={image}
            price={price}
            name={name}
            btn_name={btn_name}
          />
        ))}
      </SProductsWrapper>
    </SWrapper>
  );
};
