import React from "react";
import { Icon } from "@iconify/react";
import houseIcon from "@iconify/icons-bi/house";
import moneyBillAlt from "@iconify/icons-fa-regular/money-bill-alt";
import folderOutlined from '@iconify/icons-ant-design/folder-outlined';
import startEventSignal from '@iconify/icons-bpmn/start-event-signal';
import moneybagIcon from '@iconify/icons-whh/moneybag';
import planeSolid from '@iconify/icons-la/plane-solid';
import travelTrain from '@iconify/icons-zondicons/travel-train';
import torsoBusiness from '@iconify/icons-foundation/torso-business';
import supportIcon from '@iconify/icons-simple-line-icons/support';
import healthCross from '@iconify/icons-carbon/health-cross';
import educationIcon from '@iconify/icons-carbon/education';
import outlineNaturePeople from '@iconify/icons-ic/outline-nature-people';
import factoryLine from '@iconify/icons-clarity/factory-line'
import moneyWithWings from '@iconify/icons-emojione-monotone/money-with-wings';
import roundWifi from '@iconify/icons-ic/round-wifi';
import performingArts from '@iconify/icons-emojione-monotone/performing-arts';
import peopleTeam from '@iconify/icons-ps/people-team';
import pictureOutlineBadged from '@iconify/icons-clarity/picture-outline-badged';

export default function Score(props) {
    let score = "N/A";
    if (props.score > 0){
        score = props.score
    };

  return (

    //<div className="col-md-3">
      <div className="stati bg-turquoise left">
        <span>
                {(() => {
                  switch (props.name) {
                    case "Housing":
                      return <Icon icon={houseIcon} width="3.5rem"/>;
                      case "Cost of Living":
                          return <Icon icon={moneyBillAlt} width="3.5rem"/>;
                      case "Startups":
                          return <Icon icon={startEventSignal} width="3.5rem"/>;
                      case "Venture Capital":
                          return <Icon icon={moneybagIcon} width="3.5rem"/>;
                      case "Travel Connectivity":
                          return <Icon icon={planeSolid} width="3.5rem"/>;
                      case "Commute":
                          return <Icon icon={travelTrain} width="3.5rem"/>;
                      case "Business Freedom":
                          return <Icon icon={torsoBusiness} width="3.5rem"/>;
                      case "Safety":
                          return <Icon icon={supportIcon} width="3.5rem"/>;
                      case "Healthcare":
                          return <Icon icon={healthCross} width="3.5rem"/>;
                      case "Education":
                          return <Icon icon={educationIcon} width="3.5rem"/>;
                      case "Environmental Quality":
                          return <Icon icon={outlineNaturePeople} width="3.5rem"/>;
                      case "Economy":
                          return <Icon icon={factoryLine} width="3.5rem"/>;
                      case "Taxation":
                          return <Icon icon={moneyWithWings} width="3.5rem"/>;
                      case "Internet Access":
                          return <Icon icon={roundWifi} width="3.5rem"/>;
                      case "Leisure & Culture":
                          return <Icon icon={performingArts} width="3.5rem"/>;
                      case "Tolerance":
                          return <Icon icon={peopleTeam} width="3.5rem"/>;
                      case "Outdoors":
                          return <Icon icon={pictureOutlineBadged} width="3.5rem"/>;
                    default:
                      return <Icon icon={folderOutlined} width="3.5rem"/>
                  }
                })()}
              </span>
        <div>
          <b>{score}</b>
          <span>{props.name}</span>
        </div>
      </div>
    //</div>
);
}
