import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { addEquipment } from '../../actions/profile';

const AddEquipment = () => {
  const profileDescription = useSelector((state) => {
    if (state.profile.profile.equipment) {
      return state.profile.profile.equipment.description;
    }
    return;
  });
  const [description, setDescription] = useState(profileDescription || '');

  const dispatch = useDispatch();
  let history = useHistory();

  return (
    <section className='container'>
      <h1 className='large text-primary'>Add An Equipment</h1>
      <p className='lead'>Add any bike gear you want to show off.</p>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addEquipment({ description: description }, history));
        }}>
        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <input type='submit' value='Save' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </section>
  );
};

export default AddEquipment;
