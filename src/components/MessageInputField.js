import React, { useRef, useState } from 'react';
import { Avatar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { gravatarPath } from '../gravatar';
import MessageField from './MessageField';
import MessageSubmitButton from './MessageSubmitButton';

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px',
  },
});

const MessageInputField = ({ name }) => {
  const inputEl = useRef(null);
  const [text, setText] = useState('');
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid item xs={10}>
          <MessageField
            inputEl={inputEl}
            name={name}
            setText={setText}
            text={text}
          />
        </Grid>
        <Grid item xs={1}>
          <MessageSubmitButton
            inputEl={inputEl}
            name={name}
            setText={setText}
            text={text}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;
