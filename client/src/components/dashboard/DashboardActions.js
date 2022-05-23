import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DashboardActions = () => {
  const userId = useSelector((state) => state.auth.user._id);

  return (
    <div className='dash-buttons'>
      <Link to={`/profile/${userId}`} className='btn btn-light'>
        <i className='fa-solid fa-address-card text-primary'></i> Show my
        profile
      </Link>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fa-solid fa-pen-to-square text-primary'></i> Edit Profile
      </Link>
      <Link to='/add-experience' className='btn btn-light'>
        <i className='fa-solid fa-mountain text-primary'></i> Add/Edit
        Experience
      </Link>
      <Link to='/add-equipment' className='btn btn-light'>
        <i className='fa-solid fa-bicycle text-primary'></i> Add/Edit Equipment
      </Link>
    </div>
  );
};

export default DashboardActions;
