import { useData } from '../hooks/useData';

import { Layout } from './Layout/Layout';
import { Card } from './Card/Card';

export function App() {
  const { movies } = useData(10);
  console.log(movies);

  return (
    <Layout>
      <div>
        <ul>
          {movies &&
            movies.map((movie) => <Card key={movie.id} user={movie} />)}
        </ul>
      </div>
    </Layout>
  );
}
