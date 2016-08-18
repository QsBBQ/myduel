import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';
import DevTools from './Devtools';
const middleware = [thunkMiddleware];
export default function configureStore(initialState={}) {
  let buildStore =  compose(
      applyMiddleware(
        ...middleware,
      ),
       DevTools.instrument()
    );

  const store = createStore( rootReducer , buildStore);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/index', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
