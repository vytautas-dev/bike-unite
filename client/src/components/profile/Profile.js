import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import { getProfileById } from '../../actions/profile';
import Spinner from '../layouts/Spinner';

const Profile = ({ match }) => {
  const profile = useSelector((state) => state.profile.profile);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileById(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <section className='container'>
      {profile === null || profile.loading ? (
        <Spinner />
      ) : (
        <>
          <Link to='/profiles' className='btn btn-light'>
            {' '}
            Back to profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to='/edit-profile' className='btn btn-dark'>
                Edit profile
              </Link>
            )}
        </>
      )}

      {profile ? (
        <div className='profile-grid my-1'>
          <ProfileTop profile={profile} />
          <ProfileAbout profile={profile} />
          <div className='profile-exp bg-white p-2'>
            <h2 className='text-primary'> Experience </h2>
            {profile.experience || profile.null ? (
              <p>{profile.experience.description}</p>
            ) : (
              <h4> No information yet </h4>
            )}
          </div>
          <div className='profile-equ bg-white p-2'>
            <h2 className='text-primary'> Equipment </h2>
            {profile.equipment || profile.null ? (
              <p>{profile.equipment.description}</p>
            ) : (
              <h4> No information yet </h4>
            )}
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Profile;
