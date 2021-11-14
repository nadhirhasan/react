import styled from 'styled-components';
import { BlockBusterHomeSection } from '../../organisms/blockbuster-categories/home-blockbuster-section';
import { CategoriesHomeSection } from '../../organisms/categories/categories-home-section.component';
import { Navbar } from '../../molecules/navbar/navbar.component';
const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Home() {
  return (
    <>
      <Navbar />
      <SWrapper>
        <CategoriesHomeSection />
      </SWrapper>
      <SWrapper>
        <BlockBusterHomeSection />
      </SWrapper>
    </>
  );
}

export default Home;
