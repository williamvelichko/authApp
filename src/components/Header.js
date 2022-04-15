import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <div>
        <h1>Persona</h1>
      </div>
      <Login />
      <Logout />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: grey;
`;
