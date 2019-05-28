import React from 'react'
import SteezCard from './SteezCard'

import { connect } from 'react-redux'

import { fetchUsers } from '../Redux/actions/MySteezActions'

class SteezList extends React.Component {

    componentDidMount() {
        this.props.fetchUsers()
      }

    render(){
        return (
            <div>
                <ul>
                    {this.props.users.map(user => <SteezCard user={user}/>)}
                </ul>
            </div>
        )
    }
}

const stateToProps = (state) => {
    return {
        users: state.users.users
    }
}

export default connect(stateToProps, {fetchUsers})(SteezList);