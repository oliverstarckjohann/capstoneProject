import styled from "styled-components/macro";
import uuid from "react-uuid";

export default function DressListItem({ dress }) {
  return (
    <ListItem key={uuid()}>
      <img
        alt="mode"
        src={`https://oliver-starckjohann.de/img_wm/${dress.path}`}
      />
    </ListItem>
  );
}

const ListItem = styled.li`
  list-style-type: none;
`;
