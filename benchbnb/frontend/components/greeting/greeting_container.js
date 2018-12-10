import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities}) => {

    let currId = session.id;
    let currentUser = entities.users[currId];
    return ({
        currentUser 
    });
};

const mapDispatchToProps = dispatch => {

    return ({
        logout: () => dispatch(logout())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);