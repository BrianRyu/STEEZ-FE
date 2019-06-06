import UserReducer from './UserReducer'
import MySteezReducer from './MySteezReducer'
import ProductReducer from './ProductReducer'
import CommentReducer from './CommentReducer'

import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    users: UserReducer,
    products: ProductReducer,
    posts: MySteezReducer,
    comments: CommentReducer
})

