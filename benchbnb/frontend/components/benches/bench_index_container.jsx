import BenchIndex from './bench_index';
import { connect } from 'react-redux';
import {fetchBenches} from '../../actions/bench_actions';

const mapStateToProps = state => {

    let benches = Object.values;
    return ({
        benches
    });
};

const mapDispatchToProps = dispatch => {

    return ({
        fetchBenches: () => dispatch(fetchBenches())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex);