import { Routes, Route } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';
import NotFound from 'pages/NotFound/NotFound';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:movieId' element={<MovieDetails />} />
        <Route path='/movies/:movieId/cast' element={<Cast />}/>
        <Route path='/movies/:movieId/reviews' element={<Reviews />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Layout>
  );
};
