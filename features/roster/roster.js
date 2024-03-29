import React from "react";
import { Header } from "../../components/header/header";
import { TableComp } from "../../components/table/table";

export const Roster = ({ headers, players }) => {
  return <TableComp headers={headers} players={players} />;
};
