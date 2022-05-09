import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import "../Home/home.css";

//Components

import Card from "../../component/Card/Card.jsx"



export const Home = () => {	
		
	useEffect(() => {		
		actions.loadCharacters()
		actions.loadPlanets()
		actions.loadVehicles()
		
	},[]);
	const { store, actions } = useContext(Context); //para acceder al  appContext que mapea al objeto con store y action de flux
	
	return(	
			
		<div className="container-home">			
			<h1> Characters</h1>			
			<div className="cardgroup">
				{
				store.characters.map((character,index)=> 	
				<Card key={character.uid} data={character} type="people" id={character.uid}/> )
				}
			</div>
			<h1>Planets</h1>
			<div className="cardgroup">
				{
					store.planets.map((planet,index)=> 	
					<Card key={planet.uid} data={planet} type="planets"/> )
				}
			</div>
			<h1>Vehicles</h1>
			<div className="cardgroup">
				{
					store.vehicles.map((vehicle,index)=> 	
					<Card key={vehicle.uid} data={vehicle} type="starships"/> )
				}
			</div>			
		</div>
			
	);
};
