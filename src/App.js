import React,{ useState } from 'react';
import './App.css';

function App() {
  let num1 = Math.ceil(Math.random() * 10)
  let num2 = Math.ceil(Math.random() * 10)
  let operator
  let answer
  switch (Math.ceil(Math.random() * 2)) {
    case 1:
      operator = "+"
      answer = num1 + num2
      break;
    case 2:
      operator = "-"
      answer = num1 - num2
      break;
    default:
  }
  const [state,setState] = useState({
    num1: num1,
    num2: num2,
    operator: operator,
    answer: answer,
    score: 0,
    incorrect: false,
    warning: ""
  })

  function inputKeyPress(e) {
    let response = parseInt(e.target.value)
    if (e.key === "Enter") {
      if (response === state.answer) {
        let num1 = Math.ceil(Math.random() * 10)
        let num2 = Math.ceil(Math.random() * 10)
        let operator
        let answer
        switch (Math.ceil(Math.random() * 2)) {
          case 1:
            operator = "+"
            answer = num1 + num2
            break;
          case 2:
            operator = "-"
            answer = num1 - num2
            break;
          default:
        }
        setState({
          ...state,
          num1: num1,
          num2: num2,
          answer: answer,
          operator: operator,
          score: state.score + 1,
          incorrect: false,
          warning: ""
        })
      } else if (e.target.value === "") {
          setState({
            ...state,
            warning: "請輸入答案"
          })
      } else {
          if (state.score > 0) {
            setState({
              ...state,
              score: state.score - 1,
              incorrect: true,
              warning: ""
            })
          } else {
              setState({
                ...state,
                incorrect: true,
                warning: ""
              })
          }
      }
    }
  }

  function MainPage() {
    return (
      <div className="container">
        <div id="question" className={state.incorrect ? "incorrect" : ""}>{state.num1}{state.operator}{state.num2}</div>
        <input autoFocus onKeyPress={inputKeyPress} placeholder={state.warning} type="text"></input>
        <div>分數: {state.score}</div>
      </div>
    );
  }

  function restart() {
    setState({...state,score: 0})
  }

  function WinPage() {
    return (
      <div className="container"> 
        <h1>you win!!</h1>
        <button onClick={restart}>Restart</button>
      </div>
      )
  }

  if (state.score >= 5) {
    return <WinPage/>
  } else {
    return <MainPage/>
  }
}

export default App;