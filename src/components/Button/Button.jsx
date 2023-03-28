import React from "react";
import {
  SwitchPlan,
  ActiveBtn,
  PaymentBtn,
  ErrorBtnTransparent,
  ErrorBtnBlack,
  SuccessfullCheck,
  SeccessfullDone,
  ChoiceAdd,
} from "../Button/Button.styles";
import {} from "../Button/Button.styles";

const Button = ({ type, children, onClick }) => {
  switch (type) {
    case "transparent":
      return (
        <SwitchPlan onClick={onClick}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6186 9.25116C10.5181 9.25116 10.4511 9.25116 10.3889 9.25116C7.1544 9.25116 3.91988 9.25116 0.685356 9.25116C0.556167 9.25116 0.422193 9.25116 0.302573 9.19119C0.0824722 9.07982 -0.0275779 8.88279 0.00591568 8.65148C0.0394092 8.45016 0.216447 8.28311 0.450902 8.24028C0.527458 8.22743 0.604015 8.22314 0.680572 8.22314C4.17826 8.22314 7.67594 8.22314 11.1736 8.22314C11.8052 8.22314 12.1114 8.57867 11.9631 9.13123C11.8579 9.53815 11.5851 9.85512 11.2789 10.1507C10.6712 10.7375 10.0253 11.2858 9.39368 11.8469C9.15444 12.0568 8.80037 12.0482 8.57548 11.8383C8.36017 11.637 8.36017 11.3243 8.59462 11.1187C9.12095 10.6433 9.65206 10.1721 10.1832 9.70092C10.3267 9.56385 10.4703 9.43106 10.6186 9.25116Z"
              fill="#0E0E0E"
            />
            <path
              d="M1.36962 2.74459C1.48924 2.74459 1.55144 2.74459 1.61364 2.74459C4.79553 2.74459 7.97743 2.74459 11.1593 2.74459C11.255 2.74459 11.3555 2.7403 11.4464 2.76172C11.6952 2.8174 11.8627 3.03157 11.8579 3.26716C11.8531 3.49418 11.6856 3.6955 11.4368 3.7469C11.3507 3.76403 11.2598 3.7726 11.1689 3.7726C7.73818 3.7726 4.3027 3.7726 0.871999 3.7726C0.206912 3.7726 -0.118455 3.37853 0.058583 2.80455C0.178203 2.42333 0.436582 2.11493 0.738025 1.83651C1.35526 1.26681 1.98207 0.709973 2.61367 0.153131C2.84812 -0.0524716 3.19741 -0.0481881 3.41751 0.148848C3.64718 0.350168 3.65197 0.662855 3.41273 0.881308C2.89597 1.3482 2.36964 1.81081 1.85288 2.27769C1.69977 2.41476 1.55623 2.56468 1.36962 2.74459Z"
              fill="#0E0E0E"
            />
          </svg>{" "}
          {children}
        </SwitchPlan>
      );
    case "blue":
      return <ActiveBtn onClick={onClick}> {children}</ActiveBtn>;
    case "black":
      return <PaymentBtn onClick={onClick}> Confirm and Pay $19.5 </PaymentBtn>;
    case "ErrorTransparent":
      return <ErrorBtnTransparent>Cancel</ErrorBtnTransparent>;
    case "ErrorBlack":
      return <ErrorBtnBlack onClick={onClick}> Try again</ErrorBtnBlack>;
    case "SuccessfullTransparent":
      return <SuccessfullCheck>E-check</SuccessfullCheck>;
    case "SuccessfullBlack":
      return <SeccessfullDone onClick={onClick}>Done</SeccessfullDone>;
    case "AddCard":
      return <ChoiceAdd>Add New Card</ChoiceAdd>;
    default:
      return;
  }
};

export default Button;
