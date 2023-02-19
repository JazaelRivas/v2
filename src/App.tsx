import React from 'react';
import { Route , Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { Section2 } from './sections';
import "./app.scss";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/section2" element={<Section2 />}></Route>
        </Routes>
    </div>
  );
}

export default App;
