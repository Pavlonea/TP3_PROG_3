function App() {

    const [persona, setPersona] = React.useState({
        nombre: "",
        apellido: "",
        edad: "",
        altura: "",
        peso: ""
    });

    const [personas, setPersonas] = React.useState([]);

    function cambiar(e) {
        setPersona({
            ...persona,
            [e.target.name]: e.target.value
        });
    }

    function agregar(e) {

        e.preventDefault();

        if (
            persona.nombre === "" ||
            persona.apellido === "" ||
            persona.edad === "" ||
            persona.altura === "" ||
            persona.peso === ""
        ) {
            alert("Complete todos los campos");
            return;
        }

        setPersonas([...personas, persona]);

        setPersona({
            nombre: "",
            apellido: "",
            edad: "",
            altura: "",
            peso: ""
        });
    }

    function eliminar(indice) {
        setPersonas(
            personas.filter((_, i) => i !== indice)
        );
    }

    return (
        <>
            <form onSubmit={agregar}>

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

                <button type="submit">
                    Agregar
                </button>

            </form>

            <table>

                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th>Altura</th>
                        <th>Peso</th>
                        <th>IMC</th>
                        <th>Acción</th>
                    </tr>
                </thead>

                <tbody>

                    {personas.map((p, i) => {

                        const imc = (p.peso / (p.altura * p.altura)).toFixed(2);

                        return (

                            <tr key={i}>
                                <td>{p.nombre}</td>
                                <td>{p.apellido}</td>
                                <td>{p.edad}</td>
                                <td>{p.altura}</td>
                                <td>{p.peso}</td>
                                <td>{imc}</td>
                                <td>
                                    <button onClick={() => eliminar(i)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>

                        );

                    })}

                </tbody>

            </table>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);