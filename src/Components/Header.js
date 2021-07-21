import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <a href='#'>
        <img src='/images/logo.svg' alt='' />
      </a>
      <Menu>
        <a href='#'>Model S</a>

        <a href='#'>Model X</a>

        <a href='#'>Model 3</a>

        <a href='#'>Model Y</a>
        <a href='#'>Solar Roof</a>
        <a href='#'>Solar Pannels</a>
      </Menu>

      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla account</a>
        <CustomMenu onClick={() => setOpen(true)} />
      </RightMenu>

      {open && (
        <BurgerNav>
          <CloseWrap>
            <CustomClose onClick={() => setOpen(false)} />
          </CloseWrap>
          <li>
            <a href='#'>Exiting Inventory </a>
          </li>
          <li>
            {" "}
            <a href='#'>Used Inventory </a>
          </li>
          <li>
            {" "}
            <a href='#'>Trade-in </a>
          </li>
          <li>
            {" "}
            <a href='#'> Cybertruck </a>
          </li>
          <li>
            {" "}
            <a href='#'> Roadaster </a>
          </li>
          <li>
            {" "}
            <a href='#'>SEMI</a>
          </li>
          <li>
            {" "}
            <a href='#'>charging </a>
          </li>
          <li>
            {" "}
            <a href='#'>poerwall </a>
          </li>
          <li>
            {" "}
            <a href='#'>utilities </a>
          </li>
          <li>
            {" "}
            <a href='#'>test drive </a>
          </li>
          <li>
            {" "}
            <a href='#'>Commercial energy </a>
          </li>
        </BurgerNav>
      )}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  min-height: 6rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  transition: all 0.3s ease-in;

  img {
    height: 1.8rem;
    width: 120%;
    margin-left: 2rem;

    @media (max-width: 400px) {
      height: 1.5rem;
      width: 90%;
      margin-left: -2rem;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 1rem;
    color: #393c41;
    flex-wrap: nowrap;
    transition: all 0.3s ease-in;
    padding: 1rem;
    border-radius: 1rem;

    @media (max-width: 1170px) {
      margin: 0 0.5rem;
    }

    @media (max-width: 400px) {
      font-weight: 600;
    }
    :hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 1130px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 0.5rem;
    color: #393c41;
    transition: all 0.3s ease-in;
    padding: 1rem;
    border-radius: 1rem;
    font-size: 1.5rem;
    :hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;
const CustomMenu = styled(MenuIcon)`
  font-size: 2rem !important;
  margin-right: 1rem;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 30rem;
  list-style: none;
  padding: 2rem;
  text-align: left;
  font-size: 1.7rem;
  transition: all 0.3s ease-in;

  li {
    padding: 2rem 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
    border-radius: 1rem;
    transition: all 0.3s ease-in;

    :hover {
      background-color: lightgray;
    }
    a {
      color: #393c41;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
`;
const CustomClose = styled(CloseIcon)`
  font-size: 4rem !important;
  cursor: pointer;
`;
const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
