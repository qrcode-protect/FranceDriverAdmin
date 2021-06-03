import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";

const url = process.env.REACT_APP_ENTRY_POINT;

export const GetAvatarUrl = ({ record }) => {
  let avatarUrl = url + record.contentUrl;
  // {process.env.REACT_APP_API_ENTRYPOINT}
  return <Avatar variant="circle" src={avatarUrl} />;
};

export const GetLink = ({ record }) => {
  let data = url + record.contentUrl;
  // {process.env.REACT_APP_API_ENTRYPOINT}
  return <Link href={data}>{record.contentUrl} </Link>;
};

export const GetImageUrl = ({ record }) => {
  let data = url + record.contentUrl;
  // {process.env.REACT_APP_API_ENTRYPOINT}
  return <img alt="" style={{ maxWidth: 300, maxHeight: 300 }} src={data} />;
};
