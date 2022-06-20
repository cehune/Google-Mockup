import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { Results } from './Results';
import {Search} from './Search';

export const Routers = () => {
  return (
    <div className="p-4">
        
        <Routes>
        <Route exact path="/" element={<Navigate to="/search" />}>one
        </Route>
        
        
        {["/search", "/image", "/video", "news"].map(path => (
    <Route 
      exact
      path={path}
      element={<Results />}
    />))}
       
          
          {/*<Route exact path="/">
            <Navigate to="/search" />
          </Route>
          <Route exact path ={['/search', '/images', '/news', '/videos']}>
            <Results />
  </Route>*/}
          
        </Routes>
    </div>
  )
}
