import React from "react"
import "../../styles/card.css";
import propTypes from "prop-types";
import {Link} from "react-router-dom";



const Card = (props) => {	
	const name = props.data != undefined ? props.data.name : "";
	const url = props.data != undefined ? props.data.url : "";
	const uid = props.data != undefined ? props.data.uid : "";
	const gender = props.data != undefined ? props.data.gender : "";
	const hairColor = props.data != undefined ? props.data.hair_color : "";
	const eyeColor =  props.data != undefined ? props.data.eye_color : "";

    return(
        
			<div className="card col-md-2 text-center mt-5">
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p>{url}</p>
					{/* <p>Gender: {gender}</p>
					<p>Hair color: {hairColor}</p>
					<p>Eye color: {eyeColor}</p> */}

					{/* <p className="card-text">{url}</p> */}
					<Link to={"/character/" + uid} className="downcard">
						<button type="button" className="btn btn-outline-primary btn-card">Learn More!</button>
					</Link>
					<span><i className="far fa-heart fa-lg fa-border"></i></span>
				</div>
			</div>
			
		
    )
};

Card.propTypes={
	data:propTypes.object,
}

export default Card;