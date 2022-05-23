import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEquipment } from '../../actions/profile';

const Equipment = () => {
  const dispatch = useDispatch();
  const equipment = useSelector(
    (state) => state.profile.profile.equipment.description
  );

  return (
    <div className='equipment-container'>
      <h2 className='my-2'> Equipment </h2>
      <p>{equipment}</p>
      <button
        className='btn btn-danger'
        onClick={() => dispatch(deleteEquipment())}>
        {' '}
        Delete{' '}
      </button>
    </div>
  );
};

export default Equipment;
