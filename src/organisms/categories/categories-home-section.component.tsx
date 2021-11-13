import styled from "styled-components";
import { CategoryCard } from "../../molecules/category-card/category-card.component";
import { theme } from "../../constants";

const SCategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 16px;
`;

const categories = [
  {
    title: "Electronics and Electricals",
    discount: 70,
    image: theme.electronicsImage
  },
  {
    title: "Electronics and Electricals",
    discount: 70,
    image:theme.electronicsImage
  },
  {
    title: "Electronics and Electricals",
    discount: 70,
    image:theme.electronicsImage
  },
  {
    title: "Electronics and Electricals",
    discount: 70,
    image:theme.electronicsImage
  },
  {
    title: "Electronics and Electricals",
    discount: 70,
    image:theme.electronicsImage
  },
  {
    title: "Electronics and Electricals",
    discount: 70,
    image:theme.electronicsImage
  },
];

export const CategoriesHomeSection = () => {
  return (
    <div>
      <h1>Shop by catergory</h1>
      <SCategoryWrapper>
        {categories.map(({ title, image, discount }) => (
          <CategoryCard title={title} image={image || ""} discount={discount} />
        ))}
      </SCategoryWrapper>
    </div>
  );
};
