const personas = [];

const formulario = document.getElementById("formulario");
const tabla = document.getElementById("tabla");

function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

function mostrarTabla() {

    tabla.innerHTML = "";

    personas.forEach((persona, indice) => {

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${persona.nombre}</td>
            <td>${persona.apellido}</td>
            <td>${persona.edad}</td>
            <td>${persona.altura}</td>
            <td>${persona.peso}</td>
            <td>${calcularIMC(persona.peso, persona.altura)}</td>
            <td>
                <button onclick="eliminarPersona(${indice})">
                    Eliminar
                </button>
            </td>
        `;

        tabla.appendChild(fila);

    });

}

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const persona = {

        nombre: document.getElementById("nombre").value,

        apellido: document.getElementById("apellido").value,

        edad: Number(document.getElementById("edad").value),

        altura: Number(document.getElementById("altura").value),

        peso: Number(document.getElementById("peso").value)

    };

    personas.push(persona);

    mostrarTabla();

    formulario.reset();

});

function eliminarPersona(indice){

    personas.splice(indice,1);

    mostrarTabla();

}