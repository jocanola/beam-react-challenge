import styled from "styled-components";
import { Table } from "evergreen-ui";

export const TableStyle = styled(Table)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 108px);
  ${({ height }) => `max-height:${height};`}
  color: ${({ theme }) => theme.text.normal};
  background-color: ${({ theme }) => theme.neutral.bg1};
  border: none;
  border-radius: 8px;
  padding: 13px, 0px, 13px, 0px;
  .TableHead {
    background-color: ${({ theme }) => theme.neutral.bg1};
  }
`;
export const TableHeader = styled(Table.Head)`
  background-color: ${({ theme }) => theme.neutral.bg1};
  color: ${({ theme }) => theme.text.heading};
  border: none;
  width: 100%;
  font-size: 12px;
`;
export const TableRow = styled(Table.Row)`
  color: ${({ theme }) => theme.text.normal};
  background-color: ${({ theme }) => theme.neutral.bg1};
  margin-bottom: 7px;
  border: none;
  &:hover {
    background-color: ${({ theme }) => theme.neutral.bg1};
  }
`;
