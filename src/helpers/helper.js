import React from "react";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";

const url = process.env.REACT_APP_ENTRY_POINT;

//Customer List & DriverList
export const GetAvatarUrl = ({ record }) => {
  let avatarUrl = url + record.contentUrl;
  return <Avatar variant="circle" src={avatarUrl} />;
};
// DriverShow & CustomerShow
export const GetImageUrl = ({ record }) => {
  let data = url + record.contentUrl;
  return <img alt="" style={{ maxWidth: 200, maxHeight: 200 }} src={data} />;
};

//Media Objects
export const GetLink = ({ record }) => {
  let data = url + record.contentUrl;
  return <Link href={data}>{record.contentUrl} </Link>;
};
