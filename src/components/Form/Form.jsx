/* import { PaymentForm, PaymentInput } from "./Form.style";
import Button from "../Button/Button"; */

import React, { useRef, useState } from "react";
import CreditCard from "../CreditCard/CreditCard";
import { Formik } from "formik";
import { Form, FormCard, Hello, PaymentInput } from "../Form/Form.style";
import { PaymentDetails } from "../Payment/Payment.style";
import * as yup from "yup";
import Button from "../Button/Button";

const CardForm = ({ setStatus }) => {
  const [element, setElement] = useState();
  const [number, setNumber] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const cvvInput = useRef();
  const handleTransition = (cardInner, numberItem) => {
    setElement(cardInner);
    setNumber(numberItem);
  };
  const turnFront = () => {
    element.current.classList.remove("cardInnerTransform");
  };
  const turnBack = () => {
    element.current.classList.add("cardInnerTransform");
  };

  const getSchema = () =>
    yup.object().shape({
      cardNumber: yup.string().min(16, "not less than 16"),
      cardHolder: yup.string().required(),
      cardMonth: yup.string().required(),
    });

  return (
    <Hello>
      <Formik
        initialValues={{
          cardNumber: "",
          cardHolder: "",
          cardMonth: "",
          cardYear: "",
          cvv: "",
        }}
        onSubmit={(values, formikBag) => {
          alert(JSON.stringify(values, null, 2));
          formikBag.resetForm();
        }}
        validationSchema={getSchema()}
      >
        {(props) => (
          <FormCard onSubmit={props.handleSubmit}>
            <CreditCard
              values={props.values}
              handleTransition={handleTransition}
            />
            <from className="form">
              <PaymentDetails>Payment Details</PaymentDetails>
              <Form>
                <PaymentInput
                  placeholder="Card number"
                  className="CardNumber"
                  type="text"
                  onChange={props.handleChange}
                  onClick={turnFront}
                  onBlur={props.handleBlur}
                  value={props.values.cardNumber
                    .replace(/\s/g, "")
                    .replace(/(\d{4})/g, "$1 ")
                    .trim()}
                  name="cardNumber"
                  maxLength="19"
                  onKeyDown={(e) => {
                    console.log(e.which);
                    if (e.which !== "#")
                      number.current.classList.add("numberTransform");
                  }}
                />

                <PaymentInput
                  placeholder="CVV"
                  type={showPassword ? "text" : "password"}
                  ref={cvvInput}
                  onClick={turnBack}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.cvv}
                  maxLength="3"
                  name="cvv"
                />
                <i onClick={() => setShowPassword(!showPassword)}>
                  <svg
                    width="22"
                    height="19"
                    viewBox="0 0 22 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6154 6.92296C9.91157 6.92296 9.23655 7.1661 8.73886 7.59887C8.24117 8.03165 7.96157 8.61862 7.96157 9.23066C7.96157 9.84269 8.24117 10.4297 8.73886 10.8624C9.23655 11.2952 9.91157 11.5383 10.6154 11.5383C11.3193 11.5383 11.9943 11.2952 12.492 10.8624C12.9897 10.4297 13.2693 9.84269 13.2693 9.23066C13.2693 8.61862 12.9897 8.03165 12.492 7.59887C11.9943 7.1661 11.3193 6.92296 10.6154 6.92296ZM10.6154 13.0768C9.44234 13.0768 8.31731 12.6716 7.48782 11.9503C6.65834 11.229 6.19234 10.2507 6.19234 9.23066C6.19234 8.21059 6.65834 7.23231 7.48782 6.51102C8.31731 5.78972 9.44234 5.3845 10.6154 5.3845C11.7885 5.3845 12.9135 5.78972 13.743 6.51102C14.5725 7.23231 15.0385 8.21059 15.0385 9.23066C15.0385 10.2507 14.5725 11.229 13.743 11.9503C12.9135 12.6716 11.7885 13.0768 10.6154 13.0768ZM10.6154 3.46143C6.19234 3.46143 2.41503 5.85373 0.884644 9.23066C2.41503 12.6076 6.19234 14.9999 10.6154 14.9999C15.0385 14.9999 18.8158 12.6076 20.3462 9.23066C18.8158 5.85373 15.0385 3.46143 10.6154 3.46143Z"
                      fill="#8D8D8D"
                      fill-opacity="0.3"
                    />
                  </svg>
                </i>

                <PaymentInput
                  placeholder="Cardholder name"
                  className="CardHolder"
                  type="text"
                  onChange={props.handleChange}
                  onClick={turnFront}
                  onBlur={props.handleBlur}
                  value={props.values.cardHolder}
                  name="cardHolder"
                  maxLength="25"
                />

                <PaymentInput
                  type="text"
                  onChange={props.handleChange}
                  onClick={turnFront}
                  onBlur={props.handleBlur}
                  value={props.values.cardMonth
                    .replace(/[^0-9]/g, "")
                    .replace(/^([2-9])$/g, "0$1")
                    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
                    .replace(/^0{1}/g, "0")
                    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2")}
                  placeholder="Month"
                  name="cardMonth"
                  maxLength={5}
                />

                {props.errors.name && (
                  <div id="feedback">{props.errors.name}</div>
                )}
                <Button
                  onClick={() => {
                    setStatus("error");
                  }}
                  type={"black"}
                  disabled={!props.isValid}
                />
              </Form>
            </from>
          </FormCard>
        )}
      </Formik>
    </Hello>
  );
};

export default CardForm;

/* const Form = () => {
  return (
    <PaymentForm>
      <PaymentInput
        className="Card_Number"
        placeholder="Card number"
        type="text"
      />

      <PaymentInput
        className="CVV"
        id="CVV"
        placeholder="CVV"
        type="password"
        minlength="8"
      />

      <PaymentInput
        className="Cardholder"
        placeholder="Cardholder name "
        type="text"
      />
      <PaymentInput className="MM_YY" placeholder="MM/YY" type="text" />
      <Button type={"black"} />
    </PaymentForm>
  );
}; */
