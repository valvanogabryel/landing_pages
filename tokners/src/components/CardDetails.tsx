import number01 from "../assets/presaleDetails/01.svg";
import number02 from "../assets/presaleDetails/02.svg";
import number03 from "../assets/presaleDetails/03.svg";

import styled from "styled-components";

interface CardProps {
  img?: string;
  phase?: string;
}

interface IImages {
  number01: string;
  number02: string;
  number03: string;
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: var(--dark);
  height: 585px;
  width: 511px;
  min-width: 320px;
  border-radius: 25px;
  text-align: center;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: flex-start !important;
  flex-direction: column;
  height: 37rem;
  padding-top: 5rem;
`;

const NumberBackground = styled.span<CardProps>`
  background-image: ${(props) => (props.img ? `url(${props.img})` : "none")};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 200px;
  width: 330px;
  position: absolute;
  top: 70px;
  opacity: 0.8;
`;

const CardHeader = styled.header`
  margin-bottom: 4rem;

  h5 {
    font-size: 32px;
    font-weight: 700;
    line-height: 54px;
  }

  span {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    opacity: 0.8;
  }
`;

const CardContent = styled.main`
  opacity: 0.8;

  p {
    font-size: 20px;
    font-weight: 700;
  }

  div {
    display: flex;
    flex-direction: column;
    font-size: 16px;

    span {
      span {
        font-weight: 700;
      }
    }
  }
`;

export const CardDetail = ({ img, phase }: CardProps) => {
  const imageList: IImages = {
    number01: number01,
    number02: number02,
    number03: number03,
  };

  return (
    <StyledCard>
      <NumberBackground img={imageList[img as keyof IImages]} />

      <CardWrapper className="aq">
        <CardHeader>
          <h5>Fase {phase}</h5>
          <span>0/04/2021 - 16/04/2021</span>
        </CardHeader>
        <CardContent>
          <p>1 BNB = 100000 Tokners</p>
          <div>
            <span>
              Soft cap: <span>5000 BNB</span>
            </span>
            <span>
              Hard cap: <span>10000 BNB</span>
            </span>
          </div>
        </CardContent>
      </CardWrapper>
    </StyledCard>
  );
};
