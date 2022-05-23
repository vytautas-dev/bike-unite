import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { addExperience } from '../../actions/profile';

const AddExperience = () => {
  const profileDescription = useSelector((state) => {
    if (state.profile.profile.experience) {
      return state.profile.profile.experience.description;
    }
    return;
  });
  const [description, setDescription] = useState(profileDescription || '');

  const dispatch = useDispatch();
  let history = useHistory();

  return (
    <section className='container'>
      <h1 className='large text-primary'>Add An Experience</h1>
      <p className='lead'>
        Tell us about your past experiences and adventures.
      </p>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addExperience({ description: description }, history));
        }}>
        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Description*'
            value={description}
            onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <input value='Save' type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </section>
  );
};

export default AddExperience;
