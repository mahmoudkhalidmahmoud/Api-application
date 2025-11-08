import React from 'react';
import { Post } from '../types/post';

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div className="post-item">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostItem;