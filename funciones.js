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
async function getTrending() {
    let urlTrend = 'https://api.giphy.com/v1/gifs/trending?api_key='+apikey+'&limit=12';
    const resp = await fetch(urlTrend);
    const info = await resp.json();
    return info;
};

let gif = getTrending();

gif.then (info => {
    for(let i=0;i<info.lenght;i++){
        let gif = document.createElement('img');
        gif.setAttribute("src", info[i].data.images.original.url);
        gifosImg.appendChild(gif);
    }
    
}).catch(err =>{
       console.error("Error", err);
})
    



