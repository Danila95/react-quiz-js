import { useState } from 'react'
import './App.scss'
import data from './data.json'

const questions = data.questions

function Result({ correct }) {
	return (
		<div className='result'>
			<img
				src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png'
				alt=''
			/>
			<h2>
				Вы отгадали {correct} ответа из {questions.length}
			</h2>
			<a href='/'>
				<button type='button'>Попробовать снова</button>
			</a>
		</div>
	)
}

function Game({ step, question, onClickVariant }) {
	const percentage = Math.round((step / questions.length) * 100)
	return (
		<>
			<div className='progress'>
				<div
					style={{ width: `${percentage}%` }}
					className='progress__inner'
				/>
			</div>
			<h1>{question.title}</h1>
			<ul>
				{question.variants.map((variant, index) => (
					<li
						role='presentation'
						onClick={() => onClickVariant(index)}
						key={variant}
					>
						{variant}
					</li>
				))}
			</ul>
		</>
	)
}

function App() {
	const [step, setStep] = useState(0)
	const [correct, setCorrect] = useState(0)
	const question = questions[step]

	const onClickVariant = index => {
		console.log(step, index)
		setStep(step => step + 1)

		if (question.correct === index) {
			setCorrect(correct => correct + 1)
			console.log(`correct ${question.correct}`)
		}
	}

	return (
		<div className='App'>
			{step !== questions.length ? (
				<Game
					step={step}
					question={question}
					onClickVariant={onClickVariant}
				/>
			) : (
				<Result correct={correct} />
			)}
		</div>
	)
}

export default App
