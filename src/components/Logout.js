import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

function Logout() {
  const { logout, isAuthenticated } = useAuth0();
  return isAuthenticated && <Button onClick={() => logout()}>Log Out</Button>;
}

export default Logout;

const Button = styled.button`
  width: 20%;
  padding: 10px;
`;
