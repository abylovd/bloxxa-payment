import Button from "../Button/Button";
import {
  ChoiceBankHeader,
  ChoiceBankCard,
  CardDot,
  ChoiceBankTitle,
} from "../ChoiceBankCard/ChoiceBank.style";

const ChoiceBank = () => {
  return (
    <div>
      <ChoiceBankHeader>
        <ChoiceBankTitle>choose your card</ChoiceBankTitle>
        <Button type={"AddCard"} />
      </ChoiceBankHeader>

      <ChoiceBankCard></ChoiceBankCard>
      <CardDot>
        <svg
          width="26"
          height="11"
          viewBox="0 0 26 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="5.05566" r="5" fill="#8D8D8D" fill-opacity="0.3" />
          <circle cx="21" cy="5.05566" r="5" fill="#8D8D8D" />
        </svg>
      </CardDot>
      <Button type={"black"} />
    </div>
  );
};
export default ChoiceBank;
