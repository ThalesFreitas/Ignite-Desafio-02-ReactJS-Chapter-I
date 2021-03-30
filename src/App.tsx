 
 import {Provider} from 'react-redux' 
 import  SideBar  from './components/SideBar';
 import {Content} from './components/Content';
 
 import './styles/global.scss';
import store from './store';

export function App(){
  return (
    
      <div style={{ display: 'flex', flexDirection: 'row' }} >
      
        <Provider store={store}> 
         <SideBar/>
        <Content/>  
        </Provider>  

   </div>
 
  
  )
}