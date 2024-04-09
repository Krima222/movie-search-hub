import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useMovies } from '../api/movies/useMovies';

import { MainPage } from '../pages/Main/MainPage';
import { SingleMoviePage } from '../pages/SingleMoviePage/SingleMoviePage';
import { useState } from 'react';

export function App() {
  const [count, setCount] = useState(10);
  const [year, setYear] = useState(2000);
  const [age, setAge] = useState('12-18');
  const [countrie, setCountrie] = useState('Россия');
  const { data } = useMovies({
    count,
    year,
    age,
    countrie,
  });

  console.log(data);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              data={data}
              count={setCount}
              year={setYear}
              age={setAge}
              countrie={setCountrie}
            />
          }
        />
        <Route path="/movie/:movieid" element={<SingleMoviePage />} />
      </Routes>
    </Router>
  );
}
