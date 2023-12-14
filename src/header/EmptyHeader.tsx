import { styled } from "styled-components";
import React, { ChangeEvent, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate, Link } from "react-router-dom";

export default function EmptyHeader() {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();
  const handleClickSearchBtn = () => {
    setShowInput((prev) => !prev);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  return (
    <Container>
      <Row>
        <Icon $onMoblie>
          <GiHamburgerMenu />
        </Icon>

        <Title onClick={() => navigate("/")}>React Shop</Title>
        <Link to="/fashion">
          <Categoty $onMobile>패션</Categoty>
        </Link>
        <Link to="/accessory">
          <Categoty $onMobile>액세서리</Categoty>
        </Link>
        <Link to="/digital">
          <Categoty $onMobile>디지털</Categoty>
        </Link>
      </Row>

      <Row>
        <Icon>
          <CiLight />
        </Icon>
        <Icon $onMoblie onClick={handleClickSearchBtn}>
          <CiSearch />
        </Icon>
        <Input
          value={inputValue}
          onChange={handleInputChange}
          $showInput={showInput}
          placeholder="검색"
        />

        <Icon>
          <CiShoppingCart />
        </Icon>
      </Row>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 64px;
  padding: 8px 20px;
  background-color: ${(p) => p.theme.colors.headerColor};

  color: ${(p) => p.theme.colors.textColor.brighter};
  transition: all 0.3s;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;
  z-index: 99;

  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.22);

  @media screen and (max-width: 767px) {
    display: flex;
  }
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media screen and (max-width: 767px) {
    display: flex;
    white-space: nowrap;
  }
`;
const Title = styled.h2`
  font-size: 1.3rem;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
`;
const Categoty = styled.span<{ $onMobile: boolean }>`
  font-size: 0.9rem;
  color: ${(p) => p.theme.colors.textColor.brighter};
  padding: 7px 5px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${(p) => p.theme.colors.cardBgColor};
  }
  @media screen and (max-width: 767px) {
    font-size: 0.7rem;
    display: ${(p) => (!p.$onMobile ? "flex" : "none")};
  }
`;
const Icon = styled.button<{ $onMoblie?: boolean }>`
  cursor: pointer;
  background-color: inherit;
  border: none;
  color: ${(p) => p.theme.colors.textColor.brighter};
  font-size: 1.5rem;
  display: ${(p) => (p.$onMoblie ? "none" : "block")};

  @media screen and (max-width: 767px) {
    display: ${(p) => p.$onMoblie && "block"};
  }
`;
const Input = styled.input<{ $showInput: boolean }>`
  background-color: ${(p) => p.theme.colors.inputColor};
  border: none;
  outline: none;
  border-radius: 8px;
  width: 230px;
  height: 48px;
  padding: 0 20px;
  caret-color: ${(p) => p.theme.colors.textColor.brighter};
  color: ${(p) => p.theme.colors.textColor.brighter};
  &::placeholder {
    color: ${(p) => p.theme.colors.textColor.brighter};
    font-size: 0.8rem;
  }

  @media screen and (max-width: 767px) {
    position: absolute;
    width: 100vw;
    top: 70px;
    left: 0;
    border-radius: 0;
    display: ${(p) => (p.$showInput ? "block" : "none")};
    &::placeholder {
      color: ${(p) => p.theme.colors.textColor.brighter};
      font-size: 0.8rem;
    }
  }
`;
// const Nav = styled.nav<{ $showSidebar: boolean }>`
//   display: ${(p) => (p.$showSidebar ? "flex" : "none")};
//   flex-direction: column;
//   gap: 10px;
//   padding: 15px;
//   background-color: tomato;
//   border-radius: 5px;

//   position: absolute;
//   top: 70px;
//   left: 0;

//   z-index: 10;
// `;
// const Items = styled.span`
//   color: black;
//   padding: 10px 15px;
//   transition: background-color 0.3s;
// `;

/* <Nav $showSidebar={showSidebar}>
  <Items>menu1</Items>
  <Items>menu2</Items>
  <Items>menu3</Items>
</Nav>; */

//   const [showSidebar, setShowSidebar] = useState(false);
//   const handleClickSidebar = () => setShowSidebar((prev) => !prev);
