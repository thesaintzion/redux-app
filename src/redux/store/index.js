import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/index';
import { hateWordsMiddleware } from '../middleware/index';
import thunk from "redux-thunk";


const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,  storeEnhancers(applyMiddleware(hateWordsMiddleware, thunk)));

export default store;
