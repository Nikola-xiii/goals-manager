import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducer';


function configureStore() {
  return createStore(
    reducers,
    // REDUX DEV TOOLS
    composeWithDevTools(),
  );
}

export default configureStore;
