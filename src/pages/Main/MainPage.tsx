import { useState } from 'react';
import { Link } from 'react-router-dom';

import { getfilteredUsers } from '../../untils/getFilterMovies';

import { Card } from '../../components/Card';
import { Search } from '../../components/Search';
// import { Slider } from '../../components/Slider';

import type { MoviesResponse } from '../../api/movies/schema';

import classes from './Main.module.scss';

export function MainPage({
  data,
  count,
  year,
  age,
  countrie,
}: {
  data: MoviesResponse | undefined;
  count: (value: number) => void;
  year: (value: number) => void;
  age: (value: string) => void;
  countrie: (value: string) => void;
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleCountChange = (value: string) => {
    count(parseInt(value));
  };

  const handleYearChange = (query: string) => {
    year(parseInt(query));
  };

  const handleAgeChange = (query: string) => {
    age(query);
  };

  const handleCountrieChange = (query: string) => {
    countrie(query);
  };

  const filteredUsers = getfilteredUsers(data, searchQuery);

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Search
          placeholder="Выберете колличество фильмов на странице"
          onSearchChange={handleCountChange}
          type="number"
        />
        <Search
          placeholder="Поиск фильмов"
          onSearchChange={handleSearchChange}
          type="text"
        />
        <Search
          placeholder="Год фильмов"
          onSearchChange={handleYearChange}
          type="text"
        />
        <Search
          placeholder="Возрастной рейтинг фильмов"
          onSearchChange={handleAgeChange}
          type="text"
        />
        <Search
          placeholder="Страна фильмов"
          onSearchChange={handleCountrieChange}
          type="text"
        />
      </div>
      {/* <Slider>
        {filteredUsers &&
          filteredUsers.map((movie) => (
            <Link to={`movie/${movie.id}`} key={movie.id}>
              <Card movie={movie} />
            </Link>
          ))}
      </Slider> */}
      <ul className={classes.main}>
        {filteredUsers &&
          filteredUsers.map((movie) => (
            <li key={movie.id}>
              <Link to={`movie/${movie.id}`}>
                <Card movie={movie} />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
