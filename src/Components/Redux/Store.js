import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Combinereducer from './Combinereducer';

const store = createStore(Combinereducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;