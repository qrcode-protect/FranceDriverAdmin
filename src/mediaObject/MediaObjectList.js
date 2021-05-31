import React from "react";
import {
  useListContext,
  EditButton,
  List,
  Datagrid,
  TextField,
} from "react-admin";
import { Card, CardContent, Checkbox } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import { GetLink } from "../helpers/helper";

const cardStyle = {
  width: 300,
  minHeight: 300,
  margin: "0.5em",
  display: "inline-block",
  verticalAlign: "top",
};

// const ImageGrid = ({ selected, selectable, onToggleItem }) => {
//   const { ids, data } = useListContext();
//   return (
//     <div style={{ margin: "1em" }}>
//       {ids.map((id) => (
//         <Card key={id} style={cardStyle}>
//           <CardContent>
//             <Checkbox
//               checked={selected}
//               disabled={selectable}
//               onClick={(event) => onToggleItem(id, event)}
//             />
//             <GetImageUrl record={data[id]} />
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };

export const MediaObjectList = (props) => (
  <List {...props}>
    <Datagrid>
      <GetLink />
    </Datagrid>
  </List>
);
