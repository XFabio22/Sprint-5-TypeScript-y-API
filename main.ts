// ERRORE INTENTE HACER UN MAP Y DABA ERROR PORQUE NO DEVOLVIA UNA ARRAY 
// NOTAS que arranque con un chiste y sacar el interface de la funcion cargar chiste 

// FETCH APIS WHATER & JOKE 
cargarTemperaturas();
async function cargarChistes() {
    const API_URL = "https://icanhazdadjoke.com/";
    let confiApi = {
        headers: { 
            Accept: "application/json",
        },
    };
    await fetch(API_URL, confiApi) // hace un peticion y devuelve el valor se asemeja a un forEach
    .then( response => response.json())
    .then(data => {
      let element:any = document.getElementById('joke');
      element.innerHTML = `<p>${data.joke}<p>`;
      crearObjJoke(data);
      // cargarTemperaturas();


    })
    

}
 function cargarTemperaturas(){
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
  
    fetch(API_URL_TEMP,confiApi2)
    .then(response => response.json())
    .then(dataTemp =>{
      let element:any = document.getElementById('temperatura');
      element.innerHTML = `<p>${dataTemp.current.temp_c}<p>`;
      console.log(dataTemp.current.temp_c);
    }) 
}
  cargarChistes();

  // CREATE OBJ JOKE
  let reportJoke:any[] = []
  let fechaActual = new Date;

  interface ObjJoke{
    id: string;
    jokeP: string;
    score: number;
    date : string;
}

  class VOTEDJOKE implements ObjJoke {
    id: string;
    jokeP: string;
    score: number;
    date : string;
    constructor(id: string, jokeP: string,score: number, date : string){
      this.id= id;
      this.jokeP = jokeP;
      this.score = score;
      this.date = date;
    }
  }

  function crearObjJoke(data){
    let id =data.id
    let chiste:any = data.joke
    let jokeP= chiste;
    let score = 0;
    let date = fechaActual.toISOString();
    let joke1 = new VOTEDJOKE(id,jokeP,score,date);
    reportJoke.push(joke1)

  }
  

// SCORE BUTTONS 
function puntuacion1(score: number) {
  reportJoke[reportJoke.length -1].score = score;

  console.log("Chiste reportados", reportJoke);
  cargarChistes();

};
function puntuacion2(score: number) {
  reportJoke[reportJoke.length -1].score = score;

  console.log("Chiste reportados", reportJoke);
  cargarChistes();

};
function puntuacion3(score: number) {
  reportJoke[reportJoke.length -1].score = score;

  console.log("Chiste reportados", reportJoke);
  cargarChistes();

}; 
