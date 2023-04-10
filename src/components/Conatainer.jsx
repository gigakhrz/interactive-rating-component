import styled from "styled-components";

function Container() {
  return (
    <ParentDiv>
      <Star>
        <img
          className="starImage"
          src="interactive-rating-component-main (1)/images/icon-star.svg"
          alt="star"
        />
      </Star>
      <TextContainer>
        <h1 className="title">How did we do?</h1>
        <p className="description">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </TextContainer>
    </ParentDiv>
  );
}

export default Container;

const ParentDiv = styled.div`
  width: 100%;
  height: 360px;
  background: radial-gradient(98.96% 98.96% at 50% 0%, #232a34 0%, #181e27 100%),
    linear-gradient(0deg, #979797, #979797);
  border-radius: 15px;
  padding: 24px;
`;

const Star = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: #262e38;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

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
`;
