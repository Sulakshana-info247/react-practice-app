import React, { useContext } from "react";
import LightDarkMode from "../light-dark-mode/LightDarkMode";
import Accordian from "../accordian/Accordian";
import RandomColors from "../randomcolors/RandomColors";
import TicTacToe from "../tic-tac-toe/TicTacToe";
import TabsTest from "../custom-tabs/TabsTest";
import { FeatureFlagsContext } from "./context/FeatureFlagsContext";

const FeatureFlags = () => {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);
  const componentsToRender = [
    {
      key: "showLightDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showRandonColorsGenerator",
      component: <RandomColors />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showTabs",
      component: <TabsTest />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey]
  }

  if (loading) return <h1>Loading Data! please wait</h1>;

  return (
    <div>
      <h1>FeatureFlags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
};

export default FeatureFlags;
