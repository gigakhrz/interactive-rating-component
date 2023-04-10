import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Container from "./components/Conatainer";

function App() {
  return (
    <Background>
      <Container />
    </Background>
  );
}

export default App;

const Background = styled.main`
  background-color: #131518;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;
