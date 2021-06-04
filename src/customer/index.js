import { CustomerList } from "./CustomerList";
import { CustomerCreate } from "./CustomerCreate";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import { CustomerShow } from "./CustomerShow";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list: CustomerList,
  create: CustomerCreate,
  show: CustomerShow,
  icon: PeopleOutlineIcon,
};
