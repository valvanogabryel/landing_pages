"use client";

import mailIcon from "public/images/icons/mail.svg";
import * as palette from "@/variables";
import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 391px 194px;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);

  button {
    font-family: var(--font-text);
    background-color: ${palette.COLOR_CASAVERDE_YELLOW};
    color: #fff;
    border: none;
    padding: 1.6875rem 1.4375rem 1.75rem 1.5rem;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background-color: ${palette.COLOR_CASAVERDE_YELLOW_HOVER};
    }

    &:focus {
      outline: none;
    }
  }
`;

const InputContainer = styled.div`
  position: relative;

  img {
    position: absolute;
    top: 50%;
    left: 1.0894rem;
    transform: translateY(-50%);
  }
`;

const NewsletterInput = styled.input`
  background: #fff;
  border: none;
  padding: 1.6875rem 1.4375rem 1.75rem 3.4375rem;
  width: 80%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    opacity: 0.3;
  }
`;

export function Form() {
  const [email, setEmail] = useState("");

  function handleNewsletterSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    alert(
      `Obrigado pela sua assinatura, em breve você receberá nossas novidades no e-mail [${email}]`
    );

    setEmail("");
  }

  return (
    <StyledForm onSubmit={handleNewsletterSubmit}>
      <InputContainer>
        <Image src={mailIcon} alt="" aria-hidden />
        <NewsletterInput
          type="email"
          placeholder="Insira seu e-mail"
          required
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
      </InputContainer>
      <button type="submit">Assinar newsletter </button>
    </StyledForm>
  );
}
