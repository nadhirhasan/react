import styled from 'styled-components';
import { BlockBusterCard } from '../../molecules';
import { theme } from '../../constants';

const SBlockWrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 36px;
`;

const SH1 = styled.div`
  margin-left: 0px;
  font-size: 38px;
  font-weight: 700;
`;

const SLighGrayText = styled.div`
  color: rgb(158, 157, 157);
  font-size: 14px;
`;

const Categories = [
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

export const MiniBlockBuster = () => {
  return (
    <div>
      <SH1>Electronics</SH1>
      <SLighGrayText>24 products</SLighGrayText>
      <SBlockWrapper>
        {Categories.map(({ offer, discount, image, price, name, btn_name }) => (
          <BlockBusterCard
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
