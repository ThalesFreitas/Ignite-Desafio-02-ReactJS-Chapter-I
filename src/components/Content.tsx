import { useEffect, useState} from 'react';
import {useSelector} from 'react-redux'

import { MovieCard } from '../components/MovieCard';

import { api } from '../services/api';
import { IState } from '../store';
import {GenreID} from '../store/modules/Sidebar/types';
import '../styles/content.scss';

 interface GenreResponseProps {
   id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
 }

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}




export function Content() {

  const sidebar = useSelector<IState,GenreID>(state => state.sidebar.genre_id);
    
   const selectedGenreId = sidebar || 1  

    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

    useEffect(() => {
            //Exibi os filmes buscados na api
            api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
              setMovies(response.data);
            });
        
            //Exibi a categoria dos filmes selecionados no genero
           api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
              setSelectedGenre(response.data);
            })
          }, [selectedGenreId]);

        return (
        
      <div className="container">
       
        
       <header>
         <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
       </header>

       <main>
         <div className="movies-list">
           {movies.map(movie => (
             <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
           ))}
         </div>
       </main>
     </div>
     
        )
 }