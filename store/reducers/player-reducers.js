import * as ACTION_TYPES from "../actions/actions-type";
export const initialState = {
  players: [],
  starters: [],
  filteredPlayer: [],
  inputValue: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.UPLOAD_FILE:
      const getStarter = action.data.filter((item) => item.Starter === "Yes");
      return {
        ...state,
        players: [...action.data],
        starters: [...getStarter],
        filteredPlayer: [...action.data],
      };

    case ACTION_TYPES.DELETE_PLAYER: {
      //filtering player to using Jersey Number(as unique id for each player)
      const filteredPlayer = state.players.filter(
        (item) => item["Jersey Number"] !== action.id
      );
      //filtering player by starter

      const getStarter = filteredPlayer.filter(
        (item) => item.Starter === "Yes"
      );
      return {
        ...state,
        players: [...filteredPlayer],
        starters: [...getStarter],
        filteredPlayer: [...filteredPlayer],
      };
    }
    case ACTION_TYPES.EDIT_PLAYER: {
      const players = state.players;
      // finding index of player to be deleted
      const playerIndex = state.players.findIndex(
        (item) => item["Jersey Number"] === action.data["Jersey Number"]
      );
      // updating the changed player data with defaultData
      const updatedPlayer = {
        ...players[playerIndex],
        ...action.data,
      };
      // Putting the new player data in the formal index
      const newUpdatedPlayers = [
        ...players.slice(0, playerIndex),
        updatedPlayer,
        ...players.slice(playerIndex + 1),
      ];

      const getStarter = newUpdatedPlayers.filter(
        (item) => item.Starter === "Yes"
      );

      return {
        ...state,
        players: [...newUpdatedPlayers],
        starters: [...getStarter],
        filteredPlayer: [...newUpdatedPlayers],
      };
    }

    case ACTION_TYPES.ON_SEARCH_PLAYER: {
      // filtering the teams by their Player's Name, Position, and Nationality with case insensitive
      const filteredPlayer = state.players.filter(
        (item) =>
          item["Player Name"]
            .toLowerCase()
            .includes(action.value.toLowerCase()) ||
          item["Position"].toLowerCase().includes(action.value.toLowerCase()) ||
          item["Nationality"].toLowerCase().includes(action.value.toLowerCase())
      );
      return {
        ...state,
        filteredPlayer: [...filteredPlayer],
      };
    }
    case ACTION_TYPES.REMOVE_SEARCH_PLAYER: {
      return {
        ...state,
        filteredPlayer: [...state.players],
      };
    }
    default:
      return state;
  }
};
