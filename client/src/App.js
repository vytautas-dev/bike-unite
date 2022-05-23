import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import Login from './components/auth/Login';
import Alert from './components/layouts/Alert';
import Register from './components/auth/Register';
import setAuthToken from './utils/setAuthToken';
import Dashboard from './components/dashboard/Dashboard';
import ProfileForm from './components/profile-forms/ProfileForm';
import PrivateRoute from './components/routing/PrivateRoute';
import AddExperience from './components/profile-forms/AddExperience';
import Profile from './components/profile/Profile';
// Redux
import { Provider } from 'react-redux';
import store from './store.js';
import { loadUser } from './actions/auth';

import './App.css';
import AddEquipment from './components/profile-forms/AddEquipment';
import Profiles from './components/profiles/Profiles';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <Alert />
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/profiles' component={Profiles} />
          <Route exact path='/profile/:id' component={Profile} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />

          <PrivateRoute exact path='/create-profile' component={ProfileForm} />

          <PrivateRoute exact path='/edit-profile' component={ProfileForm} />
          <PrivateRoute
            exact
            path='/add-experience'
            component={AddExperience}
          />
          <PrivateRoute exact path='/add-equipment' component={AddEquipment} />
          <PrivateRoute exact path='/posts' component={Posts} />
          <PrivateRoute exact path='/post/:id' component={Post} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
