import React, { Fragment, useRef, useEffect } from "react";
import {
  MainCard,
  MainCardText,
  CardNumber,
  BankCard,
  CardHolder,
  CardHolderName,
  CardMonthYears,
  NumberSeparator,
  Card,
} from "../CreditCard/CreditCard.styled";
import { SaveCard } from "../Payment/Payment.style";
import _ from "lodash";

export const CreditCard = ({ values, handleTransition }) => {
  const cardInner = useRef();
  const numberItem = useRef();
  const { cardNumber, cardHolder, cardMonth, cvv } = values;
  useEffect(() => {
    handleTransition(cardInner, numberItem);
  }, [handleTransition]);

  const trimmedCardNumber = [...cardNumber].filter((d) => d !== " ");
  const newArray = new Array(16 - trimmedCardNumber.length).fill("*");
  const cardNumero = _.chunk([...trimmedCardNumber, ...newArray], 4);

  return (
    <Card className="card">
      <SaveCard>
        {" "}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="12" fill="#55B830" />
          <path d="M6 13L10.5 17L17 7" stroke="#F2F3ED" />
        </svg>
        Save card
      </SaveCard>
      <div className="cardInner" ref={cardInner}>
        <BankCard>
          <MainCard>
            <MainCardText>Main Card</MainCardText>

            <svg
              width="55"
              height="19"
              viewBox="0 0 55 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.2314 17.7171H19.8392L22.5843 0.741801H26.977L24.2314 17.7171ZM16.1441 0.741801L11.9568 12.4175L11.4613 9.9033L11.4617 9.90421L9.98379 2.27023C9.98379 2.27023 9.80508 0.741801 7.90026 0.741801H0.977714L0.896484 1.02923C0.896484 1.02923 3.01341 1.47241 5.4909 2.96951L9.30688 17.7175H13.8832L20.8712 0.741801H16.1441ZM50.6914 17.7171H54.7244L51.2081 0.741347H47.6773C46.0469 0.741347 45.6498 2.00641 45.6498 2.00641L39.0991 17.7171H43.6777L44.5933 15.1956H50.177L50.6914 17.7171ZM45.8583 11.7124L48.1661 5.35979L49.4644 11.7124H45.8583ZM39.4425 4.82397L40.0693 1.17862C40.0693 1.17862 38.1352 0.438477 36.1189 0.438477C33.9392 0.438477 28.7631 1.39704 28.7631 6.05816C28.7631 10.4437 34.8382 10.4981 34.8382 12.8017C34.8382 15.1052 29.389 14.6925 27.5907 13.2399L26.9377 17.0514C26.9377 17.0514 28.8989 18.01 31.8954 18.01C34.8928 18.01 39.4145 16.4484 39.4145 12.1982C39.4145 7.78457 33.2849 7.37363 33.2849 5.45469C33.2853 3.5353 37.5629 3.78186 39.4425 4.82397Z"
                fill="#0E0E0E"
              />
              <path
                d="M11.4617 9.90362L9.98379 2.26964C9.98379 2.26964 9.80509 0.741211 7.90026 0.741211H0.977714L0.896484 1.02864C0.896484 1.02864 4.22373 1.72247 7.41514 4.32208C10.4667 6.8068 11.4617 9.90362 11.4617 9.90362Z"
                fill="#0E0E0E"
              />
            </svg>
          </MainCard>

          <CardNumber>
            {[...cardNumero].map((n, index) => (
              <Fragment>
                {n.map((s, i) => (
                  <div key={s + i} className="numberItem" ref={numberItem}>
                    {s.trim()}
                  </div>
                ))}
                <NumberSeparator key={n + index} />
              </Fragment>
            ))}
          </CardNumber>

          <CardHolder>
            <CardHolderName>{cardHolder || "Cardholder Name"} </CardHolderName>
            <CardMonthYears>
              <span>{cardMonth || "XX/XX"}</span>
            </CardMonthYears>
          </CardHolder>
        </BankCard>
        <div className="cardBack">
          <div className="band" />
          <div className="cvv">
            <div className="cvvLabel">CVV</div>
            <div className="cvvField">{cvv}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CreditCard;
