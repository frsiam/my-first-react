import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Friend name = 'Ahsan Noyon' proffession = 'Job seeker'></Friend>
    </div>
  );
}

function Person(){
  return (
    <div>
      <h1>Name: Siam</h1>
      <p>Proffession: Job seeker</p>
    </div>
  )
}

function Friend(props){
  console.log(props)
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.proffession}</h3>
    </div>
  )
}

export default App;
