import { Image, Pane, SidebarTab, Tablist } from "evergreen-ui";
import React, { useContext, useState } from "react";
import { Header } from "../../components/header/header";
import { HeaderContainer } from "../../components/header/header.style";
import { Pitch } from "../pitch/pitch";
import { PlayerContext } from "../../store/contexts/context";
import { appTheme } from "../../styles/theme";
import { LayoutWrap, SideBar } from "./layout.style";
import { Roster } from "../roster/roster";

export const Layout = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { headers, players, starters }: any = useContext(PlayerContext);

  const tabs = [
    {
      title: "Roster",
      activeIcon: "./bars(active).png",
      inactiveIcon: "./bars.png",
      comp: <Roster headers={headers} players={players} />,
    },
    {
      title: "Pitch",
      activeIcon: "./users(active).png",
      inactiveIcon: "./users.png",
      comp: <Pitch starters={starters}/>,
    },
  ];
  return (
    <LayoutWrap>
      <SideBar>
        <img className="logo" src="./ball.jpg" height={26.25} width={26.25} />
        {tabs.map((tab, index) => (
          <Pane
            display="flex"
            alignItems="center"
            paddingLeft={10}
            gap={8}
            key={tab.title}
            onClick={() => setSelectedIndex(index)}
            cursor="pointer"
          >
            <Pane
              width={4}
              height={4}
              borderRadius={2}
              background={
                index === selectedIndex ? appTheme.ui.primary : "transparent"
              }
            ></Pane>

            <img
              src={index === selectedIndex ? tab.activeIcon : tab.inactiveIcon}
              width={14}
              height={16}
            />
          </Pane>
        ))}
      </SideBar>

      <Pane
        width="100%"
        height="100vh"
        padding="40px"
        backgroundColor={appTheme.neutral.bg2}
        overflowY="scroll"
      >
        <Header isPitch={tabs[selectedIndex].title === "Pitch"} />
        {tabs[selectedIndex].comp}
      </Pane>
    </LayoutWrap>
  );
};
