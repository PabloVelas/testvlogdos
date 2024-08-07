import React from "react";
import Button from "components/Button/Button";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Heading = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
  text-align: center;

  @media (min-width: 800px) {
    font-size: 35px;
  }
`;

const Paragraph = styled.p`
  max-width: 500px;
  text-align: center;
  margin-bottom: 30px;
`;

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Heading>Nie znaleziono strony!</Heading>
      <Paragraph>
        Wygląda na to, że strona, którą chcesz odwiedzić nie istnieje bądź
        została usunięta. Przeprszam za utrudnienia.
      </Paragraph>
      <a href="./">
        <Button>Przejdz do strony głównej</Button>
      </a>
    </Wrapper>
  );
};

export default NotFoundPage;
