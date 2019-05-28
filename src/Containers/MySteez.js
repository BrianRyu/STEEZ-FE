import React from 'react'
import SteezList from '../Components/SteezList'


class MySteez extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1 className="product-header"> My Fits</h1>
                    <button className="product-add-button" >+</button>
                    <SteezList />
                </div>
            </div>
        )
    }
}

export default MySteez;