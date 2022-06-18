import { TextInput } from "evergreen-ui";
import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 248px;
  border: 1px solid #494949;
  border-radius: 8px;
  height: 44px;
  padding: 0 10px;
`;
export const SearchInput = styled(TextInput)`
  background-color: transparent;
  color: ${({ theme }) => theme.text.normal};
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-weight: 400;
  border: none;
  &:focus {
    border: none !important;
  }
`;
