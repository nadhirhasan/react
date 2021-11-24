import styled from 'styled-components';
import { HomeProductsSlider } from '@src/component/organisms';
import { HomeCategoriesSection } from '@src/component/organisms';
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
