import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import { Layout } from "./Layout"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/search/:query" element={<Results/>}/>
            <Route path="/news/:id" element={<NewsDetail/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
