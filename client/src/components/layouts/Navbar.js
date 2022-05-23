import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonBiking } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/auth';
import { Fragment } from 'react';

const Navbar = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Users</Link>
      </li>
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          {' '}
          <i className='fas fa-user'></i> Dashboard
        </Link>
      </li>
      <li>
        <Link to='/' onClick={() => dispatch(logout())} href='#!'>
          <i className='fas fa-sign-out-alt'></i>{' '}
          <span className='hide-sm'> Logout </span>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Users</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <FontAwesomeIcon icon={faPersonBiking} /> BikeUnite
        </Link>
      </h1>
      {!auth.loading && (
        <Fragment>{auth.isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

export default Navbar;
