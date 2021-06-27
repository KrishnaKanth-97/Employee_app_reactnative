import {
  AUTH_LOGGED_IN,
  AUTH_LOGOUT,
} from '../constants/constants';
import navigationService from '../service/navigationService';

export const loggedIn = (username, password,loggedInUser) => ({
  type: AUTH_LOGGED_IN,
  payload: {
    username,
    password,
    loggedInUser
  },
});

export const loggedOut = () => ({
  type: AUTH_LOGOUT,
});

export const logout = () =>  (dispatch) => {
  dispatch(loggedOut());
};

export const login = (username, password,loggedInUser) => (dispatch) => {
  if(loggedInUser){
    dispatch(loggedIn(username, password,loggedInUser));
    navigationService.navigate('Home');
  }
};
