import { DriverList } from "./DriverList";
import { DriverEdit } from "./DriverEdit";
import { DriverShow } from "./DriverShow";
import { DriverCreate } from "./DriverCreate";
import PeopleIcon from "@material-ui/icons/People";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list: DriverList,
  show: DriverShow,
  edit: DriverEdit,
  create: DriverCreate,
  icon: PeopleIcon,
};
