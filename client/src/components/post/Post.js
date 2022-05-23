import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { getPost } from '../../actions/post';
import PostItem from '../posts/PostItem';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

const Post = ({ match }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPost(match.params.id));
  }, [match.params.id, dispatch]);

  return post.loading || post.post === null ? (
    <Spinner />
  ) : (
    <section className='container'>
      <Link to='/posts' className='btn'>
        {' '}
        Back to posts{' '}
      </Link>
      <PostItem post={post.post} showActions={false} />
      <CommentForm postId={post.post._id} />
      <div className='comments'>
        {post.post.comments.map((comment) => (
          <CommentItem
            key={comment._id}
            comment={comment}
            postId={post.post._id}
          />
        ))}
      </div>
    </section>
  );
};

export default Post;
