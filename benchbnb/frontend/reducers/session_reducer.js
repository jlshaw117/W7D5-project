import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';
import { merge } from 'lodash/merge';

export default (oldState = {}, action) => {

    let newState = merge({}, oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState['id'] = action.currentUser.id;
            return newState;
        case LOGOUT_CURRENT_USER:
            newState['id'] = null;
            return newState;
        default:
            return oldState;
    }
}