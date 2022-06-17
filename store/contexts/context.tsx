import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducers/player-reducers";

interface valueProps {
  players: never[];
  username: string;
  token: string;
  dispatcher: any;
}
export const PlayerContext = createContext(null);
const PlayerProvidver = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PlayerContext.Provider value={{ dispatcher: dispatch, ...state }}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvidver;
