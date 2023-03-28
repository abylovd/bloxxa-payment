import React from "react";
import styled from "styled-components";
export const BankCard = styled.div`
  width: 100%;
  background: radial-gradient(
      254.38% 97.62% at -21.3% 13.61%,
      #d8ec84 0%,
      #b8d53d 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  position: absolute;
`;

export const MainCard = styled.div`
  padding: 24px 24px 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const MainCardText = styled.div`
  font-family: "Random Grotesque Standard Semibold";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  color: #0e0e0e;
  margin-bottom: 64px;
`;

export const CardNumber = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: row;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  color: #0e0e0e;
`;

export const CardHolder = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px 24px 24px;
`;

export const CardHolderName = styled.div`
  font-family: "Random Grotesque Standard Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #0e0e0e;
`;

export const CardMonthYears = styled.div`
  font-family: "Random Grotesque Standard Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  color: #0e0e0e;
`;
export const Card = styled.div`
  perspective: 1000px;
  width: 100%;
  .CardTitle {
    display: flex;
    align-items: center;
    svg {
      padding-right: 10px;
    }
  }

  .cardInnerTransform {
    transform: rotateY(180deg);
  }
  .cardInner {
    border-radius: 15px;
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    .cardBack {
      position: absolute;
      border-radius: 15px;
      padding: 24px;
      width: 304px;
      height: 140px;
      backface-visibility: hidden;
      background: radial-gradient(
        254.38% 97.62% at -21.3% 13.61%,
        #d8ec84 0%,
        #b8d53d 100%
      );
      transform: rotateY(180deg);

      .band {
        height: 25px;
        background-color: black;
      }
      .cvv {
        margin-top: 25px;
      }
      .cvvLabel {
        text-align: right;
      }
      .cvvField {
        width: 100%;
        height: 25px;
        border-radius: 5px;
        background-color: white;
        margin-right: 20px;
      }
    }
  }
`;

export const NumberSeparator = styled.div`
  margin: 0 5px;
`;
