import React from 'react';
import Menu from './Menu';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import Navbar from './Navbar';
import Search from './Search';
import './index.css';

import {Switch,Route,Redirect} from 'react-router-dom';

const App=()=>{


		return(

				<>

						<Navbar/>
					<Switch>

						<Route exact path='/' component={Home}/>

						<Route exact path='/contact'component= {Contact} />

						<Route exact path='/about' component={About}/>

						<Route exact path='/search' component={Search}/>

						<Redirect to="/" />



					</Switch>

				</>
			)
};

export default App;