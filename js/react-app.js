function App() {

    const [persona, setPersona] = React.useState({
        nombre: "",
        apellido: "",
        edad: "",
        altura: "",
        peso: ""
    });

    function cambiar(e) {
        setPersona({
            ...persona,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <form>

                <input
                    name="nombre"
                    placeholder="Nombre"
                    value={persona.nombre}
                    onChange={cambiar}
                />

                <input
                    name="apellido"
                    placeholder="Apellido"
                    value={persona.apellido}
                    onChange={cambiar}
                />

                <input
                    type="number"
                    name="edad"
                    placeholder="Edad"
                    value={persona.edad}
                    onChange={cambiar}
                />

                <input
                    type="number"
                    step="0.01"
                    name="altura"
                    placeholder="Altura"
                    value={persona.altura}
                    onChange={cambiar}
                />

                <input
                    type="number"
                    step="0.1"
                    name="peso"
                    placeholder="Peso"
                    value={persona.peso}
                    onChange={cambiar}
                />

                <button>
                    Agregar
                </button>

            </form>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);