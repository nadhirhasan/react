import styled from "styled-components";
import classes from "./card.module.css";
import CategoryCard from "./category-card.component";
import image from "./image.png";
import oven from "./microwave.png";

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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

function Card() {
  return (
    <SWrapper>
      <div>
        <h1>Shop by catergory</h1>
        <SCategoryWrapper>
          {categories.map(({ title, image }) => (
            <CategoryCard title={title} image={image} />
          ))}
        </SCategoryWrapper>
      </div>
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
