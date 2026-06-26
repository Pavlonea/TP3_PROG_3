const juegos = [
    "Counter-Strike 2",
    "GTA V",
    "FIFA 26",
    "Minecraft",
    "League of Legends",
    "Fortnite"
];

const contenedor = document.getElementById("contenedor");

function mostrar(){

    contenedor.innerHTML="";

    for (let juego of juegos) {
        
        const div=document.createElement("div");
        div.className="card";
        div.textContent=juego;
        contenedor.appendChild(div);
    }
}

mostrar();

document.getElementById("ordenar").addEventListener("click",()=>{

juegos.sort();

mostrar();

});