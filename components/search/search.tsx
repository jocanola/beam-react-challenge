import { SearchIcon, CrossIcon, Text } from "evergreen-ui";
import React, {
  ChangeEventHandler,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ON_SEARCH_PLAYER } from "../../store/actions/actions-type";
import { PlayerContext } from "../../store/contexts/context";
import { AppText } from "../custom-text/text";
import { SearchBox, SearchInput } from "./search.style";

export const Search = () => {
  const { dispatcher, inputValue }: any = useContext(PlayerContext);
  const [showCross, setShowCross] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [value, setValue] = useState("");
  // const inputRef = useRef();
  function onSearch() {
    dispatcher({ type: ON_SEARCH_PLAYER, value });
    setShowCross(true);
  }

  return (
    <SearchBox>
      <SearchIcon size={20} color="white" />
      <SearchInput
        placeholder="search"
        onChange={(e: ChangeEventHandler<HTMLInputElement>) =>
          setValue((e.target as HTMLInputElement).value)
        }
        value={value}
        onKeyPress={(e: any) => {
          if (e.code === "Enter") {
            onSearch();
          }
          if (e.code === "Escape") {
            setValue("");
          }
        }}
      />

      {showCross && (
        <span onClick={() => setValue("")}>
          <CrossIcon size={20} color="white" />
        </span>
      )}
      {value && (
        <AppText
          variant="normal"
          brand
          onClick={(e: any) => {
            onSearch(e);
          }}
        >
          search
        </AppText>
      )}
    </SearchBox>
  );
};
