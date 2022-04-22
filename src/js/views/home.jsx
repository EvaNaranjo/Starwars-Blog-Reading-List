import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { getFilms } from "../service/films.js";


//Components

// import Navbar from "../component/navbar.jsx"
import Card from "../component/card.jsx"
import { Navbar } from "../Layout/Navbar/Navbar.jsx";
import Description from "./description.jsx";


export const Home = () => {
	useEffect(() => {
		actions.loadCharacters()
		actions.loadPlanets()
	},[]);
	const { store, actions } = useContext(Context); //para acceder al  appContext que mapea al objeto con store y action de flux
	


	return(
	<div>
		
		<h1> Characters</h1>
		<div className="cardgroup">
			{
			store.characters.map((character,index)=> 	
			<Card key={character.uid} data={character}/> )
			}
		</div>
		<h1>Planets</h1>
		<div className="cardgroup">
			{
				store.planets.map((planet,index)=> 	
				<Card key={planet.uid} data={planet}/> )
			}
		</div>
		
		
	</div>
	);
};
