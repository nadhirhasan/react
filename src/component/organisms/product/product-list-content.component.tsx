import styled from 'styled-components';
import { ProductCard, getCategoryById } from '@src/molecules';
import { theme } from '@src/constants';
import { Text } from '@src/component/atoms';
import { useNavigate, useParams } from 'react-router';
import { useCallback } from 'react';

const SWrapper = styled.div``;

const SProductsWrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 24px;
  margin-top: 32px;
`;

export const products = [
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
    id: '12',
    offer: 10,
    discount: 10500,
    image: theme.ovenImage,
    price: 9000,
    name: 'Microwave Oven 1000L',
    btn_name: 'View Details',
  },
  {
    id: '13',
    offer: 10,
    discount: 10500,
    image: theme.ovenImage,
    price: 9000,
    name: 'Microwave Oven 1000L',
    btn_name: 'View Details',
  },
  {
    id: '14',
    offer: 10,
    discount: 10500,
    image: theme.ovenImage,
    price: 9000,
    name: 'Microwave Oven 1000L',
    btn_name: 'View Details',
  },
  {
    id: '15',
    offer: 10,
    discount: 10500,
    image: theme.ovenImage,
    price: 9000,
    name: 'Microwave Oven 1000L',
    btn_name: 'View Details',
  },
  {
    id: '16',
    offer: 10,
    discount: 10500,
    image: theme.ovenImage,
    price: 9000,
    name: 'Microwave Oven 1000L',
    btn_name: 'View Details',
  },
  {
    id: '17',
    offer: 10,
    discount: 10500,
    image: theme.ovenImage,
    price: 9000,
    name: 'Microwave Oven 1000L',
    btn_name: 'View Details',
  },
  {
    id: '18',
    offer: 10,
    discount: 10500,
    image: theme.ovenImage,
    price: 9000,
    name: 'Microwave Oven 1000L',
    btn_name: 'View Details',
  },
  {
    id: '19',
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

  const navigate = useNavigate();
  const onClickHandler = useCallback(
    (id: string) => {
      navigate('/products/' + id);
    },
    [navigate]
  );

  return (
    <SWrapper>
      <Text.Heading>{category?.title}</Text.Heading>
      <Text.TextGray mt="8px">24 products</Text.TextGray>
      <SProductsWrapper>
        {products.map(
          ({ offer, discount, image, price, name, btn_name, id }) => {
            return (
              <div onClick={() => onClickHandler(id)}>
                <ProductCard
                  key={id}
                  offer={offer}
                  discount={discount}
                  image={image}
                  price={price}
                  name={name}
                  btn_name={btn_name}
                ></ProductCard>
              </div>
            );
          }
        )}
      </SProductsWrapper>
    </SWrapper>
  );
};
