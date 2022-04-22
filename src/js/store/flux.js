const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets:[],
			favourites:[]
		},
		actions: {

			readLater:() =>{

			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadCharacters: () => {
				
				fetch("https://www.swapi.tech/api/people")
					.then(resp => resp.json())
					.then((data) => {
						const store =getStore();
						setStore({...store, characters:data.results})
						console.log(store)
					})
					
				
			},

			loadCharacterDetails: (id) => {
				fetch("https://www.swapi.tech/api/people/"+id)
					.then(resp => resp.json())
					.then((data) => {
						setChar(data.result)
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

			loadPlanetDetails: () => {
				fetch("https://www.swapi.tech/api/planets/"+id)
					.then(resp => resp.json())
					.then((data) => {
						setChar(data.result)
					})
					
			},	
			
		}
	};
};

export default getState;
