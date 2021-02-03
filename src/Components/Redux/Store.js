import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Combinereducer from './Combinereducer';

const store = createStore(Combinereducer, applyMiddleware(thunk));
export default store;