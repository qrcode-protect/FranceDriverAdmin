import { CustomerList } from "./CustomerList";
import { CustomerCreate } from "./CustomerCreate";
import { CustomerEdit } from "./CustomerEdit";
import { CustomerShow } from "./CustomerShow";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list: CustomerList,
  create: CustomerCreate,
  edit: CustomerEdit,
  show: CustomerShow,
  icon: PeopleOutlineIcon,
};
