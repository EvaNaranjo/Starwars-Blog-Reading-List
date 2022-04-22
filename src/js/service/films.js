
export const getFilms =() => {
    return fetch (
        "https://www.swapi.tech/api/",
        {method: "GET"}
    );
};