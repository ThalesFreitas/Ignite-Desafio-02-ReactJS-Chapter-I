import {createStore} from 'redux';
import rootReducer from './modules/rootReducer';
import { GenreResponse} from './modules/Sidebar/types';

 export interface IState {
     sidebar :{
     genre_id: GenreResponse
     }
  }

const store = createStore(rootReducer);

export default store;