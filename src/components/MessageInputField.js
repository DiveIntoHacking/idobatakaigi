import React from 'react';
import { Avatar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { gravatarPath } from '../gravatar';

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px',
  },
});

const MessageInputField = ({ name }) => {
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid xs={10}>入力</Grid>
        <Grid xs={1}>ボタン</Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;
