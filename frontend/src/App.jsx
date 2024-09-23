import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import DeleteBook from './pages/DeleteBook';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
export default function App() {
  return (
    <Routes>
      <Route path = '/' element ={<Home/>}></Route>
      <Route path = '/books/create' element= {<CreateBook/>}></Route>
      <Route path = '/books/details/:id' element= {<ShowBook/>}></Route>
      <Route path = '/books/edit/:id' element= {<EditBook/>}></Route>
      <Route path = '/books/delete/:id' element= {<DeleteBook/>}></Route>
   </Routes>
  )
}
