import React, { Fragment } from 'react';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => (
  <div className='profile-about bg-light p-2'>
    {bio && (
      <Fragment>
        <h2 className='text-primary'>About me</h2>
        <p>{bio}</p>
      </Fragment>
    )}
  </div>
);

export default ProfileAbout;
