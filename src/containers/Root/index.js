import React, {Component} from 'react';
import styles from './style.css';
import { Provider } from 'react-redux';
import configureStore from '../../store';
import DevTools from '../../Devtools';
import App from '../App';
const store = configureStore();

class Root extends Component{
  render(){
    return <Provider store={store}>
				  <div>
            <div><App/></div>
          <DevTools/>
			   </div>
			  </Provider>
      }
}
export default Root;
