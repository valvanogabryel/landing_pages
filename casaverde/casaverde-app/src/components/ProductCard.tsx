"use client";

import IProducts from "@/interface/IProducts";
import { Link } from "./Link";
import { Title } from "./Title";
import { styled } from "styled-components";

const StyledCard = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  background-color: #fff;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);
  width: 380px;
  height: 200px;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  img {
    width: 220px;
    height: 100%;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6875rem 3.375rem 1.6875rem 0;
  gap: 0.5rem;

  span {
    font-weight: bold;
    opacity: 0.5;
  }

  a {
    margin-top: 1.5rem;
  }
`;

export function ProductCard({ product }: { product: IProducts }) {
  return (
    <StyledCard>
      <ImageWrapper>
        <img src={product.image} alt="" />
      </ImageWrapper>
      <CardContent>
        <Title heading="h4" styles="font-size: 2rem;">
          {product.name}
        </Title>
        <span>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <Link hasIcon color="yellow">
          Comprar
        </Link>
      </CardContent>
    </StyledCard>
  );
}
