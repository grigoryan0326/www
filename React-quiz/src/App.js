import { useState } from "react"
import "./index.scss"

const questions = [
  {
    title: "1. React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение", "язык программирования"],
    correct: 0,
  },
  {
    title: "2. Какое ключевое слово используется для создания компонента класса в React?",
    variants: ["function", "class", "component", "new"],
    correct: 1,
  },
  {
    title: "3. Что возвращает метод Array.prototype.map()?",
    variants: [
      "Массив с результатами выполнения функции на каждом элементе",
      "Изменённый исходный массив",
      "Объект с ключами-индексами",
      "Ничего не возвращает",
    ],
    correct: 0,
  },
  {
    title: "4. Какое свойство отвечает за передачу данных между компонентами в React?",
    variants: ["props", "state", "render", "context"],
    correct: 0,
  },
  {
    title: "5. Что делает метод setState() в классовом компоненте?",
    variants: [
      "Изменяет состояние напрямую",
      "Асинхронно обновляет состояние",
      "Перезаписывает состояние полностью",
      "Ничего не делает",
    ],
    correct: 1,
  },
  {
    title: "6. Что такое виртуальный DOM в React?",
    variants: [
      "Реальный DOM",
      "Копия реального DOM для оптимизации изменений",
      "Функция для создания DOM-дерева",
      "Объект JavaScript для управления DOM",
    ],
    correct: 1,
  },
  {
    title: "7. Что делает метод preventDefault() в JavaScript?",
    variants: [
      "Останавливает распространение события",
      "Предотвращает стандартное действие браузера",
      "Останавливает выполнение функции",
      "Удаляет элемент из DOM",
    ],
    correct: 1,
  },
  {
    title: "8. Какой метод жизненного цикла компонента используется для получения данных из API?",
    variants: ["componentWillMount", "componentDidMount", "render", "componentDidUpdate"],
    correct: 1,
  },
  {
    title: "9. Какой hook используется для управления состоянием в функциональных компонентах?",
    variants: ["useState", "useEffect", "useReducer", "useContext"],
    correct: 0,
  },
  {
    title: "10. Какое значение вернёт выражение '2' === 2 в JavaScript?",
    variants: ["true", "false", "undefined", "null"],
    correct: 1,
  },
  {
    title: "11. Как правильно передать props в компонент?",
    variants: [
      "<Component props={data} />",
      "<Component propName={value} />",
      "<Component {propName} />",
      "<Component props:{value} />",
    ],
    correct: 1,
  },
  {
    title: "12. Что такое HOC (Higher-Order Component) в React?",
    variants: [
      "Компонент, который может изменять state",
      "Компонент, который использует hooks",
      "Функция, которая принимает компонент и возвращает новый",
      "Компонент для работы с формами",
    ],
    correct: 2,
  },
  {
    title: "13. Что делает useEffect в React?",
    variants: [
      "Выполняет действие после каждого рендера",
      "Используется для управления состоянием",
      "Выполняется только при изменении state",
      "Выполняет действие перед рендером",
    ],
    correct: 0,
  },
  {
    title: "14. Какой тип данных может быть ключом в объекте JavaScript?",
    variants: ["Строка", "Число", "Строка и символ", "Только строка"],
    correct: 0,
  },
  {
    title: "15. Что произойдёт, если вызвать setState() в React-компоненте?",
    variants: [
      "Немедленно перерисует компонент",
      "Асинхронно запросит перерисовку компонента",
      "Сразу изменит DOM",
      "Ничего не произойдёт",
    ],
    correct: 1,
  },
];

function Result({ score, setScore, setStep }) {
  const handleReset = () => {
    setStep(0)
    setScore(0)
  }
  return (
    <div className='result'>
      <img
        src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png'
        alt='answer'
      />
      <h2>
        Вы отгадали {score} ответа из {questions.length}
      </h2>
      <button onClick={handleReset}>Попробовать снова</button>
    </div>
  )
}

function Game({ step, setStep, score, setScore }) {
  const handleAnswer = (question, index) => {
    if (question.correct === index) {
      setScore(score + 1)
    }
    setStep(step + 1)
    console.log(score)
  }

  return (
    <>
      <div className='progress'>
        <div
          style={{ width: `${(step * 100) / questions.length}%` }}
          className='progress__inner'
        ></div>
      </div>
      {questions.map((question, index) => {
        if (index === step) {
          return (
            <div
              className='question'
              key={index}
            >
              <h1>{question.title}</h1>
              <ul>
                {question.variants.map((variant, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => handleAnswer(question, index)}
                    >
                      {variant}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        }
        return ""
      })}
    </>
  )
}

function App() {
  const [step, setStep] = useState(0)
  const [score, setScore] = useState(0)

  return (
    <div className='App'>
      {step !== questions.length && (
        <Game
          step={step}
          setStep={setStep}
          score={score}
          setScore={setScore}
        />
      )}
      {step === questions.length && <Result score={score} setScore={setScore} setStep={setStep}/>}
    </div>
  )
}

export default App
