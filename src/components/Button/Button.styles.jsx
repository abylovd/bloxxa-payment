import React from "react";
import styled from "styled-components";

export const SwitchPlan = styled.button`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 193px;
  bottom: 10px;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  text-align: center;
  text-transform: uppercase;
  color: #0e0e0e;
  border: 1px solid #8d8d8d;
  border-radius: 6px;
  padding: 14px 46px;

  &:hover {
    color: #f2f3ed;
    background: #0e0e0e;
    border-radius: 6px;
  }
  &:hover svg path {
    fill: #f2f3ed;
  }
`;

export const ActiveBtn = styled.button`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 193px;
  bottom: 30px;
  background: #5835fe;
  border-radius: 6px;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  text-align: center;
  text-transform: uppercase;
  color: #f2f3ed;
  border: none;
  padding: 14px 46px;
`;

export const PaymentBtn = styled.button`
  width: 440px;
  margin-top: 9px;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #f2f3ed;
  background: #0e0e0e;
  border-radius: 8px;
  padding: 12px;
  border: none;
  grid-area: Button;
  &:hover {
    padding: 12px;
    background: #5835fe;
    border: none;
  }
`;

export const ErrorBtnBlack = styled.button`
  background: #0e0e0e;
  border-radius: 8px;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #f2f3ed;
  padding: 12px 47px;
  border: none;
  margin-left: 16px;

  &:hover {
    background: #5835fe;
  }
`;

export const ErrorBtnTransparent = styled.button`
  border: 1px solid rgba(141, 141, 141, 0.3);
  border-radius: 8px;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #8d8d8d;
  padding: 12px 50.5px;
`;

export const SuccessfullCheck = styled.button`
  padding: 12px 46px;
  border: 1px solid rgba(141, 141, 141, 0.3);
  border-radius: 8px;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #8d8d8d;
  margin-right: 16px;
`;

export const SeccessfullDone = styled.button`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #f2f3ed;
  padding: 12px 57px;
  background: #0e0e0e;
  border-radius: 8px;
`;

export const ChoiceAdd = styled.button`
  padding: 10.5px 21.5px;
  border: 1px solid #8d8d8d;
  border-radius: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #0e0e0e;
`;
