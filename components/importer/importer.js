import { Pane, Paragraph, Table } from "evergreen-ui";
import React, { useContext, useState } from "react";
import { PlayerContext } from "../../store/contexts/context";
import { fileSummary } from "../../util/functions/helpers-functions";
import { AppButton } from "../button/button";
import { AppText } from "../custom-text/text";
import Modal from "../dialog/custom-dialog";
import { AppFilePicker } from "../file-picker/file-picker";
import { TableHeader, TableStyle, TableRow } from "../table/table.style";
import { UPLOAD_FILE } from "../../store/actions/actions-type";

const Importer = () => {
  const [isShown, setIsShown] = useState(false);
  const [csvData, setCsvData] = useState([]);
  const { players, starters, dispatcher } = useContext(PlayerContext);
  const isPlayerExist = starters.length > 0;
  const { totalPlayers, goalKeepers, defenders, midFielders, forwards } =
    fileSummary(csvData);
  //Sending file data to global data
  const handleImport = () => {
    dispatcher({
      type: UPLOAD_FILE,
      data: csvData,
      // headers: fields,
    });
    setIsShown(false);
  };
  //Global state

  return (
    <Pane>
      <Modal title="Import" show={isShown} onClose={() => setIsShown(false)}>
        <Pane width="800px" height="400px">
          <AppFilePicker setCsvData={setCsvData} />

          {csvData.length > 0 && (
            <>
              <AppText variant="normal">File Summary</AppText>
              <TableStyle height="200px">
                <TableHeader>
                  <Table.TextHeaderCell>Total Players</Table.TextHeaderCell>
                  <Table.TextHeaderCell>Goalkeepers</Table.TextHeaderCell>
                  <Table.TextHeaderCell>
                    <AppText variant="heading" fontSize="12px">
                      Defenders
                    </AppText>
                  </Table.TextHeaderCell>
                  <Table.TextHeaderCell>Midfielders</Table.TextHeaderCell>
                  <Table.TextHeaderCell>Forwards</Table.TextHeaderCell>
                </TableHeader>
                <Table.Body>
                  <TableRow>
                    <Table.TextCell>
                      <AppText variant="normal">{totalPlayers}</AppText>
                    </Table.TextCell>
                    <Table.TextCell>
                      <AppText variant="normal">{goalKeepers}</AppText>
                    </Table.TextCell>
                    <Table.TextCell>
                      <AppText variant="normal"> {midFielders}</AppText>
                    </Table.TextCell>
                    <Table.TextCell>
                      <AppText variant="normal">{defenders}</AppText>
                    </Table.TextCell>
                    <Table.TextCell>
                      <AppText variant="normal">{forwards}</AppText>
                    </Table.TextCell>
                  </TableRow>
                </Table.Body>
              </TableStyle>
            </>
          )}
        </Pane>
        <Pane
          width="100%"
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <AppButton
            variant="primary"
            brand
            disabled={csvData.length <= 0}
            onClick={handleImport}
          >
            Import
          </AppButton>
        </Pane>
      </Modal>

      <AppButton
        variant={isPlayerExist ? "secondary" : "primary"}
        onClick={() => setIsShown(true)}
      >
        {isPlayerExist ? "Re-import" : "Import"}
      </AppButton>
    </Pane>
  );
};

export default Importer;
