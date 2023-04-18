import React, { useState, useEffect } from 'react';
import './FeaturedMovie.css'

import PlayIcone from './icons/play.svg';
import PlusIcone from './icons/plus.svg';

export default ({ item, truncateDescription = true}) => {
  if (!item) {
    return <div>Carregando...</div>;
  }

  const isList = Array.isArray(item);
  let genres = [];

  if (isList) {
    for (let i in item.genres) {
      genres.push(item.genres[i].name);
    }
  }

  let description = item.summary;
  if (truncateDescription && description.length > 200) {
    description = description.substring(0, 200)+'...';
  }

  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    const movieIds = movies.map(movie => movie.id);
    setIsAdded(movieIds.includes(item.id));
  }, [item.id]);

  const handleAddMovie = () => {
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    if (!movies.some(movie => movie.id === item.id)) {
      movies.push(item);
      localStorage.setItem('movies', JSON.stringify(movies));
      setIsAdded(true);
    }
  };

  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url('https://image.tmdb.org/t/p/original${item.imagePath}')`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.title}</div>
          <div className="featured--info">
            <div className="featured--points">{item.voteAverage.toFixed(2)} pontos</div>
          </div>
          <div className="featured--description">{description}</div>
          <div className="featured--buttons">
            <button 
              className="featured--mylistbutton" 
              disabled={isAdded} 
              onClick={handleAddMovie}
            >
              <img src={PlusIcone} alt="assistir" /> 
              {isAdded ? "Filme Adicionado" : "Assistir mais tarde"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
