import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { getMediaObject } from "../data/api";

const url = process.env.REACT_APP_ENTRY_POINT;

//Customer List & DriverList
export const GetAvatarUrl = ({ record }) => {
  let avatarUrl = url + record.contentUrl;
  console.log(record);

  return <Avatar variant="circle" src={avatarUrl} />;
};
// DriverShow
export const GetImageUrl = ({ record }) => {
  let data = url + record.contentUrl;
  return <img alt="" style={{ maxWidth: 200, maxHeight: 200 }} src={data} />;
};

//Media Objects
export const GetLink = ({ record }) => {
  let data = url + record.contentUrl;
  console.log(record);

  return <Link href={data}>{record.contentUrl} </Link>;
};

// Driver Docs
export const GetIdentity = ({ record }) => {
  const [fileUrl, setFileUrl] = useState("");
  const showFile = () => {
    getMediaObject(record.identity).then((response) => {
      setFileUrl(response.data["contentUrl"]);
    });
  };
  return <Button onClick={showFile}>show file</Button>;
};
