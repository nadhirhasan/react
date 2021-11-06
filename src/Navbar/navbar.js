import classes from "./navbar.module.css";
import searchIcon from "./search_icon.png";
import styled from "styled-components";

const SHeader = styled.header`
  display: flex;
  align-items: baseline;
  background-color: rgba(0, 0, 0, 0.55);
  height: 60px;
  padding: 0;
  margin: 0;
  align-items: center;
`;

function Navbar() {
  return (
    <SHeader>
      <h1 className={classes.logo}>Ceyello</h1>
      <div className={classes.wrap}>
        <div className={classes.search}>
          <input
            type="text"
            className={classes.searchTerm}
            placeholder="Search for products"
          />
          <button type="submit" className={classes.searchButton}>
            <img src={searchIcon} alt="icon" className={classes.icon} />
          </button>
        </div>
      </div>
    </SHeader>
  );
}

export default Navbar;
