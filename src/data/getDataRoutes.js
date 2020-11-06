const endpoint = 'https://raw.githubusercontent.com/SandraLarrosa/Biker-Girls-Spain/rutas/src/data/rutas.json';


const getDataRoutes = () => {
    return fetch(endpoint)
        .then((response) => response.json())
        
};

export default getDataRoutes

