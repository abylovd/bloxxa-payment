import Button from "../Button/Button";
import { PayCard } from "./Payment.style";
import CreditCard from "../CreditCard/CreditCard";
import { SaveCard } from "../Payment/Payment.style";
import { PaymentDetails, PaymentTitle } from "../Payment/Payment.style";
import Form from "../Form/Form";

const Payment = ({ setStatus }) => {
  return (
    <div>
      <PaymentTitle>Select a new plan</PaymentTitle>
      <Form setStatus={setStatus} />
    </div>
  );
};
export default Payment;
