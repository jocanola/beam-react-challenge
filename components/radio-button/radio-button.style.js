import styled from "styled-components";

const RadioBtn = styled.label`
  padding: 6px;
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  margin: 8px 0;
  input {
    vertical-align: middle;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: white;
    border: 0;
    appearance: none;
    padding: 0;
    margin: 0;
    pointer-events: none;
    &:focus {
      outline: none;
    }

    &:checked {
      box-shadow: inset 0 0 0 6px ${({ theme }) => theme.ui.primary};
    }
  }
  span {
    vertical-align: middle;
    display: inline-block;
    line-height: 20px;
    padding: 0 8px;
    color: white;
  }
`;
import React, { useState } from "react";
import { Pane } from "evergreen-ui";

export const RadioComponent = ({ defaultValue, setValue }) => {
  const [options] = useState([
    { label: "Yes", value: true },
    { label: "No", value: false },
  ]);
  return (
    <>
      <Pane display="flex" gap={15}>
        {options.map(({ value, label }) => (
          <RadioBtn>
            <input
              type="radio"
              name="starter"
              defaultChecked={label === defaultValue}
              onChange={(e) => {
                setValue("Starter", label, {
                  shouldDirty: true,
                });
              }}
            />
            <span>{label}</span>
          </RadioBtn>
        ))}
      </Pane>
    </>
  );
};
