import Avatar from "@material-ui/core/Avatar";

const url = "http://104.155.24.90";

export const GetAvatarUrl = ({ record }) => {
  let dataUrl = url + record.contentUrl;
  // {process.env.REACT_APP_API_ENTRYPOINT}
  return <Avatar variant="square" src={dataUrl} />;
};

export const GetImageUrl = ({ record }) => {
  let dataUrl = url + record.contentUrl;
  // {process.env.REACT_APP_API_ENTRYPOINT}
  return <img alt="" style={{ maxWidth: 300, maxHeight: 300 }} src={dataUrl} />;
};
