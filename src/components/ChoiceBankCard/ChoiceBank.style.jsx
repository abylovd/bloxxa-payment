import React from "react";
import styled from "styled-components";

export const ChoiceBankHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChoiceBankCard = styled.div`
  margin-top: 58px;
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 0.5fr;
  column-gap: 15px;
  align-items: center;
`;
export const CardDot = styled.div`
  margin-bottom: 60px;
`;

export const ChoiceBankTitle = styled.h2`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  text-transform: uppercase;
  color: #0e0e0e;
  margin: 0;
`;
