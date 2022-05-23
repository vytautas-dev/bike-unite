import React from 'react';
import { Link } from 'react-router-dom';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    location,
    skills,
  },
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' className='roung-img' />
      <div>
        <h2>{name}</h2>

        <p className='my-1'>{location && <span> {location} </span>}</p>
        <Link to={`/profile/${_id}`} className='brn btn-primary'>
          View profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check'></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileItem;
