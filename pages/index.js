import Head from "next/head";
import { useState } from "react";
import papa from "papaparse";
import { Pane } from "evergreen-ui";
import { AppButton } from "../components/button/button";
import { AppInput } from "../components/input/input.style";
import { AppInputSelect } from "../components/input-selection/input-selection";
import { AppFilePicker } from "../components/file-picker/file-picker";
import { Search } from "../components/search/search";
import { TableComp } from "../components/table/table";
import { PlayerGrid } from "../components/table/player-grid/player-grid";
export default function Home() {
  const [file, setFile] = useState("");

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              papa.parse(file, {
                header: true,
                dynamicTyping: true,
                skipEmptyLines: false,
                complete(results) {
                  setFile(results.data);
                  dispatch(action.uploadedTeams(results.data));
                  for (let eachPlay of results.data) {
                    console.log(Object.values(eachPlay));
                  }
                  // console.log(results.data.map());
                },
              });
            }}
          />
        </div>
        <h1>Buttom components</h1>
        <AppButton disabled variant="primary">
          Add button
        </AppButton>
        <br />
        <AppButton disabled variant="secondary">
          Add button
        </AppButton>
        <br />
        <AppButton variant="primary" smallBtn>
          +
        </AppButton>

        <h1>Input components</h1>
        <AppInput placeholder="Jokanola" />
        <AppInput placeholder="Jokanola" values="Jokanola" />
        <AppInput placeholder="Jokanola" disabled />
      </main>
      <h1>Input Selection</h1>
      <AppInputSelect />
      {/* {console.log(file)} */}
      <h1>File Picker Selection</h1>
      <AppFilePicker isDisabled={false} />
      <AppFilePicker isDisabled={true} />
      <PlayerGrid />

      <h1>Search Box</h1>
      <Search />
      <h1>checkbox</h1>

      <TableComp />

      <Pane></Pane>
      <Pane></Pane>
      <Pane></Pane>
      <Pane></Pane>
      <Pane></Pane>
    </div>
  );
}