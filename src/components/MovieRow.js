/* eslint-disable import/no-anonymous-default-export */
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext"; 
import './MovieRow.css';
import { useNavigate } from "react-router-dom";

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



export default ({title, items, handleMovieClick}) => {
  const [scrollX, setScrollX] = useState(0)
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleLeftArrow = () => {
      let x = scrollX + Math.round(window.innerWidth / 2);
      if(x > 0) {
        x = 0;
      }
      setScrollX(x)
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    let listW = items.length * 150;
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60;
    }
    setScrollX(x)
  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{fontSize: 50}} />
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{fontSize: 50}} />
      </div>
      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{
          marginLeft: scrollX,
          width: items.length * 150
        }}>
          {items.length > 0 && items.map((item, key) => (
          <div key={key} className="movieRow--item" onClick={() => handleMovieClick(item)}>
              <img src={`https://image.tmdb.org/t/p/w300${item.imagePath}`} alt={item.title} key={key} />
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}