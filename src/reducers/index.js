import { combineReducers } from 'redux';
import delegates from './delegates';
import navigation from './navigation';
import resources from './resources';
import resource from './resource';

export default combineReducers({
  delegates,
  navigation,
  resources,
  resource,
});
