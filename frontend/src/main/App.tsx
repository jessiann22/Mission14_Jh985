import React from 'react';
import './App.css';
import MovieList from '../pages/MovieCollection';
import Home from '../pages/Home';
import Bacon from '../pages/Podcasts';
import Layout from '../pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList2 from '../movies/MovieList';

// App.tsx all functions and links bb

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="Layout" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="MovieCollection" element={<MovieList />} />
          <Route path="Podcast" element={<Bacon />} />
          <Route path="MovieList" element={<MovieList2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;