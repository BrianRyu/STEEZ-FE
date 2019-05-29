import React from 'react'
import SteezList from '../Components/SteezList'

import { Link } from 'react-router-dom'


class MySteez extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <h1 className="product-header"> My Fits</h1>
                    <Link to="/add-post">
                    <button className="product-add-button">+</button>
                    </Link>
                    <SteezList />
                </div>
            </div>
        )
    }
}

export default MySteez;