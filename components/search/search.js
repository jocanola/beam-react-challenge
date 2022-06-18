import { SearchIcon, CrossIcon, Text } from "evergreen-ui";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  ON_SEARCH_PLAYER,
  REMOVE_SEARCH_PLAYER,
} from "../../store/actions/actions-type";
import { PlayerContext } from "../../store/contexts/context";
import { AppText } from "../custom-text/text";
import { SearchBox, SearchInput } from "./search.style";

export const Search = () => {
  const { dispatcher } = useContext(PlayerContext);

  const [value, setValue] = useState("");
  const [initialValue, setInitialValue] = useState("");
  // const inputRef = useRef();
  function onSearch() {
    setInitialValue(value);
    dispatcher({ type: ON_SEARCH_PLAYER, value });
  }

  function onRemoveSearch() {
    setInitialValue("");
    setValue("");
  }

  return (
    <SearchBox>
      <SearchIcon size={20} color="white" />
      <SearchInput
        placeholder="search"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        onKeyPress={(e) => {
          if (e.code === "Enter") {
            onSearch();
          }
        }}
        onKeyDown={(e) => {
          if (e.code === "Escape") {
            onRemoveSearch();
            dispatcher({ type: REMOVE_SEARCH_PLAYER });
          }
        }}
      />
      
      {value && value === initialValue && (
        <span
          onClick={() => {
            onRemoveSearch();
            dispatcher({ type: REMOVE_SEARCH_PLAYER });
          }}
        >
          <CrossIcon size={20} color="white" />
        </span>
      )}
      {value && value !== initialValue && (
        <AppText
          variant="normal"
          brand={true.toString()}
          onClick={(e) => {
            onSearch();
          }}
        >
          search
        </AppText>
      )}
    </SearchBox>
  );
};
