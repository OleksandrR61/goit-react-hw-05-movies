import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));


const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:movieId' element={<MovieDetails />} >
            <Route path='cast' element={<Cast />}/>
            <Route path='reviews' element={<Reviews />}/>
          </Route>
          <Route path='*' element={<Home />}/>
        </Routes>
      </Suspense>
    </Layout>
  );
};


export default App;