import React, { useState } from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './routes/Home';
import Result from './routes/Result'
import Header from './components/Header';


function App() {
	const [result, setResult] = useState<string>("");


	return (
    	<div className="App">
			<Header/>
      		<Router>
        		<Routes>
					<Route
						path={"/"} 
						element={<Home setResult={setResult} />} 
					/>
					<Route 
						path={"/result"} 
						element={<Result result={result} />}
					/>
        		</Routes>
      		</Router>
        </div>
	);
}

export default App;
