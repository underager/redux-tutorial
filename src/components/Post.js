import React from 'react';
import { Link } from 'react-router-dom';

export const Post = ({ post, brief }) => (
  <article className="post-excerpt">
    <h2>{post.title}</h2>
    <p>{brief ? post.body.substring(0, 100) : post.body}</p>

    {!brief && (
      <Link to={`/posts/${post.id}`} className="button">
        View Posts
      </Link>
    )}
  </article>
);
