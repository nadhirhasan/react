import styled from "styled-components";
import { CategoryCard } from "../../molecules/category-card/category-card.component";

const SCategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 16px;
`;

const categories = [
  {
    title: "Electricals",
  },
  {
    title: "Electronics",
    discount: 20,
  },
  {
    title: "Grocery",
    image:
      "https://st.depositphotos.com/1063437/2337/i/950/depositphotos_23373292-stock-photo-groceries-in-wicker-basket-including.jpg",
  },
  {
    title: "Cosmetics",
  },
  {
    title: "Baby",
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
