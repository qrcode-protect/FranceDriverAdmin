import Link from "@material-ui/core/Link";
const url = "http://104.155.24.90";

export const GetLink = ({ record }) => {
  let data = url + record.contentUrl;
  // {process.env.REACT_APP_API_ENTRYPOINT}
  return <Link href={data}>{record.contentUrl} </Link>;
};

export const GetImageUrl = ({ record }) => {
  let data = url + record.contentUrl;
  // {process.env.REACT_APP_API_ENTRYPOINT}

  // eslint-disable-next-line jsx-a11y/alt-text
  return <img style={{ maxWidth: 300, maxHeight: 300 }} src={data} />;
};
