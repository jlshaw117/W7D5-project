import React from 'react';

class SessionForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update (field) {
        return (e) => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit (e) {
        e.preventDefault();
        this.processForm(this.state);
    }

    render() {

        let errors = this.props.errors.map((err, idx) => {
            return <li key={idx} >{err}</li>
        })
        return (
            <div>
                <h1>{this.props.formType}</h1><br/>
                {this.props.link}
                <ul>
                    {errors}
                </ul>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" value={this.state.username} onChange={this.update('username')}/>
                    <input type="text" value={this.state.password} onChange={this.update('password')}/>
                    <input type="submit" value={this.props.formType}/>
                </form>
            </div>
        )
    }

}

export default SessionForm;