import {
  AUTH_LOGGED_IN,
  AUTH_LOGOUT,
} from '../constants/constants';
import sampleData from '../data/sampleData'

const INITIAL_STATE = {
  username:"hruday@gmail.com",
  password : 'hruday123',
  EmployeeList : sampleData
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_LOGOUT: {
      return {
        ...INITIAL_STATE,
        loggedInStatus:false
      };
    }
    case AUTH_LOGGED_IN:
      return {
        ...state,
        loggedInUsername : action.payload.username,
        loggedInPassword : action.payload.password,
        loggedInStatus : action.payload.loggedInUser,
      };
    default:
      return state;
  }
}
