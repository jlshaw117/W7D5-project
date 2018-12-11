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
        this.props.processForm(this.state);
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
                    <label>
                        Username: 
                        <input type="text" value={this.state.username} onChange={this.update('username')}/>
                    </label>
                    <br/>
                    <label>
                        Password: 
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                    <br/>
                    <input type="submit" value={this.props.formType}/>
                </form>
            </div>
        )
    }

}

export default SessionForm;