import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Home, Info } from './Routes';
import Header from './components/Header';
import './App.css';
import SideBar from './components/SideBar';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Router>
					<SideBar>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</SideBar>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={Info} />
				</Router>
			</div>
		);
	}
}

export default App;
