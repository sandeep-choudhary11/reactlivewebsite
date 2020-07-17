import React from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Search=(props)=>{

	const img=`https://source.unsplash.com/900x400/?${props.name}`;

		return(
				

			<>

				<div className="container th">

						<img src={img}alt="search"/>

				</div>
				
			</>		

				

		)
};

export default Search;