import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    gridRow: 2,
  },
});

const MessageInputField = () => {
  const classes = useStyles();
  return <div className={classes.root}>MessageInputField</div>;
};

export default MessageInputField;
