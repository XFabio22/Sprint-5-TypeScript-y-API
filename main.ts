// ERRORE INTENTE HACER UN MAP Y DABA ERROR PORQUE NO DEVOLVIA UNA ARRAY 
// NOTAS que arranque con un chiste y sacar el interface de la funcion cargar chiste 

let antesDeReportar:any[] = [];
let reportJoke:any[] = [];

let fechaActual = new Date;
cargarTemperaturas();
async function cargarChistes() {
    const API_URL = "https://icanhazdadjoke.com/";
    let API_URL_CHUCK = "https://api.chucknorris.io/jokes/random";
    let confiApi = {
        headers: { 
            Accept: "application/json",
        },
    };
    let jokesZ:any  =  await fetch(API_URL, confiApi) 
    let jokes:any = await jokesZ.json();


   
    let confiApi3 = {
    headers: { 
        Accept: "application/json",
    },
};

  let chuckJokes:any = await fetch( API_URL_CHUCK,confiApi3);
  let jokes2:any = await chuckJokes.json();

  let apiRandom =Math.floor(Math.random());
  let resultado = apiRandom ? jokes.joke : jokes2.value; 
  let element:any = document.getElementById('joke');
  element.innerHTML = resultado;
  let ObjJoke = {
    date: fechaActual,
    joke: resultado,
    score: 0,
  };

  antesDeReportar.push(ObjJoke);
}
async function cargarTemperaturas(){
    let API_URL_TEMP ="http://api.weatherapi.com/v1/current.json?key=74b79570c166486883b85428221407&q=Barcelona&aqi=no";
    let confiApi2={
      headers:{
        "Transfer-Encoding": "chunked",
        "Connection": "keep-alive",
        "Vary": "Accept-Encoding",
        "CDN-PullZone": "93447",
        "CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
        "CDN-RequestCountryCode": "GB",
        "CDN-ProxyVer": "1.02",
        "CDN-RequestPullSuccess": "True",
        "CDN-RequestPullCode": "200",
        "CDN-CachedAt": "07/15/2022 23:19:46",
        "CDN-EdgeStorageId": "752",
        "CDN-Status": "200",
        "CDN-RequestId": "0b24f89fabca4370fd07868e18fb9c75",
        "CDN-Cache": "MISS",
        "Cache-Control": "public, max-age=180",
        "Content-Type": "application/json",
        "Date": "Fri, 15 Jul 2022 23:19:46 GMT",
        "Server": "BunnyCDN-DE-880"
      }
    }
  
    await fetch(API_URL_TEMP,confiApi2)
    .then(response => response.json())
    .then(dataTemp =>{
      let element:any = document.getElementById('temperatura');
      element.innerHTML = `<p>${dataTemp.current.temp_c}<p>`;
      console.log(dataTemp.current.temp_c);
    }) 
}
cargarChistes();

// CREATE OBJ JOKE

// SCORE BUTTONS 
function puntuacion1(score: number) {
antesDeReportar[antesDeReportar.length -1 ].score = score;
var reportJoke = antesDeReportar.filter(function(ObjJoke){
  return ObjJoke.score > 0
})
  
  console.log("Chiste reportados", reportJoke);
  cargarChistes()
};

