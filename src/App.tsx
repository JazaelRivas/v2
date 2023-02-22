import React from 'react';
import { Route , Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { Section2 } from './sections';
import { Passions , Inspirations , Contact } from './pages';
import "./app.scss";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/section2" element={<Section2 />}></Route>
          <Route path='/passions' element={<Passions/>}>
              <Route></Route>
          </Route>
          <Route path='/inspirations' element={<Inspirations/>}>
              <Route></Route>
          </Route>
          <Route path='/contact' element={<Contact/>}>
              <Route></Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
