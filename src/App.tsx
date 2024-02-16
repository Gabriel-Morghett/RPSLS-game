import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './routes/Home';
import Result from './routes/Result'



function App() {
	return (
    	<div className="App">
      		<Router>
        		<Routes>
					<Route path={"/"} element={<Home />} />
					<Route path={"/result"} element={<Result />} />
        		</Routes>
      		</Router>
        </div>
	);
}

export default App;
