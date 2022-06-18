import styled from "styled-components";


export const FilePickerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 248px;
  border: 1px solid ${(props) => (props.isError ? "red" : "#494949")};
  border-radius: 8px;
  padding-left: 15px;
  pointe-event: ${(props) => (props.isDisabled ? "none" : "auto")};
  margin-bottom: 10px;
  input {
    width: 143px;
    background-color: transparent;
    border: none;
    height: 100%;
    color: ${({ theme }) => theme.text.normal};
    &::-webkit-file-upload-button {
      display: none;
    }
  }
`;
