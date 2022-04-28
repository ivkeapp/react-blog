import React from 'react';

import Post from './Post';
import classes from './PostsList.module.css';

const PostsList = (props) => {
  return (
    <ul className={classes['posts-list']}>
      {props.posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          releaseDate={post.release}
          openingText={post.openingText}
        />
      ))}
    </ul>
  );
};

export default PostsList;