import React from "react";
import styled from "styled-components";

export const PlanCardMain = styled.div`
  display: flex;
  justify-content: space-between;
  row-gap: 21px;
  height: 360px;
`;

export const PlanCardBlock = styled.div`
  background: #eaebe7;
  border-radius: 15px;
  padding: 5px;
  position: relative;
`;

export const PlanText = styled.div``;

export const PlanHeader = styled.div`
  position: relative;
  z-index: 1;
`;

export const PLanSubheader = styled.h1`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #f2f3ed;
  padding: 5px 10px;
  z-index: 1;
`;
export const PlanBackground = styled.img`
  width: 100%;
  position: relative;
  z-index: -1;
`;

export const ActiveSpan = styled.span`
  position: absolute;
  bottom: 10px;
  left: 22px;
  display: block;
  font-family: "Random Grotesque Standard Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: #55b830;
  &::before {
    content: "";
    position: absolute;
    bottom: 3px;
    left: -12px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #55b830;
  }
`;

export const PlanPrice = styled.p`
  margin: 0;
  padding-top: 30px;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  text-transform: uppercase;
  color: #0e0e0e;
  & span {
    font-size: 12px;
  }
`;

export const PlanOldPrice = styled.p`
  position: relative;
  margin: 0;
  padding-top: 3px;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-transform: uppercase;
  color: #ef0f0f;
  text-align: center;
  & span {
    font-size: 10px;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 9px;
    width: 79.81px;
    height: 0px;
    border: 1px solid #ef0f0f;
    transform: rotate(-174.97deg);
  }
`;
export const PlanAdvantages = styled.ul`
  font-family: "Random Grotesque Standard Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 119.17%;
  color: #0e0e0e;
  margin: 0;
  padding-top: 18px;
  margin-bottom: 64px;
  & li {
    margin-top: 10px;
  }
`;

export const DataActivation = styled.small`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  font-family: "Random Grotesque Standard Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  color: #8d8d8d;
  text-align: center;
`;

export const PlanTitle = styled.h1`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  text-transform: uppercase;
  margin: 0;
  padding-bottom: 40px;
  color: #0e0e0e;
`;
