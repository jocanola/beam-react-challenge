import React, { useRef, useContext, useState } from "react";
import { AppButton } from "../button/button";
import { AppInput } from "../input/input.style";
import { FilePickerContainer } from "./file-picker.style";
import papa from "papaparse";
import { PlayerContext } from "../../store/contexts/context";
import * as actions from "../../store/actions/actions-type";
import { sortFile } from "../../util/functions/helpers-functions";
import { AppText } from "../custom-text/text";
import { Text } from "evergreen-ui";

export const AppFilePicker = ({ isDisabled, setCsvData }) => {
  const [isError, setIsError] = useState(false);
  const hiddenFileInput = useRef(null);
  console.log(hiddenFileInput);

  const handleFileUpload = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    papa.parse(fileUploaded, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: false,
      aborted: true,
      complete(results) {
        const { data, meta } = results;
        if (sortFile(data).includes(1)) {
          setIsError(true);
          setCsvData([]);
        } else {
          setCsvData(data);
          setIsError(false);
        }
      },
    });
  };

  return (
    <>
      <FilePickerContainer isDisabled={isDisabled} isError={isError}>
        <input
          type="file"
          ref={hiddenFileInput}
          placeholder="Jokanola"
          onChange={handleChange}
          accept=".csv"
        />
        <AppButton
          variant="secondary"
          onClick={handleFileUpload}
          isError={isError}
        >
          select file
        </AppButton>
      </FilePickerContainer>
      {!isError ? (
        <AppText variant="mute">file must be in .csv format</AppText>
      ) : (
        <>
          <Text fontSize={14} fontWeight={500} color="red">
            Error
          </Text>
          <br />
          <AppText variant="normal">
            Your sheet is missing data. Please ensure all cells are filled out.
          </AppText>
        </>
      )}
    </>
  );
};
