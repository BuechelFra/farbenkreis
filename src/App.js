import React, { Component } from 'react';
import './App.css';
import ColorGradient from './components/ColorGradient';
import ColorPieChart from './components/ColorPieChart';
import { goetheData } from './data/goethe';
import { stormData } from './data/storm';
import { traklData } from './data/trakl';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ColorGradient text="Goethe" data={goetheData}/>
                <ColorGradient text="Storm" data={stormData}/>
                <ColorGradient text="Trakl" data={traklData}/>
                <ColorPieChart data={goetheData}/>
                <ColorPieChart data={stormData}/>
                <ColorPieChart data={traklData}/>
            </div>
        );
    }
}

export default App;
