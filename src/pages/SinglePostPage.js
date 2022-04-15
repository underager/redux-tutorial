import React, {useEffect} from 'react'
import {fetchPost} from '../actions/postAction';
import {connect} from 'react-redux';
import {Post} from '../components/Post';
import { useParams } from 'react-router-dom';

export const SinglePostPage = ({match, dispatch, post, hasErrors, loading}) => {
    // console.log();
    const {id} = useParams()
    useEffect(() =>{
        // console.log('id : '+id);
        // const id1 = 1;
        dispatch(fetchPost(id))
    }, [dispatch]);

    const renderPost = () =>{
        if(loading) return <p>Loading...</p>
        if(hasErrors)   return <p>Failed to load the post.</p>
        return <Post key={post.id} post={post}/>
    }
  return (
   <section>
       <h1>Post</h1>
       {renderPost()}
   </section>

  )
}

// Map redux state to react component props
const mapStateToProps = (state) =>({
    post: state.post.post,
    hasErrors: state.post.hasErrors,
    loading: state.post.loading
});

export default connect(mapStateToProps)(SinglePostPage);
