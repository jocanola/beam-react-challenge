import { playerProps } from "../../custom-types";
import * as ACTION_TYPES from "../actions/actions-type";
export const initialState = {
  players: [],
  message: "",
  isError: false,
  starters: [],
  headers: [],
  inputValue: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.UPLOAD_FILE:
      const getStarter = action.data.filter(
        (item: playerProps) => item.Starter === "Yes"
      );
      return {
        ...state,
        players: [...action.data],
        starters: [...getStarter],
        // headers: [...action.headers],
        isError: false,
      };

    case ACTION_TYPES.DELETE_PLAYER: {
      const filteredPlayer = state.players
        .filter((item) => item["Jersey Number"] !== action.id)
        .sort((a, b) => a["Jersey Number"]);
      const getStarter = filteredPlayer.filter(
        (item: any) => item.Starter === "Yes"
      );
      return {
        ...state,
        players: [...filteredPlayer],
        starters: [...getStarter],
      };
    }
    case ACTION_TYPES.EDIT_PLAYER: {
      const players = state.players;
      const playerIndex = state.players.findIndex(
        (item) => item["Jersey Number"] === action.data["Jersey Number"]
      );
      const updatedPlayer = {
        ...(players[playerIndex] as playerProps),
        ...action.data,
      };
      const newUpdatedPlayers = [
        ...players.slice(0, playerIndex),
        updatedPlayer,
        ...players.slice(playerIndex + 1),
      ];
      const getStarter = newUpdatedPlayers.filter(
        (item: any) => item.Starter === "Yes"
      );
      console.log(getStarter);
      return {
        ...state,
        players: [...newUpdatedPlayers],
        starters: [...getStarter],
      };
    }
    case ACTION_TYPES.ON_ERROR:
      return {
        ...state,
        isError: true,
        message: action.message,
        players: [],
        starters: [],
      };
    case ACTION_TYPES.ON_SEARCH_PLAYER: {
      // const filteredPlayer = state.players.filter(item=> )
      return {
        ...state,
        inputValue: action.value,
      };
    }
    default:
      return state;
  }
};
