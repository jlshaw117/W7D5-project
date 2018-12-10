import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const login = user => dispatch => {
    return SessionAPIUtil.login(user)
        .then((user) => dispatch(recieveCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON)));
};

export const logout = () => dispatch => {
    return SessionAPIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()),
        error => dispatch(receiveErrors(error.responseJSON)));
};

export const signup = user => dispatch => {
    return SessionAPIUtil.signup(user)
        .then((user) => dispatch(recieveCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON)));
};

const recieveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: RECEIVE_CURRENT_USER,
    currentUser: null
});

const receiveErrors = (errors) => ({
    type: RECEIVE_CURRENT_USER,
    errors
});

