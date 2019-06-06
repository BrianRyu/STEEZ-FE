import Comments from '../Components/Comments'
import CommentShow from '../Components/CommentShow'

import React from 'react'

class CommentCont extends React.Component {
    render() {
        return(
            <div>
                <Comments />
                <CommentShow />
            </div>
        )
    }
}

export default CommentCont;