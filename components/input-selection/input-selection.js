import { useState } from "react";
import { SelectField } from "evergreen-ui";
import styled from "styled-components";
import { appTheme } from "../../styles/theme";

const SelectStyle = styled(SelectField).attrs(({ theme }) => ({
  backgroundColor: theme.neutral.bg1,
  paddingTop: "10px",
  paddingBottom: "10px",
}))`
  width: 100%;
  height: 44px;
  border: 1px solid #494949;
`;
export const AppInputSelect = ({ data, defaultValue, handleChange, value }) => {
  return (
    <SelectStyle value={value} onChange={(e) => handleChange(e.target.value)}>
      {data?.map((item) => {
        return (
          <option className="select-field" value={item.demonym} selected>
            {item.demonym}
          </option>
        );
      })}
    </SelectStyle>
  );
};
