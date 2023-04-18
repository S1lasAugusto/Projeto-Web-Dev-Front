import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FeaturedMovie from '../../components/FeaturedMovie';
import Header from '../../components/Header';

export const MovieDetails = () => {
  const location = useLocation();
  const [item, setItem] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  

  useEffect(() => {
    const storedItem = localStorage.getItem('movieSelected');
    if (storedItem) {
      setItem(JSON.parse(storedItem));
    }
  }, []);

  return (
    <div>
      <Header black={blackHeader} />
    <FeaturedMovie item={item} truncateDescription={false} />
  </div>
  );
};
