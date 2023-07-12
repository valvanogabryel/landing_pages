"use client";

import FetchProducts from "@/hooks/FetchProducts";
import { Title } from "./Title";

import { ProductCard } from "./ProductCard";
import { styled } from "styled-components";

const ProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.75rem;
  height: 824px;
`;

const SectionHeader = styled.header`
  text-align: center;
  margin-bottom: 0.25rem;

  h4 {
    font-size: 1.375rem;
    opacity: 0.5;
  }
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-items: center;
  gap: 1.875rem;
  margin-top: 1.63rem;
`;

export function ProductOffers() {
  const { products } = FetchProducts();

  return (
    <ProductsContainer>
      <SectionHeader>
        <h4>Conheça nossas</h4>
        <Title heading="h2" styles="font-size: 5.125rem;">
          ofertas
        </Title>
      </SectionHeader>
      <Grid>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Grid>
    </ProductsContainer>
  );
}
