import { ProductlistContent } from '../../organisms';
import styled from 'styled-components';
import { CategoriesSidebar } from '../../molecules';
import { Navbar } from '../../molecules/navbar/navbar.component';
import { useNavigate, useParams } from 'react-router';
const SWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 44px;
`;

export const ProductList = () => {
  const navigate = useNavigate();

  const { id } = useParams();

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
