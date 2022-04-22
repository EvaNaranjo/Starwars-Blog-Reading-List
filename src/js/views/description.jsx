import React, { useState, useEffect } from "react";
import "../../styles/description.css";
import propTypes from "prop-types";
import { useParams } from "react-router-dom";

const Description=(props)=> {
    const {id} = useParams();
    console.log("id", id); 

    const [char, setChar] = useState({})

  
    useEffect(() => {
		actions.loadCharacterDetails()
	},[]);

    if (char == undefined){return ""} 
    return(
        <div className="container">
            <h2>{char.properties.name}</h2>
            <p>{char.description}</p>
            <table class="table table-striped">
            <   thead>
                    <tr>
                        <th scope="col">Gender</th>
                        <th scope="col">Height</th>
                        <th scope="col">Mass</th>
                        <th scope="col">Hair color</th>
                        <th scope="col">Skin color</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>

  ...
            </table>
            <Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>

        </div>
        
    )


}


Description.propTypes ={
    data:propTypes.object,
}

export default Description;