import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Button onClick={() => loginWithRedirect()}>Log In</Button>
    )
  );
}

export default Login;

const Button = styled.button`
  width: 20%;
  padding: 10px;
`;
