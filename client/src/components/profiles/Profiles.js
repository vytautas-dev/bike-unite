import React, { useEffect } from 'react';
import Spinner from '../layouts/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';
import { useSelector, useDispatch } from 'react-redux';

const Profiles = () => {
  const profiles = useSelector((state) => state.profile.profiles);
  const loading = useSelector((state) => state.profile.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfiles());
  }, [dispatch]);

  return (
    <section className='container'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className='large text-primary'> Our Bikers </h1>
          <p className='lead'>Browse and connect with other riders.</p>
          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4> No profiles found... </h4>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Profiles;
