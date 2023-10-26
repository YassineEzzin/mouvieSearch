import React from 'react'
import Movie from './Movie'

function MovieListe({movie , search}) {
    return (
        <div style={{display:"flex" , justifyContent:"space-evenly"}} >
          {
            movie.filter((e)=>e.name.includes(search)).map((e)=> <Movie  e={e} />    )
          }
        </div>
      )
}

export default MovieListe
