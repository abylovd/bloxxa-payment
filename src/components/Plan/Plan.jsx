import React from "react";
import { PlanCardMain, PlanTitle } from "../Plan/Plan.styled";
import PlanCard from "../Plan/PlanCard";
import corebackground from "../../img/Card_1.svg";
import developerbackground from "../../img/Card_2.svg";
import teambackground from "../../img/Card_3.svg";
import growthbackground from "../../img/card_4.svg";

const Plan = ({ setStatus }) => {
  return (
    <div>
      <PlanTitle>Select a new plan</PlanTitle>
      <PlanCardMain>
        <PlanCard
          planBackground={corebackground}
          pLanSubheaderTitle="Core"
          planPrice="FREE"
          isActive
          hasNoOldPrice
          planAdvantages={["5 million requests/1 month"]}
          dataActivation="Ends in 13 Feb, 2023"
          setStatus={setStatus}
        />

        <PlanCard
          planBackground={developerbackground}
          pLanSubheaderTitle=" Developer"
          planPrice="19.5$"
          planOldPrice="$39"
          planAdvantages={[
            "30 million requests/1 month",
            "Direct Customer Support",
          ]}
          setStatus={setStatus}
        />

        <PlanCard
          planBackground={teambackground}
          pLanSubheaderTitle="Team"
          planPrice="$99.5 "
          planOldPrice="$199"
          planAdvantages={[
            "30 million requests/1 month",
            "Direct Customer Support",
          ]}
          setStatus={setStatus}
        />

        <PlanCard
          planBackground={growthbackground}
          pLanSubheaderTitle="Growth"
          planPrice="$249.5"
          planOldPrice="$499"
          planAdvantages={[
            "30 million requests/1 month",
            "Direct Customer Support",
          ]}
          setStatus={setStatus}
        />
      </PlanCardMain>
    </div>
  );
};

export default Plan;
