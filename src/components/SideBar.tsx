import { useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux'

import { Button } from '../components/Button';

import { api } from '../services/api';

import '../styles/sidebar.scss';
import { addGenre } from '../store/modules/Sidebar/actions';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}


 function  SideBar() {
  const dispatch = useDispatch();

 const [selectedGenreId, setSelectedGenreId] = useState(1);
 
 const [genres, setGenres] = useState<GenreResponseProps[]>([]);


 //Busca os generos na api e  adiciona em cada botão
 useEffect(() => {
   api.get<GenreResponseProps[]>('genres').then(response => {
     setGenres(response.data);
   });
   
 }, []);
 
  function handleClickButton(id: number) {
   setSelectedGenreId(id);
   handleAddGenre(id)   
  }
 
  const handleAddGenre = useCallback((selectedGenreId) => {
    dispatch(addGenre(selectedGenreId))
  }, [dispatch])

 return (
   
   <div >
     <nav className="sidebar">
       <span>Watch<p>Me</p></span>
       <div className="buttons-container">
         {genres.map(genre => (
           <Button
             key={String(genre.id)}
             title={genre.title}
             iconName={genre.name}
             onClick={() => handleClickButton(genre.id)}
             selected={selectedGenreId === genre.id}
           />
         ))}
       </div>
      
     </nav>
   </div>
 )
}

export default SideBar;





