import { useState } from "react";
import styled from "styled-components";
import Firstcard from "./components/Firstcard";
import SecondCard from "./components/Secondcard";

function App() {
  const [showrating, setshowrating] = useState(false);
  const [index, setindex] = useState("");
  return (
    <MainContainer>
      {showrating ? (
        <SecondCard index={index} />
      ) : (
        <Firstcard
          setshowrating={setshowrating}
          index={index}
          setindex={setindex}
        />
      )}
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.main`
  background-color: #131518;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;
