import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducers/player-reducers";


export const PlayerContext = createContext(null);
const PlayerProvidver = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PlayerContext.Provider value={{ dispatcher: dispatch, ...state }}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvidver;
