import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    const newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({} , oldState, { [action.currentUser.id]: action.currentUser });
        default:
            return oldState;
    }
};