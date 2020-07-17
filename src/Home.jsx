import React from 'react';
import {useState} from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Search from './Search';



const Home=()=>{
const [img, setimg]=useState("");

const inputEvent=(event)=>{

	const data=event.target.value;

	setimg(data);
	
};

		return(


			<>
				<h3 className="text-center mt-2">Search Anything..What you Want</h3>

			<section className="m-5 www">
				
				
				
		<input type="text" class="form-control" placeholder="Search Anything.." value={img} onChange={inputEvent}/>
					
			


				</section>

				{img === "" ? null :<Search name={img}/> }

			</>		

				

		)
};

export default Home;