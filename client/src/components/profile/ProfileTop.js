import React from 'react';

const ProfileTop = ({
  profile: {
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div className='profile-top bg-dark p-2'>
      <img className='round-img my-1' src={avatar} alt='avatar' />
      <h1 className='large'>{name}</h1>
      <p>{location && <span> {location} </span>}</p>
      <div className='icons my-1'>
        {website && (
          <a href={website} target='_blank' rel='noreferrer'>
            <i className='fas fa-globe fa-2x'></i>
          </a>
        )}

        {social && social.twitter && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter fa-2x'></i>
          </a>
        )}

        {social && social.facebook && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-facebook fa-2x'></i>
          </a>
        )}

        {social && social.linkedin && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin fa-2x'></i>
          </a>
        )}

        {social && social.youtube && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-youtube fa-2x'></i>
          </a>
        )}

        {social && social.instagram && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-instagram fa-2x'></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileTop;
