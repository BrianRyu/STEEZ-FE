import React from 'react'
import {connect} from 'react-redux'

class LoginForm extends React.Component {
    
    state = {
        username: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let userLoginObj = this.state
        
    }

}
