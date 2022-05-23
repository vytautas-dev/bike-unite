import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinner from '../layouts/Spinner';
import PostItem from './PostItem';
import PostForm from './PostForm';

const Posts = () => {
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return post.loading ? (
    <Spinner />
  ) : (
    <section className='container'>
      <h1 className='large text-primary'>Posts</h1>
      <p className='lead'>
        {' '}
        <i className='fas fa-user'></i> Welcome to the community{' '}
      </p>
      <PostForm />
      <div className='posts'>
        {post.posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Posts;
