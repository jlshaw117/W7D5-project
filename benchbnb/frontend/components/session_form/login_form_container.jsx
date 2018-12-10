import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import React from 'react';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {

    return ({
        errors: state.errors.session,
        formType: "Login",
        link: <Link to="/signup">Signup</Link>
    });
};

const mapDispatchToProps = dispatch => {

    return ({
        processForm: (user) => dispatch(login(user))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);