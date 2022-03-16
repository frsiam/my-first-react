import logo from './logo.svg';
import './App.css';
const person = {
  backgroundColor: 'black',
  color: 'white',
  border: '2px solid yellow',
  borderRadius: '30px',
  margin: '20px 200px',
  padding: '20px'
}

function App() {
  return (
    <div className="App">
      <h1 style={{backgroundColor:"blue",color: 'pink',margin: '20px 300px', padding: '30px', border: '3px dotted pink', borderRadius: '40px'}}>Hello</h1>
      <Person></Person>
      <Person></Person>
      <Friend name = 'Ahsan Noyon' proffession = 'Job seeker'></Friend>
    </div>
  );
}

function Person(){
  return (
    <div style={person}>
      <h1>Name: Siam</h1>
      <p>Proffession: Job seeker</p>
    </div>
  )
}

function Friend(props){
  console.log(props)
  return (
    <div className='friend'>
      <h1>Name: {props.name}</h1>
      <h3>Proffession: {props.proffession}</h3>
    </div>
  )
}

export default App;
