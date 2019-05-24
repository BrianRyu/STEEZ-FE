import React from 'react'
import { connect } from 'react-redux'

class SteezList extends React.Component {
    render(){
        return (
            <div>
                <ul>
                    {console.log(this.props)}
                </ul>
            </div>
        )
    }
}

const stateToProps = (state) => {
    return {products: state.products}
}

export default connect(stateToProps)(SteezList);