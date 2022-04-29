import React from 'react';

import classes from './Post.module.css';

const Post = (props) => {
  return (
    <li className={classes.post}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.bodyText}</p>
    </li>
  );
};

export default Post;