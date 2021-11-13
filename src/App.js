import { useState } from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";
import Preguntas from "./components/Preguntas";
import "./App.css";

function App() {
	// Estado para saber si existe una respuesta
	const [global, setGlobal] = useState([
		{ id: 0, estado: false },
		{ id: 1, estado: false },
		{ id: 2, estado: false },
		{ id: 3, estado: false },
	]);

	// Metodo para cambiar el valor de estado de false a true
	// Este metodo se ejucta en Pregunta.js
	// Esto lo que hace es que cada vez que seleccionemos siguiente va cambiar el estado por verdadero Ocasionando que se renderize un nuevo componente (osea el de la siguiente pregunta)
	const cambioVal = i => {
		const object = { id: i, estado: true };
		const newGlobal = global.map(elemento => {
			if (elemento.id === object.id) {
				return {
					...elemento,
					estado: true,
				};
			}
			return elemento;
		});
		setGlobal(newGlobal);
	};

	return (
		<div>
			<BrowserRouter>
				<Route exact path="/Proyecto_Preguntados">
					<div className="main_container">
						<h1 className="title">Kahoot!!</h1>
						<button className="butonStyle">
							<Link className="linkStyle" to="/Proyecto_Preguntados/Preguntas">
								Start Test
							</Link>
						</button>
					</div>
				</Route>
				<Route exact path="/Proyecto_Preguntados/Preguntas" component={Preguntas}>
					<Preguntas cambioVal={cambioVal} global={global} setGlobal={setGlobal}></Preguntas>
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
