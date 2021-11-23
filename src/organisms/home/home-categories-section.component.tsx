import styled from 'styled-components';
import { CategoryCard } from '../../molecules/category-card/category-card.component';
import { theme } from '../../constants';
import { v4 } from 'uuid';

const SCategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 16px;
`;

export const categories = [
  {
    id: '10',
    title: 'Electronics and Electricals',
    discount: 70,
    image: theme.electronicsImage,
  },
  {
    id: '1',
    title: 'Grocery',
    discount: 70,
    image: theme.electronicsImage,
  },
  {
    id: '2',
    title: 'Clothing',
    discount: 70,
    image: theme.electronicsImage,
  },
  {
    id: '3',
    title: 'Baby Care',
    discount: 70,
    image: theme.electronicsImage,
  },
  {
    id: '4',
    title: 'House Care',
    discount: 70,
    image: theme.electronicsImage,
  },
  {
    id: '5',
    title: 'Cosmetics',
    discount: 70,
    image: theme.electronicsImage,
  },
];

export const HomeCategoriesSection = () => {
  return (
    <div>
      <h1>Shop by catergory</h1>
      <SCategoryWrapper>
        {categories.map(({ id, title, image, discount }) => (
          <CategoryCard
            id={id}
            key={id}
            title={title}
            image={image || ''}
            discount={discount}
          />
        ))}
      </SCategoryWrapper>
    </div>
  );
};
