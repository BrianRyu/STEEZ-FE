import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../Redux/actions/MySteezActions'
import SteezCard from './SteezCard';

class SteezFitList extends React.Component {

    componentDidMount(){
        this.props.fetchPosts()
    }

    render(){
        return(
            <div>
                <ul className="grid-container">
                {this.props.posts ? this.props.posts.slice(3, 6).map(post => <SteezCard post={post}/>) : null}
                </ul>
            </div>
        )
    }
}

const stateToProps = state => {
    return {
        posts: state.posts.allPosts
    }
}

export default connect(stateToProps, {fetchPosts})(SteezFitList)