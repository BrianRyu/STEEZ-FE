import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../Redux/actions/MySteezActions'

class PostForm extends React.Component {

    state = {
        name: "",
        img_url: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newPostObj = this.state
        let id = this.props.currentUser.id
        this.props.addPost(newPostObj, id, localStorage)
        this.props.history.push('/home')
    }
    render(){
        return(
            <div className="product-form-div">
                <h1>Style with ease.</h1>
                <form onSubmit={this.handleSubmit} className="product-form">
                    <label>MY FIT Title: </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    <br /> <br />
                    <label>MY FIT Image URL: </label>
                    <input type="url" name="img_url" value={this.state.img_url} onChange={this.handleChange} />
                    <br /> <br />
                    <input type="submit"/>
                </form>

            </div>
        )
    }
}

const stateToProps = (state) => {
    return {
        currentUser: state.users.currentUser,
        prod: state.products.allProducts
    }
}

export default connect(stateToProps,{addPost})(PostForm);