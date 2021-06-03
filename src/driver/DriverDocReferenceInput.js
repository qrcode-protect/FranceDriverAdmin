import React, { useState, useCallback } from "react";
import { useFormState } from "react-final-form";
import { ReferenceInput, AutocompleteInput } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

import QuickPreviewDocButton from "./QuickPreviewDocButton";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
});

const spySubscription = { values: true };

const PostReferenceDocInput = (props) => {
  const classes = useStyles();
  const [version, setVersion] = useState(0);
  const { values } = useFormState({ subscription: spySubscription });
  const handleChange = useCallback(() => setVersion(version + 1), [version]);

  return (
    <div className={classes.root}>
      <ReferenceInput key={version} {...props}>
        <AutocompleteInput optionText="id" />
      </ReferenceInput>
      {!!values.address && <QuickPreviewDocButton id={values.mediaObject} />}
    </div>
  );
};

export default PostReferenceDocInput;
