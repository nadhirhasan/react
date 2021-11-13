import styled from 'styled-components';
import { CategoriesHomeSection } from './categories-home-section.component';
import classes from './card.module.css';
import oven from './microwave.png';

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Card() {
  return (
    <SWrapper>
      <CategoriesHomeSection />
      <h1 className={classes.head}>Blockbuster offers!</h1>
      <section className={classes.card2_continer}>
        <div className={classes.card2}>
          <span className={classes.off_tag}>10% OFF</span>
          <img src={oven} alt="im" className={classes.image2} />
          <span className={classes.dis}>Rs.10500</span>
          <span className={classes.pri}>Rs.9000</span>
          <h4 className={classes.name}>Microwave Oven 1000L</h4>
          <button className={classes.btn}>View Details</button>
        </div>

        <div className={classes.card2}>
          <span className={classes.off_tag}>10% OFF</span>
          <img src={oven} alt="im" className={classes.image2} />
          <span className={classes.dis}>Rs.10500</span>
          <span className={classes.pri}>Rs.9000</span>
          <h4 className={classes.name}>Microwave Oven 1000L</h4>
          <button className={classes.btn}>View Details</button>
        </div>

        <div className={classes.card2}>
          <span className={classes.off_tag}>10% OFF</span>
          <img src={oven} alt="im" className={classes.image2} />
          <span className={classes.dis}>Rs.10500</span>
          <span className={classes.pri}>Rs.9000</span>
          <h4 className={classes.name}>Microwave Oven 1000L</h4>
          <button className={classes.btn}>View Details</button>
        </div>

        <div className={classes.card2}>
          <span className={classes.off_tag}>10% OFF</span>
          <img src={oven} alt="im" className={classes.image2} />
          <span className={classes.dis}>Rs.10500</span>
          <span className={classes.pri}>Rs.9000</span>
          <h4 className={classes.name}>Microwave Oven 1000L</h4>
          <button className={classes.btn}>View Details</button>
        </div>
      </section>
    </SWrapper>
  );
}

export default Card;
