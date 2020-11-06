const endpoint = './rutas.json';


const getDataRoutes = () => {
    return fetch(endpoint)
        .then((response) => response.json())
        
};

export default getDataRoutes

