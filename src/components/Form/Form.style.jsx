import React from "react";
import styled from "styled-components";

export const PaymentForm = styled.div`
  display: grid;
  grid-template-columns: 322px 109px;
  grid-column-gap: 9px;
  grid-row-gap: 18px;
  grid-template-areas:
    "Card_Number CVV"
    "Cardholder MM_YY"
    "Button Button";
  margin-right: 146px;
`;
export const Hello = styled.div`
  display: grid;
  grid-template-columns: 351px 440px;
  grid-column-gap: 28px;
`;

export const PaymentInput = styled.input`
  background: #eaebe7;
  border: 0.882212px solid rgba(141, 141, 141, 0.3);
  border-radius: 7.05769px;
  font-family: "Random Grotesque Standard Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  outline: none;
  padding: 0 12.5px;
  height: 40px;
  ::-ms-reveal {
    display: none;
  }
  &[type="password"] {
    color: gray;
    font-family: Verdana;
  }
`;
export const FormCard = styled.div`
  display: grid;
  grid-template-columns: 351px 440px;
  grid-column-gap: 28px;
  margin-bottom: 96px;
`;

export const Form = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 322px 109px;
  row-gap: 16px;
  column-gap: 9px;
  grid-template-areas:
    "CardNumber CVV"
    "CardHolder MonthYears"
    "Button Button";

  i {
    position: absolute;
    right: 20px;
    top: 13px;
    width: 21px;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  .CardNumber {
    grid-area: CardNumber;
  }
  .FormTitle {
    font-family: "Helvetica";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    color: #0e0e0e;
  }

  .CVV {
    grid-area: CVV;
  }

  .CardHolder {
    grid-area: CardHolder;
  }
  .CardButton {
    grid-area: CardButton;
  }

  .row {
    display: flex;
    flex-flow: row wrap;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
