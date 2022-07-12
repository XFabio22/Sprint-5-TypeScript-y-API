// const HTMLResponse:any = document.querySelector("#joke")
// async function cargarChiste() {
//     const API_URL = "https://icanhazdadjoke.com/";
//     let confiApi = {
//         headers: {
//           Accept: "application/json",
//         },
//       };
//       // const respuesta: any = 
//       await fetch(API_URL, confiApi)
//       .then((response)=> response.json())
//       .then((chistes) => {
//         const tpl= chistes.map((chiste:string) => `<li> ${chiste}</li>`)
//         HTMLResponse.innerHTML=`<ul>${tpl} </ul>`
//       })
//       // const chisteResuesta: any = await respuesta.json();
//       // console.log(chisteResuesta);
// } 
// async function cargarChistes() {
//     const API_URL = "https://icanhazdadjoke.com/";
//     let confiApi = {
//         headers: {
//             Accept: "application/json",
//         },
//     };
//     const respuesta: any = await fetch(API_URL, confiApi)
//     const chisteResuesta: any = await respuesta.json();
//     console.log(chisteResuesta);
// }
function cargarChistes() {
    var API_URL = "https://icanhazdadjoke.com/";
    var confiApi = {
        headers: {
            Accept: "application/json"
        }
    };
    fetch(API_URL, confiApi)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var element = document.getElementById('joke');
        element.innerHTML = "<p>".concat(data.joke, " <p>");
        console.log(data);
    });
}
