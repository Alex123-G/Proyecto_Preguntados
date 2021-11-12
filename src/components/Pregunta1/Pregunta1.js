import { useState } from "react";
import data from "../../Data";
import "../Pregunta.css";

const Pregunta1 = ({ posicion, cambioVal, respuestas, setRespuestas }) => {
	const [preguntas] = useState([data]);
	const [questions] = preguntas;
	let num = posicion - 1;

	// !Una posible mejora sería colocar en el objeto de data una propiedad de respuesta por ejemplo USa y con ese dato hacemos la comparacion con la del valor.
	// Funcion para saber si la respuesta es correcta, prinmero se compala si es la respuesta correcta con el valor del radioButom , desoyes se recorre con el Map el arreglo de las respuesta(osea lo correcto),des´pues comparamaos que si el valor del input es igual al valor de la respuesta si es asi se hace una copia y se le cambia la propieda de false a true Haciendo que la respuesta sea correcta si no es igual nos devuelve el elemento sin modificar.
	//* Si el el input no tiene el mismo valor lo que hacemos es otro map y ver si el valor es true y la respuesta es la de esa pregunta si cambia el valor por falso si no son iguales no se les hace nada.
	//Esto se hizo principalmente porque cuando hacimos click en la respuesta correcta y despues cambiamvamos nuestra respuesta,esta seguia siendo afirmativa.

	const getAnswerForm = e => {
		if (e.target.value === "USA") {
			const newRespuestas = respuestas.map(ele => {
				if (e.target.value === ele.rpt) {
					return { ...ele, valor: true };
				} else return ele;
			});
			setRespuestas(newRespuestas);
		} else {
			const newRespuestafalsa = respuestas.map(ele => {
				if (ele.valor === true && ele.rpt === "USA") {
					return { ...ele, valor: false };
				} else return ele;
			});
			setRespuestas(newRespuestafalsa);
		}
	};

	function selectAnswer(e) {
		e.preventDefault();
		cambioVal(num);
	}

	return (
		<div className="container_question">
			<div className="container__img">
				<img src={questions[num].img} alt="img1" />
			</div>
			<div className="container__quest">
				<p className="container_question">
					<span>{questions[num].preguntas}</span>
				</p>
				<form onSubmit={selectAnswer} onChange={getAnswerForm}>
					<div className="form">
						<div className="form__input">
							<label>
								<input type="radio" id="respuesta1" name="respuestas" value={questions[num].opciones[0]} />
								{questions[num].opciones[0]}
							</label>
						</div>
						<div className="form__input">
							<label>
								<input type="radio" id="respuesta2" name="respuestas" value={questions[num].opciones[1]} />
								{questions[num].opciones[1]}
							</label>
						</div>
						<div className="form__input">
							<label>
								<input type="radio" id="respuesta3" name="respuestas" value={questions[num].opciones[2]} />
								{questions[num].opciones[2]}
							</label>
						</div>
						<div className="form__input">
							<label>
								<input type="radio" id="respuesta4" name="respuestas" value={questions[num].opciones[3]} />
								{questions[num].opciones[3]}
							</label>
						</div>
					</div>
					<button className="butonStyle">Send</button>
				</form>
			</div>
		</div>
	);
};
export default Pregunta1;
