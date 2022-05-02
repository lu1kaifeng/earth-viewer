import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {SatLayer} from "./gis/Layers";

const StoreDemo = React.lazy(() => import("./pages/GeoViewer"));

function App() {
  return (
      <Routes>
          <Route path="/" element={<React.Suspense fallback={<div>loading</div>}>
            <StoreDemo />
        </React.Suspense>} />
      </Routes>
  );
}

export default App;
