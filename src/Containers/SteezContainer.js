import React from 'react'
import MySteez from './MySteez'

class SteezContainer extends React.Component {
    render() {
        return (
            <div>
                <MySteez />
                {/* don't forget to include the steezhub option here */}
            </div>
        )
    }
}

export default SteezContainer;