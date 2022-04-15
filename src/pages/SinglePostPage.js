import React, {useEffect} from 'react'
import {fetchPost} from '../actions/postAction';
import {connect} from 'react-redux';
import {Post} from '../components/Post';
import { useParams } from 'react-router-dom';
import { fetchComments } from '../actions/postCommentsAction';
import{Comment} from '../components/Comment';

export const SinglePostPage = ({ dispatch, post, hasErrors, loading, comments, hasErrorsComments, loadingComments}) => {
    // console.log();
    const {id} = useParams()
    useEffect(() =>{
        // console.log('id : '+id);
        // const id1 = 1;
        dispatch(fetchPost(id))
        dispatch(fetchComments(id))
    }, [dispatch]);

    const renderPost = () =>{
        if(loading) return <p>Loading...</p>
        if(hasErrors)   return <p>Failed to load the post.</p>
        return <Post key={post.id} post={post} brief={false}/>
    }

    const renderComments = ()=>{
        if(loadingComments) return <p> Comments loading...</p>
        if(hasErrorsComments)   return <p>Failed to load comments</p>
        return comments.map(comment => <Comment key={comment.id} comment={comment}/>);
    }
  return (
   <section>
       <h1>Post</h1>
       {renderPost()}
       <h2>Comments</h2>
       {renderComments()}
   </section>

  )
}

// Map redux state to react component props
const mapStateToProps = (state) =>({
    post: state.post.post,
    hasErrors: state.post.hasErrors,
    loading: state.post.loading,
    comments: state.comments.comments,
    hasErrorsComments: state.comments.hasErrors,
    loadingComments: state.comments.loading
});

export default connect(mapStateToProps)(SinglePostPage);
