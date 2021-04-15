//API giphy
const apikey = AY3f2AfS7Px1VqJZaaNlHxxJ62gphfOA;

//Funcion buscador
function search(){
    async function newsSearch(q) {
        let url = `api.giphy.com/v1/gifs/search${q}&appid=${apikey}`;
        const resp = await fetch(url);
        const info = await resp.json();
        return info;
    }
}



//let errorMsg = document.createElement('p')
//element.innerHTML = "Intenta con otra búsqueda."; 

// https://developers.giphy.com/docs/api/endpoint#search-suggestions