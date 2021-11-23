import styled from 'styled-components';
import { HomeProductsSlider } from '../../organisms';
import { HomeCategoriesSection } from '../../organisms/home/home-categories-section.component';
const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Home = () => {
  return (
    <>
      <SWrapper>
        <HomeCategoriesSection />
      </SWrapper>
      <SWrapper>
        <HomeProductsSlider />
      </SWrapper>
    </>
  );
};
