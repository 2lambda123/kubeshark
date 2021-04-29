import React from 'react';
import {HarPage} from "./components/HarPage";
import './App.sass';

const App = () => {
  return (
      <div className="mizuApp">
        <div className="header">
            <div className="title">MIZU</div>
            <div className="description">Traffic viewer for Kubernetes</div>
        </div>
        <HarPage/>
      </div>
  );
}

export default App;