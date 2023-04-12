import styled from "styled-components";
import starPhoto from "/public/icon-star.svg";

function Firstcard({ index, setindex, setshowrating }) {
  function handleClick() {
    if (index !== "") {
      setshowrating(true);
    }
  }
  return (
    <ParentDiv>
      <Star>
        <img className="starImage" src={starPhoto} alt="star" />
      </Star>
      <TextContainer>
        <h1 className="title">How did we do?</h1>
        <p className="description">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </TextContainer>
      <NumbDiv>
        <Numb
          onClick={() => {
            setindex("1");
          }}
        >
          <h1>1</h1>
        </Numb>
        <Numb
          onClick={() => {
            setindex("2");
          }}
        >
          <h1>2</h1>
        </Numb>
        <Numb
          onClick={() => {
            setindex("3");
          }}
        >
          <h1>3</h1>
        </Numb>
        <Numb
          onClick={() => {
            setindex("4");
          }}
        >
          <h1>4</h1>
        </Numb>
        <Numb
          onClick={() => {
            setindex("5");
          }}
        >
          <h1>5</h1>
        </Numb>
      </NumbDiv>
      <Button onClick={handleClick}>SUBMIT</Button>
    </ParentDiv>
  );
}

export default Firstcard;

const ParentDiv = styled.div`
  width: 327px;
  background: radial-gradient(98.96% 98.96% at 50% 0%, #232a34 0%, #181e27 100%),
    linear-gradient(0deg, #979797, #979797);
  border-radius: 15px;
  padding: 24px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 412px;
    padding: 32px 35px;
  }
`;

const Star = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: #262e38;
  display: flex;
  justify-content: center;
  align-items: center;

  .starImage {
    width: 14px;
    height: 13.3px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .title {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    text-align: left;
    color: white;
  }

  .description {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    color: #969fad;
  }

  @media screen and (min-width: 768px) {
    .title {
      font-size: 28px;
      line-height: 34.5px;
    }
    .description {
      font-size: 15px;
      line-height: 24px;
    }
  }
`;
// div where number buttons are
const NumbDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 8px 0;
`;

const Numb = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #262e38;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #7c8798;
  cursor: pointer;

  :focus {
    background: #7c8798;
    color: #ffffff;
  }
  :hover {
    background: #fc7614;
    color: #ffffff;
  }
  h1 {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
  }

  @media screen and (min-width: 768px) {
    width: 51px;
    height: 51px;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 45px;
  background: #fc7614;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  text-transform: uppercase;
  border-radius: 22.5px;
  cursor: pointer;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 1.87px;
  color: white;

  :hover {
    background-color: white;
    color: #fc7614;
  }

  @media screen and (min-width: 768px) {
    height: 51px;
    font-size: 15px;
    line-height: 19px;
    letter-spacing: 2px;
  }
`;
