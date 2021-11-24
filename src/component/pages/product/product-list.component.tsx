import { ProductlistContent } from '../../organisms';
import styled from 'styled-components';
import { CategoriesSidebar } from '@src/molecules';
import { useNavigate, useParams } from 'react-router';
import { products } from '@src/component/organisms/product';

const SWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 44px;
`;

export const getProductById = (id: string | undefined) => {
  return products.find((product) => product.id === id);
};

export const ProductList = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const product = getProductById(id);

  if (!id) {
    navigate('/');
    return null;
  }
  return (
    <SWrapper>
      <CategoriesSidebar />
      <ProductlistContent />
    </SWrapper>
  );
};
