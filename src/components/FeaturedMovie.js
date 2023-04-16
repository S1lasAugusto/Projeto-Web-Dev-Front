/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './FeaturedMovie.css'

import PlayIcone from './icons/play.svg';
import PlusIcone from './icons/plus.svg';

export default ({item}) => {
  console.log(item)

  let firtsDate = new Date(item.first_air_date);
  let genres = [];
  for(let i in item.genres) {
    genres.push( item.genres[i].name );
  }

  let description = item.summary;
  if(description.length > 200) {
    description = description.substring(0, 200)+'...';
  }

  return (
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url('https://image.tmdb.org/t/p/original${item.imagePath}')`
    }}>
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.title}</div>
          <div className="featured--info">
            <div className="featured--points">{item.voteAverage} pontos</div>
          </div>
          <div className="featured--description">{description}</div>
          <div className="featured--buttons">
              <a href={`/watch/${item.id}`} className="featured--mylistbutton"><img src={PlusIcone} alt="adicionar"/> Minha Lista</a>
          </div>
        </div>
      </div>
    </section>
  )
}