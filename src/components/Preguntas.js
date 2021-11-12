import { useState } from "react";
import Pregunta1 from "./Pregunta1/Pregunta1";
import Pregunta2 from "./Pregunta2/Pregunta2";
import Pregunta3 from "./Pregunta3/Pregunta3";
import Pregunta4 from "./Pregunta4/Pregunta4";

const Preguntas = ({ global, setGlobal, cambioVal }) => {
	// Estado done esta la respuesta y si es verdadera o es falsa
	const [respuestas, setRespuestas] = useState([
		{ rpt: "USA", valor: false },
		{ rpt: "1945", valor: false },
		{ rpt: "282", valor: false },
		{ rpt: "ballena azul", valor: false },
	]);

	const resetGlobal = () => {
		console.log("ejecutnado reset Global");
		const restartGlobal = global.map(eleme => {
			return { ...eleme, estado: false };
		});
		setGlobal(restartGlobal);
	};

	// Metodo reduce para obtener el puntaje del juego  si la respuesta es correcta. y despues mostrarlo en un span para decir su puntuacion.
	const puntuacion = respuestas.reduce((acc, el) => {
		if (el.valor === true) {
			return (acc = acc + 1);
		} else {
			return acc;
		}
	}, 0);

	// Estilo para la puntuacion.
	let estilos_span = { fontSize: "35px", marginLeft: "5px" };
	if (puntuacion < 2) {
		estilos_span = {
			...estilos_span,
			color: "red",
		};
	} else {
		estilos_span = {
			...estilos_span,
			color: "blue",
		};
	}

	// Mostrando la siguiente pregunta si el estado global su propiedad estado es falso.
	if (global[0].estado === false) {
		return (
			<Pregunta1
				cambioVal={cambioVal}
				setGlobal={setGlobal}
				global={global}
				posicion={1}
				respuestas={respuestas}
				setRespuestas={setRespuestas}
			></Pregunta1>
		);
	} else if (global[1].estado === false) {
		return (
			<Pregunta2
				cambioVal={cambioVal}
				setGlobal={setGlobal}
				global={global}
				posicion={2}
				respuestas={respuestas}
				setRespuestas={setRespuestas}
			></Pregunta2>
		);
	} else if (global[2].estado === false) {
		return (
			<Pregunta3
				cambioVal={cambioVal}
				setGlobal={setGlobal}
				global={global}
				posicion={3}
				respuestas={respuestas}
				setRespuestas={setRespuestas}
			></Pregunta3>
		);
	} else if (global[3].estado === false) {
		return (
			<Pregunta4
				cambioVal={cambioVal}
				setGlobal={setGlobal}
				global={global}
				posicion={4}
				respuestas={respuestas}
				setRespuestas={setRespuestas}
			></Pregunta4>
		);
	} else {
		return (
			<div className="resultados">
				<h1>Congratulation you finished the test!!</h1>
				<p className="resultados_puntuacion">
					Your score is <span style={estilos_span}>{puntuacion}</span>
				</p>
				<button className="butonStyle" onClick={resetGlobal}>
					Play Again
				</button>
			</div>
		);
	}
};

export default Preguntas;
