import React from "react";
import Navbar from "./Navbar";
import styled from 'styled-components'

const Container = styled.div`
padding: 0 5%;
`

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container>
         {children}
      </Container>
     
    </div>
  );
};

export default Layout;
