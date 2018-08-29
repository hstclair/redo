
import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import {simpleAction} from "../actions/simpleAction";
import {borkAction, loginFailureAction, loginResponseAction} from "../actions/borkAction";


class BorkComponent extends Component {

    performLogin = (evt) => {

        let loginRequest = {
            company: 'MSI',
            username: 'apiuser',
            password: 'ApiUser12#$'
        };

        let url = 'http://localhost:5000/';

        fetch(url + 'security/login', {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginRequest),
        }).then(this.handleLoginResponse)
    };

    handleLoginResponse = (response) => {

        if (response.statusCode !== 200) {
            this.props.loginFailureAction('error response: ' + response.statusCode);
            return;
        }

        let responseContent = response.json();

        if (! responseContent.isValid)
            this.props.loginFailureAction('rejected login: ' + JSON.stringify(responseContent));
        else
            this.props.loginResponseAction(responseContent);
    }

    render() {
        return (
          <div>
              <pre>
              {JSON.stringify(this.props)}
              </pre>
              <button onClick={this.props.borkAction}>Bork!</button>
              <button onClick={this.performLogin}>Login</button>
          </div>
        );
    }

    // onBork(evt) {
    //     this.props.borkAction();
    // }
}


const mapStateToProps = ({ bork, application }) => ({ ...bork, applicationState: { application }  });

const mapDispatchToProps = dispatch => ({
    borkAction: () => dispatch(borkAction()),
    loginFailureAction: (reasonString) => dispatch(loginFailureAction(reasonString)),
    loginResponseAction: (responseContent) => dispatch(loginResponseAction(responseContent))
});






export default connect(mapStateToProps, mapDispatchToProps)(BorkComponent);



