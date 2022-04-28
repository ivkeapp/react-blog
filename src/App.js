import React from 'react';
import './App.css';

function App() {

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
      <section>
        <button>Fetch Blog Posts</button>
      </section>
      <section>
        <BlogList blogs={dummyData} />
      </section>
    </React.Fragment>
  );
}

export default App;
