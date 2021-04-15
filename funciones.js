const apikey = 'AY3f2AfS7Px1VqJZaaNlHxxJ62gphfOA';

//funcion trending
let gifosImg = document.getElementById('gifosImg');

/* OPCION 1 TRENDING
getTrending(urlTrending+apikey+'&limit=12')

function getTrending(url){
    fetch(url);
        .then(response => response.json())
        .then(json => {
            for(let i=0;i<json.data.lenght;i++){
                let gif = document.createElement('img');
                gif.setAttribute("src", json.data[i].images.original.url);
                gifosImg.append(gif);
            }
    })
    .catch(err =>{
       console.error("Error",err);
    })
    
}
*/

/* EJEMPLO CLASE
let imgCtn = document.getElementById('imgCtn');

async function getDogImg() {
    let url = "https://dog.ceo/api/breeds/image/random";
    const resp = await fetch(url);
    const data = await resp.json();
    return data
};
let dog = getDogImg();
dog.then(data => {
    let dogImg = document.createElement('img');
    dogImg.setAttribute('src', data.message);
    dogImg.style.width = '300px';
    imgCtn.appendChild(dogImg);
    console.log(data);
}).catch(err => {
    console.error('fetch failed', err);
})
*/

// OPCION CON AWAIT
function trending() {
    
    async function getTrending() {
        let urlTrend = 'https://api.giphy.com/v1/gifs/trending?api_key='+apikey+'&limit=12';
        const resp = await fetch(urlTrend);
        const info = await resp.json();
        return info;
    };
    let gif = getTrending();
            
    gif.then (info => {
        let data = info.data;
        for(let i=0;i<data.lenght;i++){
            console.log('Entre')
            let gif = document.createElement('img');
            gif.setAttribute("src", data[0].images.original.url);
            console.log(data[0].images.original.url);
            gifosImg.appendChild(gif);
        
            
        }
    
    }).catch(err =>{
       console.error("Error", err);
    })

}

trending();

//Trending topics
let trendingTopic = document.getElementById('trendingTopic');

function topicsTrending() {
    async function getTopicTrend() {
        let urlTopicTrend = 'https://api.giphy.com/v1/trending/searches?api_key='+apikey;
        const resp = await fetch(urlTopicTrend);
        const info = await resp.json();
        return info;
    };

    let textTopicTrend = getTopicTrend();

    textTopicTrend.then (info =>{
        for (let i = 0; i < info.length; i++) {
            let text = document.createElement('p');
            trendingTopic.appendChild(text);
            
        }
    })
}

topicsTrending()

//Funcion buscador
let searchInput = document.getElementById('searchBox');
let searchButton = document.getElementById('searchButton');
let results = document.getElementById('results');

function search(){
    async function newsSearch(q) {
        let url = `https://api.giphy.com/v1/gifs/search${q}&appid=${apikey}`;
        const resp = await fetch(url);
        const info = await resp.json();
        return info;
    }
    let valueSearch = newsSearch(searchInput.value);
    valueSearch.then(response => {
        console.log(response);
        //crear div con gifs
        //if value =! response let errorMsg = document.createElement('p')
        //element.innerHTML = "Intenta con otra búsqueda."; 
    }).catch(error => {
        console.log(error);
    })

}
searchButton.addEventListener('click', ()=>{
    search();
})
searchInput.addEventListener('keyup', ()=> {
    if (event.which === 13 || event.keyCode == 13) {
        search();
    }
})

/* EJEMPLO CLASE
function search(){
    //Fetch con async await
    async function newsSearch(city_name) {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}`;
        const resp = await fetch(url);
        const info = await resp.json();
        return info;
    }
    let info = newsSearch(searchInput.value);
    info.then(response => {
        console.log(response);
        results.textContent = `Clima: ${response.weather[0].main}, Temperatura:  ${response.main.temp} °K`
    }).catch(error => {
        console.log(error);
    })
}

searchBtn.addEventListener('click', ()=>{
    search();
})
searchInput.addEventListener('keyup', ()=> {
    if (event.which === 13 || event.keyCode == 13) {
        search();
    }
})
*/

//FUNCION SUGERENCIAS https://developers.giphy.com/docs/api/endpoint#search-suggestions






