import Successfull from "../Successfull/Successfull";
import ChoiceBank from "../ChoiceBankCard/ChoiceBank";
import Plan from "../Plan/Plan";
import Payment from "../Payment/Payment";
import Error from "../Error/Error";

import { useState } from "react";

const PaymentStatus = () => {
  const [status, setStatus] = useState("plan");
  switch (status) {
    case "plan":
      return <Plan setStatus={setStatus} />;
    case "payment":
      return <Payment setStatus={setStatus} />;
    case "error":
      return <Error setStatus={setStatus} />;
    case "successfull":
      return <Successfull setStatus={setStatus} />;
    case "choiceBank":
      return <ChoiceBank />;
    default:
      return <div></div>;
  }
};

export default PaymentStatus;
