import {RECEVIE_BENCHES} from '../actions/bench_actions';
import { merge } from 'lodash';

const benchReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEVIE_BENCHES:
            return action.benches;
        default:
            return oldState;
    }
};

export default benchReducer;