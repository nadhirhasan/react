import styled from 'styled-components';
import { BlockBusterCard } from '../../molecules/blockbuster-card/blockbuster-card.component';
import { theme } from '../../constants';

const SBlockWrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 36px;
  
`;

const SH1 = styled.h1`
margin-left:0px;
`



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
];

export const BlockBusterHomeSection = () => {
  return (
    <div>
      <SH1>Blockbuster offers!</SH1>
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
