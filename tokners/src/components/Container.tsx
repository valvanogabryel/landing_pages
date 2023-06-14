import styled from "styled-components";

export const Container = styled.section`
  max-width: 85%;
  margin: auto;
  position: relative;

  @media (max-width: 1600px) {
    max-width: 95%;
  }
`;

export const OuterContainer = styled(Container)`
  max-width: 100%;
`;
