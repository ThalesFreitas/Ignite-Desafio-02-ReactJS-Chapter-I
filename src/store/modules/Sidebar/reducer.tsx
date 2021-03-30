
import {Reducer} from 'redux'
import {ICartState} from './types'

   const INITIAL_STATE: ICartState = {
    items: []
   };

const sidebar: Reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
     case 'ADD_GENRE': {
       const {genre_id} = action.payload; 
       return {
                genre_id,
                
       };
       
     }
     default: {
        return state;
     }
  }
   
}

export default sidebar;

 
