
// export function App() {
//  const [selectedGenreId, setSelectedGenreId] = useState(1);

//  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

//  const [movies, setMovies] = useState<MovieProps[]>([]);
//  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

//  //Busca os generos na api
//  useEffect(() => {
//    api.get<GenreResponseProps[]>('genres').then(response => {
//      setGenres(response.data);
//    });
//  }, []);

//  //Busca os filmes na api
//  useEffect(() => {
//    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
//      setMovies(response.data);
//    });

//    //Seta os filmes de acordo com o genero
//    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
//      setSelectedGenre(response.data);
//    })
//  }, [selectedGenreId]);

 
//  function handleClickButton(id: number) {
//    setSelectedGenreId(id);
//  }

//  return (
//    <div style={{ display: 'flex', flexDirection: 'row' }}>
    
//      <nav className="sidebar">
//        <span>Watch<p>Me</p></span>
//        <div className="buttons-container">
//          {genres.map(genre => (
//            <Button
//              key={String(genre.id)}
//              title={genre.title}
//              iconName={genre.name}
//              onClick={() => handleClickButton(genre.id)}
//              selected={selectedGenreId === genre.id}
//            />
//          ))}
//        </div>

//      </nav>

//      <div className="container">
//        <header>
//          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
//        </header>

//        <main>
//          <div className="movies-list">
//            {movies.map(movie => (
//              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
//            ))}
//          </div>
//        </main>
//      </div>
//    </div>
//  )
// }