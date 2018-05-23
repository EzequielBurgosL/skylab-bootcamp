import React, {Component} from 'react'
import propTypes from 'prop-types'
import { Movie } from './Movie'

export class MoviesList extends Component  {
    static propTypes = {
        movies: propTypes.array
    }

    render(){

            const { movies } = this.props
            return 
            <div className="MoviesList">{

            
            movies.map(movie =>
              <Movie 
                key={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
              />
            )
          })   
          </div>
    }
}