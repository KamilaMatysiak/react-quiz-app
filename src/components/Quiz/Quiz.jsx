import React, {useState} from 'react'
import { quiz } from '../../assets/data/Questions';
import './quiz.scss';

const Quiz = () => {
  
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [answerShowed, setAnswerShowed] = useState(false);
    const [statusClass, setStatusClass] = useState(false);
    const [showResult, setShowResults] = useState(false)
    const [result, setResult] = useState({
        correctAnswers: 0,
        wrongAnswers: 0,
    })

    const { questions } = quiz;
    const { question, choices, code, correctAnswer } = questions[activeQuestion];

    const nextQuestion = () => {
        console.log("nextQuestion");
        console.log(result);
        setAnswerShowed(false);
        setActiveQuestion((prev) => prev + 1)
        

    }

    const checkAnswers = (answer) => {
        console.log("checkAnswers");
        setAnswerShowed(true);
        if(answer === correctAnswer) {
            setResult({...result, correctAnswers: result.correctAnswers + 1});
            setStatusClass('item--correct');
        } else {
            setResult({...result, wrongAnswers: result.wrongAnswers + 1});
            setStatusClass('item--wrong');
        }
    }

    const onAnswerSelected = (answer, index) => {
        setSelectedAnswer(answer);
        setStatusClass('item--selected');
    }
        
    return (
        <div className='question-container'>
            <div className='question'>
                <h2 className='question__title'>{question}</h2>
                {code && <pre className='question__code'>{code}</pre>}
                <ul className='question__answers-list'>
                    {choices.map((answer) => (
                        <li 
                            className={`question__answer-item ${answer === selectedAnswer ? statusClass : ''}`}
                            key={answer}
                            onClick={() => onAnswerSelected(answer)}>
                                {answer}
                        </li>
                    ))}
                </ul>
                 {!showResult ? (<button 
                    className='button button--primary' 
                    onClick={!answerShowed ? () => checkAnswers(selectedAnswer) : activeQuestion < questions.length - 1 ? nextQuestion : () => setShowResults(true)}>
                        {!answerShowed 
                            ? 'Check' 
                            : activeQuestion < questions.length - 1 ? 'Next' : 'Show results'}
                </button>) :
                (
                    <div className='results'>
                        <p><b>Correct answers:</b> {result.correctAnswers}</p>
                        <p><b>Wrong answers:</b> {result.wrongAnswers}</p>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Quiz