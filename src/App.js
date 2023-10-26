
import { useState } from 'react';
import MovieListe from './component/MovieListe';
import Search from './component/Search';
import "./index.css"
function App() {

const [search,setSearch]=useState("")


  const movie = [
    { 
      id:1,
      name:"The Godfather ",
      rate:9.2,
      date:1972,
      imgUrl:"https://socialist.net/wp-content/uploads/2022/08/godfather.png.webp"
    },
    { 
      id:2,
      name:"Red hair",
      rate:9.5,
      date:2022,
      imgUrl:"https://static.animecorner.me/2021/11/shanks-movie-one-piece-red-1024x535.jpg"
    },

  ]
  return (
    <div className="App">
      <Search  setSearch={setSearch}  />
      <MovieListe movie={movie} search={search}   />
    </div>
  );
}

export default App;
