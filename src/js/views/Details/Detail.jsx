import React, { useState, useEffect} from "react";
import "../Details/detail.css";
import propTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const Detail=()=> {
    const {uid} = useParams();
    const {type} =useParams();      
    const [charact,setChar]=useState([]);
    const [planet,setPLanet]=useState([]);
    const [vehic,setVehic]=useState([]);
   
         
    useEffect(() => {
		       
        fetch('https://www.swapi.tech/api/'+type+"/"+uid)
            .then(resp => resp.json())
            .then((data) => {
                console.log(data)
                if(type =="people"){
                    setChar(data.result.properties)                
                }else if (type == "planets"){
                    setPLanet(data.result.properties)
                }else if (type == "starships"){
                    setVehic(data.result.properties)
                }              
                
            })         
    },[]);
    
        if (type == "people"){
            if (charact == undefined)
                {return ""}        
            else {
                return(
                <div>                            
                    <h2>{charact.name}</h2> 
                    <div className="tableContainer">
                        <table className="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Birth Year</th>
                                    <th scope="col">Height</th>
                                    <th scope="col">Mass</th>
                                    <th scope="col">Hair color</th>
                                    <th scope="col">Skin color</th>
                                    <th scope="col">Eye color</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{charact.gender}</td>
                                    <td>{charact.birth_year}</td>
                                    <td>{charact.height}</td>
                                    <td>{charact.mass}</td>
                                    <td>{charact.hair_color}</td>
                                    <td>{charact.skin_color}</td>
                                    <td>{charact.eye_color}</td>
                                </tr>
                            </tbody> 
                        </table>              
                    </div>               
                    <Link to="/">
                        <span className="btn btn-secondary btn-detail btn-home" href="#" role="button">
                            Back home
                        </span>
                    </Link>
                </div>                        
            )};
        } else if (type == "planets"){
            if (planet == undefined)
                {return ""}        
            else {
                return(
                    <div>    
                        <h2>{planet.name}</h2> 
                        <div className="tableContainer">
                            <table className="table table-dark table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Diameter</th>
                                        <th scope="col">Rotation Period</th>
                                        <th scope="col">Orbital Period</th>
                                        <th scope="col">Gravity</th>
                                        <th scope="col">Population</th>
                                        <th scope="col">Climate</th>
                                        <th scope="col">Terrain</th>
                                        <th scope="col">Surface Water</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{planet.diameter}</td>
                                        <td>{planet.rotation_period}</td>
                                        <td>{planet.orbital_period}</td>
                                        <td>{planet.gravity}</td>
                                        <td>{planet.population}</td>
                                        <td>{planet.climate}</td>
                                        <td>{planet.terrain}</td>
                                        <td>{planet.surface_water}</td>
                                    </tr>
                                </tbody>                            
                            </table>              
                        </div>               
                        <Link to="/">
                            <span className="btn btn-secondary btn-detail btn-home" href="#" role="button">
                                Back home
                            </span>
                        </Link>
                    </div>                

                )
            };
        }else if (type == "starships") {
            if (planet == undefined)
                 {return ""}        
            else {            
                return(
                    <div>    
                        <h2>{vehic.model}</h2> 
                        <div className="tableContainer">
                            <table className="table table-dark table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Class</th>
                                        <th scope="col">Manufacturer</th>
                                        <th scope="col">Cost</th>
                                        <th scope="col">Length</th>
                                        <th scope="col">Crew</th>
                                        <th scope="col">Passengers</th>
                                        <th scope="col">Max. atmosphering speed</th>
                                        <th scope="col">Hiperdrive Rating</th>
                                        <th scope="col">MGLT</th>
                                        <th scope="col">Cargo capacity</th>
                                        <th scope="col">Consumables</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{vehic.starship_class}</td>
                                        <td>{vehic.manufacturer}</td>
                                        <td>{vehic.cost_in_credits}</td>
                                        <td>{vehic.length}</td>
                                        <td>{vehic.crew}</td>
                                        <td>{vehic.passengers}</td>
                                        <td>{vehic.max_atmosphering_speed}</td>
                                        <td>{vehic.hyperdrive_rating}</td>
                                        <td>{vehic.MGLT}</td>
                                        <td>{vehic.cargo_capacity}</td>
                                        <td>{vehic.consumables}</td>
                                    </tr>
                                </tbody>                            
                            </table>              
                        </div>               
                        <Link to="/">
                            <span className="btn btn-secondary btn-detail btn-home" href="#" role="button">
                                Back home
                            </span>
                        </Link>
                        
                    </div>                           
                )};
            }
};



Detail.propTypes ={
    data:propTypes.object,
    type: propTypes.string,  
}

export default Detail;