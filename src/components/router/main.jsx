import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, About, Contact } from '../pages';

export const Main = () => {
  return (
    <Routes>
      <Route exact path='/abdus-portfolio-app-in-react' element={<Home />} />
      <Route path='/abdus-portfolio-app-in-react/about' element={<About />} />
      <Route path='/abdus-portfolio-app-in-react/contact' element={<Contact />} />
    </Routes>
  )
}
