import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import "../Card/card.css";
import propTypes from "prop-types";
import {Link} from "react-router-dom";



const Card = (props) => {	
	const name = props.data != undefined ? props.data.name : "";
	const url = props.data != undefined ? props.data.url : "";
	const uid = props.data != undefined ? props.data.uid : "";
	const [fav, setFav]= useState(false);
	
	

	const { store, actions } = useContext(Context); //para acceder al  appContext que mapea al objeto con store y action de flux
	
	const heartColor = fav? "far fa-solid fa-heart fa-lg" : "far fa-thin fa-heart fa-lg";

    return(
        
			<div className="card col-md-2 text-center mt-5">
				<img className="card-img-top img-card" src="https://res.cloudinary.com/dw4npwftd/image/upload/w_300,h_200/v1650963797/starwars_all_chp6yn.jpg"/>
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					
					<p className="web-card">{url}</p>
													
					<Link to={`/${props.type}/${uid}`} className="downcard">
						<button type="button" className="btn btn-dark btn-card" >Learn More!</button>
					</Link>
					<button className="button-heart" onClick={()=>{
							setFav(actions.toggleFavourite(name));
																	
					}}>
						<i className= {heartColor}></i>
						
					</button>
				</div>
			</div>
			
		
    )
};

Card.propTypes = {
	type: propTypes.string,
	name: propTypes.string,
	uid: propTypes.string,
}

export default Card;