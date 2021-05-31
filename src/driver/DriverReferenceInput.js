import React, { useState, useCallback } from "react";
import { useFormState } from "react-final-form";
import { ReferenceInput, AutocompleteInput } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

import QuickCreateButton from "./QuickCreateButton";
import QuickPreviewButton from "./QuickPreviewButton";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
});

const spySubscription = { values: true };

const PostReferenceInput = (props) => {
  const classes = useStyles();
  const [version, setVersion] = useState(0);
  const { values } = useFormState({ subscription: spySubscription });
  const handleChange = useCallback(() => setVersion(version + 1), [version]);

  return (
    <div className={classes.root}>
      <ReferenceInput key={version} {...props}>
        <AutocompleteInput optionText="id" />
      </ReferenceInput>

      <QuickCreateButton onChange={handleChange} />
      {!!values.address && <QuickPreviewButton id={values.address} />}
    </div>
  );
};

export default PostReferenceInput;
