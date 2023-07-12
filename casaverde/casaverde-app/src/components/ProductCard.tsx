"use client";

import IProducts from "@/interface/IProducts";
import { Link } from "./Link";
import { Title } from "./Title";
import Image from "next/image";
import { styled } from "styled-components";

const StyledCard = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #fff;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);
  width: 379px;
  height: 200px;
`;

const ImageWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6875rem 3.375rem;
  gap: 0.5rem;

  span {
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
        <Image
          src={product.image}
          alt=""
          width={100}
          height={100}
          quality={100}
        />
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
