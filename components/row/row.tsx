import { Table } from "evergreen-ui";
import React from "react";

export const Row = () => {
  return <div>Row</div>;
};

export const PlayerTable = () => {
  const profiles = [
    {
      name: "Mbk",
      lastActivity: "2 mins ago",
      ltv: 7,
      id: 1,
    },
  ];
  return (
    <Table>
      <Table.Head>
        {/* <Table.SearchHeaderCell /> */}
        <Table.TextHeaderCell>Last Activity</Table.TextHeaderCell>
        <Table.TextHeaderCell>Last Activity</Table.TextHeaderCell>
        <Table.TextHeaderCell>Last Activity</Table.TextHeaderCell>
        <Table.TextHeaderCell>Last Activity</Table.TextHeaderCell>
        <Table.TextHeaderCell>Last Activity</Table.TextHeaderCell>
        <Table.TextHeaderCell>Last Activity</Table.TextHeaderCell>
        <Table.TextHeaderCell>Last Activity</Table.TextHeaderCell>
        <Table.TextHeaderCell>Last Activity</Table.TextHeaderCell>
        <Table.TextHeaderCell>Last Activity</Table.TextHeaderCell>
        <Table.TextHeaderCell>ltv</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body height={240}>
        {profiles.map((profile) => (
          <Table.Row
            key={profile.id}
            isSelectable
            onSelect={() => alert(profile.name)}
          >
            <Table.TextCell>{profile?.name}</Table.TextCell>
            <Table.TextCell>{profile?.lastActivity}</Table.TextCell>
            <Table.TextCell isNumber>{profile?.ltv}</Table.TextCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
