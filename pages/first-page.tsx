import React, { useContext } from "react";
import { Header } from "../components/header/header";
import { Pitch } from "../features/pitch/pitch";
import { Layout } from "../features/layout/layout";
import { PlayerContext } from "../store/contexts/context";

const FirstPage = () => {
  return <Layout />;
};

export default FirstPage;
