import React, { useEffect } from 'react';
import { connect } from 'react-redux';

//  Bring in the asynchronous fetchPosts action.
import { fetchPosts } from '../actions/postsActions';
import { Post } from '../components/Post';

//  Redux state is now in the props of the component
const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  //    Show loading, error, or success state
  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;
    // console.log('loading : ' + loading);
    // console.log('psots : ' + posts);
    return posts.map((post) => <Post key={post.id} post={post} excerpt />);
  };

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  );
};

//  Map Redux state to React component props
const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
});

export default connect(mapStateToProps)(PostsPage);
