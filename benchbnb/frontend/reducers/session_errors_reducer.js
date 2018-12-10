import { RECEIVE_ERRORS, RECIEVE_CURRENT_USER } from '../actions/session_actions';

export default (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RECIEVE_CURRENT_USER:
            return [];
        default:
           return oldState;
    }
}