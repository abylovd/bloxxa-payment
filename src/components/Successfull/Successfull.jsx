import React from "react";
import {
  PaymentSuccessfull,
  PaymentSuccessfulText,
  PaymentSuccessfullSubheader,
  SuccessfullTitle,
  SuccessfullAnswer,
  SuccessfullBtn,
} from "./Successfull.style";

import Button from "../Button/Button";

const Successfull = ({ setStatus }) => {
  return (
    <PaymentSuccessfull>
      <PaymentSuccessfullSubheader>
        Payment Successfull
      </PaymentSuccessfullSubheader>
      <PaymentSuccessfulText>
        <SuccessfullTitle>
          <p>Payment Type</p>
          <p>Time</p>
          <p>Transaction ID</p>
          <p>Amount Paid</p>
        </SuccessfullTitle>
        <SuccessfullAnswer>
          <p>Upgrade to Build Plan</p>
          <p>23.01.2023 13:45 GMT</p>
          <p>1902409385023-12051</p>
          <p>$59.00</p>
        </SuccessfullAnswer>
      </PaymentSuccessfulText>
      <SuccessfullBtn>
        <Button type={"SuccessfullTransparent"} />
        <Button
          onClick={() => {
            setStatus("choiceBank");
          }}
          type={"SuccessfullBlack"}
        />
      </SuccessfullBtn>
    </PaymentSuccessfull>
  );
};
export default Successfull;
