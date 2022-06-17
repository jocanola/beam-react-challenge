import { RadioGroup } from "evergreen-ui";
import React, { useState } from "react";
import styled from "styled-components";
import { appTheme } from "../../styles/theme";
import { RadioComponent } from "./radio-button.style";

export const Radio = () => {
  return <div>Radio</div>;
};

export const RadioButton = () => {
  const [options] = useState([
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ]);
  // const [value, setValue] = React.useState("restricted");
  return (
    <>
      {options.map(({ value }: { value: string }) => (
        <RadioComponent value={value} key={value} />
      ))}
      <label for="f-option" class="l-radio">
        <input type="radio" id="f-option" name="selector" tabindex="1" />
        <span>First</span>
      </label>
      
    </>
  );
};

export const AppRadioButton = () => {
  const [options] = React.useState([
    { label: "Read-only", value: "read-only" },
    { label: "Write", value: "write" },
    { label: "Restricted", value: "restricted" },
  ]);

  const [value, setValue] = React.useState("restricted");
  return (
    <RadioGroup
      size={16}
      value={value}
      options={options}
      onChange={(event: any) => setValue(event.target.value)}
      display="flex"
      gap="10"
    />
  );
};
