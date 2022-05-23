import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  post: { _id, text, avatar, name, user, like, comments, date },
  showActions,
}) => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const day = date.slice(0, -14);

  return (
    <div className='post bg-white p-1 my-1'>
      <div>
        <Link to={`/profile/${user}`}>
          <img className='round-img' src={avatar} alt='' />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className='my-1'>{text}</p>
        <p className='post-date'>Posted on {day}</p>
        {showActions && (
          <Fragment>
            <button
              onClick={(e) => dispatch(addLike(_id))}
              type='button'
              className='btn btn-light'>
              <i className='fas fa-thumbs-up'></i>
              {like.length > 0 && <span> {like.length} </span>}
            </button>
            <button
              onClick={(e) => dispatch(removeLike(_id))}
              type='button'
              className='btn btn-light'>
              <i className='fas fa-thumbs-down'></i>
            </button>
            <Link to={`/post/${_id}`} className='btn btn-primary'>
              Discussion{' '}
              {comments.length > 0 && (
                <span className='comment-count'>{comments.length}</span>
              )}
            </Link>
            {!auth.loading && user === auth.user._id && (
              <button
                onClick={() => dispatch(deletePost(_id))}
                type='button'
                className='btn btn-danger'>
                <i className='fas fa-times'></i>
              </button>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

export default PostItem;
