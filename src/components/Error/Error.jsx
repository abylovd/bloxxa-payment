import React from "react";
import Button from "../Button/Button";
import { ErrorText } from "./Error.style";
import { ErrorSubheader } from "./Error.style";
import { ErrorTitle } from "./Error.style";
import { ErrorBtn } from "./Error.style";

const Error = ({ setStatus }) => {
  return (
    <ErrorText>
      <ErrorTitle>Payment Failed</ErrorTitle>
      <ErrorSubheader>
        The payment was unsuccessful due to an abnormality. <br /> Please try
        again later or use another payment method.
      </ErrorSubheader>
      <ErrorBtn>
        <Button type={"ErrorTransparent"} />
        <Button
          onClick={() => {
            setStatus("successfull");
          }}
          type={"ErrorBlack"}
        />
      </ErrorBtn>
    </ErrorText>
  );
};

export default Error;
