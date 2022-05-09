const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets:[],
			vehicles:[],
			favourites:[],		
			
		},
		actions: {		
			
			loadCharacters: () => {				
				fetch("https://www.swapi.tech/api/people")
					.then(resp => resp.json())
					.then((data) => {
						const store =getStore();
						setStore({...store, characters:data.results})
						console.log(store)
					})
			},
			
			loadPlanets: () => {				
				fetch("https://www.swapi.tech/api/planets")
					.then(resp => resp.json())
					.then((data) => {
						const store =getStore();
						setStore({...store, planets:data.results})
						console.log(store)
					})
			},

			loadVehicles: () => {				
				fetch("https://www.swapi.tech/api/vehicles")
					.then(resp => resp.json())
					.then((data) => {
						const store =getStore();
						setStore({...store, vehicles:data.results})
						console.log(store)
					})
			},
			
			addFavourites: (name) => {
				const store=getStore();
				setStore({...store,favourites:[...store.favourites,name]});				
			
			},

			toggleFavourite :(name) => {
				// cambio del estado de favorito del name y devuelve el nuevo estado de favorito
				const store=getStore();
				const actions=getActions();
				const isFavourite=store.favourites.includes(name);
				console.log(isFavourite);
								
				if (isFavourite){
					actions.deleteFavourites(name);
					return false; 
				} else {
					actions.addFavourites(name);
					return true;
				}				
			},

			deleteFavourites: (name) => {
				const store = getStore();
				setStore({...store, favourites:[...store.favourites.filter((item) => item != name)]})
							
			}			
		}
	};
};

export default getState;
