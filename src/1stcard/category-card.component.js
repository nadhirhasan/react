import React from "react";
import styled from "styled-components";
import { theme } from "../constants";
import image from "./image.png";
import { ReactComponent as RightChevron } from "../assets/icons/right-chevron-orange.icon.svg";

const Swrapper = styled.div`
  display: flex;
  width: 320px;
  border: 1px solid ${theme.mainColor};
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.mainColor}10;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
`;

const SImage = styled.img`
  width: 130px;
  height: 83px;
`;

const SUl = styled.ul`
  list-style: none;
`;

const SOffText = styled.li`
  color: ${theme.greenColor};
  font-weight: 700;
`;

const CategoryCard = (props) => {
  console.log(props);
  return (
    <Swrapper>
      <SImage src={props.image || image} alt="category-image" />
      <SUl>
        <SOffText>70% OFF</SOffText>
        <li style={{ fontWeight: "bold" }}>{props.title}</li>
      </SUl>
      <RightChevron />
    </Swrapper>
  );
};

export default CategoryCard;
