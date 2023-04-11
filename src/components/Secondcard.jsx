import styled from "styled-components";
import thankImage from "/public/illustration-thank-you.svg";

const SecondCard = ({ index }) => {
  return (
    <ParentDiv>
      <img src={thankImage} alt="thank image" />
      <Rate>
        <p>You selected {index} out of 5</p>
      </Rate>
    </ParentDiv>
  );
};

const ParentDiv = styled.div`
  max-width: 412px;
  background: radial-gradient(98.96% 98.96% at 50% 0%, #232a34 0%, #181e27 100%),
    linear-gradient(0deg, #979797, #979797);
  border-radius: 15px;
  padding: 24px;
`;

const Rate = styled.div`
  height: 32px;
  width: 168px;
  border-radius: 22.5px;
  background: #262e38;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SecondCard;
