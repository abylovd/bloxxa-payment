import {
  PlanCardBlock,
  PlanHeader,
  PlanText,
  PLanSubheader,
  PlanBackground,
  ActiveSpan,
  PlanPrice,
  PlanOldPrice,
  PlanAdvantages,
  DataActivation,
} from "./Plan.styled";
import Button from "../Button/Button";

const PlanCard = ({
  planPrice,
  planOldPrice,
  planAdvantages,
  pLanSubheaderTitle,
  planBackground,
  isActive,
  hasNoOldPrice,
  dataActivation,
  setStatus,
}) => {
  return (
    <PlanCardBlock>
      <PlanHeader style={{ background: planBackground }}>
        <PLanSubheader>{pLanSubheaderTitle}</PLanSubheader>
        {isActive && <ActiveSpan>Active</ActiveSpan>}
        <PlanBackground src={planBackground} alt="" />
      </PlanHeader>
      <div className="Plan_content">
        <PlanText>
          <PlanPrice>
            {planPrice} / <span>month</span>
          </PlanPrice>
          {!hasNoOldPrice && (
            <PlanOldPrice>
              {planOldPrice}/ <span>month</span>
            </PlanOldPrice>
          )}
        </PlanText>
        <PlanAdvantages>
          {planAdvantages.map((item) => (
            <li> {item} </li>
          ))}
        </PlanAdvantages>
      </div>
      <Button
        onClick={() => {
          setStatus("payment");
        }}
        type={isActive ? "blue" : "transparent"}
      >
        {isActive ? "learn more" : "switch"}
      </Button>
      <DataActivation>{dataActivation}</DataActivation>
    </PlanCardBlock>
  );
};

export default PlanCard;
