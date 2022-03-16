import logo from './logo.svg';
import './App.css';
const pers = {
  backgroundColor: 'black',
  color: 'white',
  border: '2px solid yellow',
  borderRadius: '30px',
  margin: '20px 200px',
  padding: '20px'
}

const players = [
  {name: 'Shakib Al Hasan',job: 'Cricketer', nationality: 'Bangladeshi'},
  {name: 'Muhammad Yosuf Pathan',job: 'Cricketer', nationality: 'India'},
  {name: 'Muhammad Hafiz',job: 'Cricketer', nationality: 'Pakistan'},
  {name: 'Muhammad Salah',job: 'Footballer', nationality: 'Egypt'},
  {name: 'Irfan',job: 'Boliball', nationality: 'Taiwan'}
]

function App() {
  const friends = ['Abdullah al-amin', 'Aminul Haq Nayem','Fahim Shakil','Md Rakibul Hasan Rakib','Ahsan Noyon']
  const proffessions = ['Job Seeker', 'Bussiness Man', 'Officer']
  return (
    <div className="App">
      {/* <h1 style={{backgroundColor:"blue",color: 'pink',margin: '20px 300px', padding: '30px', border: '3px dotted pink', borderRadius: '40px'}}>Hello</h1> */}
      {
        players.map(player => <Person name={player}></Person>)
      }
      {/* <Perso></Perso>
      <Person></Person>
      <Person></Person> */}
      <Friend name = {friends[0]} proffession = {proffessions[1]}></Friend>
      <Friend name = {friends[1]} proffession = {proffessions[1]}></Friend>
    </div>
  );
}

function Person(props){
  console.log(props)
  return (
    <div style={pers}>
      <h1>{props.name.name}</h1>
      <h3>{props.name.nationality}</h3>
      <p>{props.name.job}</p>
    </div>
  )
}

function Friend(props){
  console.log(props)
  return (
    <div className='friend'>
      <h1>{props.name}</h1>
      <h3>{props.proffession}</h3>
    </div>
  )
}

export default App;
