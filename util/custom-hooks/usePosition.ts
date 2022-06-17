import { useContext, useEffect, useState } from "react";
import { playerProps } from "../../custom-types";
import { PlayerContext } from "../../store/contexts/context";

export const usePlayerPosition = (position) => {
  const { starters }: any = useContext(PlayerContext);
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    if (starters) {
      setPlayers(
        starters?.filter(
          (item: playerProps) =>
            item.Position.toLowerCase() === position.toLowerCase()
        )
      );
    }
  }, [starters, position]);
  const playersLength = players.length;
  return { players, playersLength };
};
