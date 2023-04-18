import React from 'react';
import { useContext } from 'react';
import Header from '../../components/Header';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faIdCard } from '@fortawesome/free-solid-svg-icons';

export const Profile = () => {
  const auth = useContext(AuthContext);
  const profileUser = auth.user;

  return (
    <div>
      <Header />
      <div className="profile--container">
        <h2 className="profile--title">Perfil de {profileUser.name}</h2>
        <div className="profile--info">
          <p className="profile--info__item">
            <FontAwesomeIcon icon={faUser} /> {profileUser.name}
          </p>
          <p className="profile--info__item">
            <FontAwesomeIcon icon={faEnvelope} /> {profileUser.email}
          </p>
          <p className="profile--info__item">
            <FontAwesomeIcon icon={faIdCard} /> {profileUser.id}
          </p>
        </div>
        <div className="profile--movies">
  <h3 className="profile--movies__title">Filmes avaliados:</h3>
  {/* Aqui virá a lista de filmes avaliados pelo usuário */}
</div>
<div className="profile--movies">
  <h3 className="profile--movies__title">Filmes para assistir depois:</h3>
  {/* Aqui virá a lista de filmes que o usuário quer assistir depois */}
</div>

      </div>
    </div>
  );
};
