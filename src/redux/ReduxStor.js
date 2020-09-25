import { 
    combineReducers, 
    createStore, 
    applyMiddleware 
} from "redux";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import LoginReducer from '../redux/LoginReducer';

let reducers = combineReducers({
    auth: LoginReducer,
    form : formReducer,
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware))

export default store