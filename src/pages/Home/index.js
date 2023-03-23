import React, { useEffect, useState } from "react";
import "../../App.css";
import { useHomeList } from "../../hooks/Tmdb";
import MovieRow from "../../components/MovieRow";
import FeaturedMovie from "../../components/FeaturedMovie";
import Header from "../../components/Header";

export const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  const getMovieList = useHomeList;

  useEffect(() => {
    const loadAll = async () => {
      // pegando a lista TOTAL
      let list = await getMovieList();
      setMovieList(list);

      // Pegando o Featured
      //let originals = list.filter((i) => i.slug === "originals");
      console.log(list);
      let randomChosen = Math.floor(
         Math.random() * (list[0].items.length - 1)
      );
      let chosen = list[0].items[randomChosen];
      //console.log(chosen);
      setFeaturedData(chosen);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Direitos de imagem para Netflix
        <br />
        Dados pegos do site Themoviedb.org
      </footer>

      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2000,c_limit/Netflix_LoadTime.gif"
            alt="Carregando"
          />
        </div>
      )}
    </div>
  );
};
