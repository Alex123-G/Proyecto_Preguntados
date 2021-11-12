import { useState } from "react";
import data from "../../Data";

const Pregunta3 = ({ posicion, cambioVal, respuestas, setRespuestas }) => {
	const [preguntas] = useState([data]);
	const [questions] = preguntas;
	let num = posicion - 1;

	const getAnswerForm = e => {
		if (e.target.value === "282") {
			const newRespuestas = respuestas.map(ele => {
				if (e.target.value === ele.rpt) {
					return { ...ele, valor: true };
				} else return ele;
			});
			setRespuestas(newRespuestas);
		} else {
			const newRespuestafalsa = respuestas.map(ele => {
				if (ele.valor === true && ele.rpt === "282") {
					return { ...ele, valor: false };
				} else return ele;
			});
			setRespuestas(newRespuestafalsa);
		}
	};

	const selectAnswer = e => {
		e.preventDefault();
		cambioVal(num);
	};

	return (
		<div className="container_question">
			<div className="container__img">
				<img src={questions[num].img} alt="img1" />
			</div>
			<div className="container__quest">
				<p>
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
export default Pregunta3;
