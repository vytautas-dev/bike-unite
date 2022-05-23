import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import Spinner from '../layouts/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Equipment from './Equipment';

const Dashboard = () => {
  const profile = useSelector((state) => state.profile);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  return profile.loading && profile.profile === null ? (
    <Spinner />
  ) : (
    <section className='container'>
      <h1 className='large text-primary'> Dashboard </h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome {user && user.name}{' '}
      </p>
      {profile.profile !== null ? (
        <>
          {' '}
          <DashboardActions />
          {profile.profile.experience && <Experience />}
          {profile.profile.equipment && <Equipment />}
          <div className='my-2'>
            <button
              className='btn btn-danger'
              onClick={() => dispatch(deleteAccount())}>
              <i className='fas-fa-user-minus'></i> Delete my Account
            </button>
          </div>
        </>
      ) : (
        <>
          <p> You have not yet setup a profile, please add some info.</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            {' '}
            Create profile{' '}
          </Link>
        </>
      )}
    </section>
  );
};

export default Dashboard;
