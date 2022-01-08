import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, About, Contact } from '../pages';

export const Main = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}
