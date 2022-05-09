import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext.js";
import logo from "../../../img/logo.png";
import "./navbar.css"

export const Navbar = () => {	

	const { store, actions } = useContext(Context);

	// console.log("favourites: "+store.favourites)
	// console.log("num fav:"+store.favourites.length)
	

	return (
		<nav className="navbar navbar-light bg-light mb-3" 	
			style={{  
				backgroundImage: "url(" + "https://res.cloudinary.com/dw4npwftd/image/upload/v1650964513/star-wars-backgrounds-25_lauoob.jpg" + ")",
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'repeat'
			}}>
			<Link to="/"><img src={logo} alt="Logo" /></Link>

			
			<li className="nav-item dropdown">
				<button className=" dropdown-toggle btn-danger favourites " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favourites
					<span className="badge bg-danger">{store.favourites.length}</span>
				</button>
				<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
					{store.favourites.map((item,index)=>{
						return <div key={index}>
									<li className="dropdown-item" href="#">{item} 
										<button className= "button-delete" onClick={()=>actions.deleteFavourites(item)}>
											<i className="fa fa-trash"></i>
										</button> 
									</li>
								</div>
					})}
				</ul>
        	</li>
		</nav>
	);

};


