import {
    IS_LOADING, SIGNIN_FAILED, SIGNIN_SUCCESS, SIGNUP_FAILED,
    SIGNUP_SUCCESS, USER_LOGOUT,
    GET_USER_SUCCESS,GET_USER_FAILED,
    IS_AUTH_SUCCESS,IS_AUTH_FAILED,
    IS_LOGIN_LOADING

} from '../constant';

const initialstate = {
    loading: false,
    error: '',
    userData: null,
    isLoggedIn: false,
    loginLoading: true,
}

const User = (state = initialstate, action) => {
    switch (action.type) {
      case IS_LOADING:
        return {...state, loading: action.isLoading};
      case IS_LOGIN_LOADING:
        return {...state, loginLoading: action.isLoading};
        case IS_AUTH_SUCCESS:
        return {
          ...state,
          userData: action.payload.user,
          isLoggedIn: true,
          loginLoading:false,
        };
      case IS_AUTH_FAILED:
        return {
          ...state,
          isLoggedIn:false,
          loginLoading: false,
        };
        case GET_USER_SUCCESS:
        return {
          ...state,
          userData: action.payload,
          loading: false,
        };
      case GET_USER_FAILED:
        return {
          ...state,
          error: action.payload.errorMessage,
          loading: false,
        };
      case SIGNIN_SUCCESS:
        console.log("signup",action)
        return {
          ...state,
          userData: action.payload,
          isLoggedIn: true,
          loading: false,
        };
      case USER_LOGOUT:
        return {
          ...state,
          userData: null,
          loading: false,
        };
      case SIGNIN_FAILED:
        console.log(action.errorMessage)
        return {
          ...state,
          error: action.errorMessage,
          loading: false,
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          userData: action.payload,
          isLoggedIn: true,
          loading: false,
        };
      case SIGNUP_FAILED:
        return {
          ...state,
           error: action.errorMessage,
          loading: false,
        };
      default:
        return state;
    }
  };

  export default User;