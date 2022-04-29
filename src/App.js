import React, {useState} from 'react';
import PostsList from './components/PostsList'
import './App.css';

function App() {

  const [posts, setPosts] = useState([]);

  function fetchPostsHandler() {
    fetch('http://localhost/ci4-rest-api/post')
    .then(response => {
      return response.json();
    })
    .then(data => {
      setPosts(data.posts);
      //console.log(posts);
    });
  }

  const dummyData = [
    {
      id: 1,
      title: 'Some Dummy Blog',
      openingText: 'This is the opening text of the post',
      releaseDate: '2022-04-18',
    },
    {
      id: 2,
      title: 'Some Dummy Blog',
      openingText: 'This is the second opening text of the blog',
      releaseDate: '2022-04-19',
    },
  ];

  return (
    <React.Fragment>
      <div className='container'>
        <section>
          <button onClick={fetchPostsHandler}>Fetch Blog Posts</button>
        </section>
        <section>
          <PostsList posts={posts} />
        </section>
      </div>
    </React.Fragment>
  );
}

export default App;
