import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteExperience } from '../../actions/profile';

const Experience = () => {
  const dispatch = useDispatch();

  const experience = useSelector((state) => {
    if (state.profile.profile.experience) {
      return state.profile.profile.experience.description;
    } else {
      return '';
    }
  });

  return (
    <div className='experience-container'>
      <h2 className='my-2'> Experience </h2>
      <p> {experience}</p>
      <button
        className='btn btn-danger'
        onClick={() => dispatch(deleteExperience())}>
        Delete
      </button>
    </div>
  );
};

export default Experience;
