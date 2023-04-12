import styled from "styled-components";
import thankImage from "/public/illustration-thank-you.svg";

const SecondCard = ({ index }) => {
  return (
    <ParentDiv>
      <img src={thankImage} alt="thank image" />
      <Rate>
        <p>You selected {index} out of 5</p>
      </Rate>
      <Thank>
        <h3>Thank you</h3>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </Thank>
    </ParentDiv>
  );
};

const ParentDiv = styled.div`
  width: 327px;
  background: radial-gradient(98.96% 98.96% at 50% 0%, #232a34 0%, #181e27 100%),
    linear-gradient(0deg, #979797, #979797);
  border-radius: 15px;
  padding: 36px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  @media screen and (min-width: 768px) {
    width: 412px;
    padding: 45px 35px;
  }
`;

const Rate = styled.div`
  height: 32px;
  width: 168px;
  border-radius: 22.5px;
  background: #262e38;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #fc7614;
  }

  @media screen and (min-width: 768px) {
    width: 193px;
    p {
      font-size: 15px;
      line-height: 24px;
    }
  }
`;

const Thank = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 17px;
  align-items: center;

  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 30.3px;
    color: white;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #969fad;
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    gap:7px'
    h3 {
      font-size: 28px;
      line-height: 34.5px;
    }

    p {
      font-size: 15px;
      line-height: 24px;
    }
  }
`;

export default SecondCard;
