import React from 'react';

import Post from './Post';
import classes from './PostsList.module.css';

const PostsList = (props) => {
  //console.log(props.posts);
  return (
    <ul className={classes['posts-list']}>
      {props.posts.map((post) => (
        <Post
          key={post.post_id}
          title={post.headtitle}
          releaseDate={post.date_added}
          bodyText={post.body}
        />
      ))}
    </ul>
  );
};

export default PostsList;