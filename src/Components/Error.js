import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className="error-div">
            <img className="error-img" src="https://media.makeameme.org/created/are-you-lost-g74daa.jpg" alt='' />
            <br /><br />
            Don't have account? <Link to='register'>Register here</Link>
            <br/><br />
            Already have account? <Link to='login'>Login here</Link>
        </div>
    )
}

export default Error;