import React, {useState} from 'react';
//import Hello from './sayHello';
import Tweet from './Tweet';

function App(){


  const [users, setUsers] = useState([
      {name: 'Ed', message: 'Hello there'},
      {name: 'John', message: 'I am John snow'},
      {name: 'traversy', message:'I am awesome'}
  ]);

//  const [isRed, setRed]=useState(false);
//  const [count, setCount]= useState(0);

//  const [user, setUser]= useState({
//       name:'Ruwan',
//       age: 26,
//       posts: ['my first porject', 'my first travel'];

//  });

//  const increment = () => {
//    setCount(count+ 1);
//    setRed(!isRed);

//  };

    return(
    <div className="app">

      {users.map(user => (
        <Tweet name={user.name} message= {user.message}/>
      ))}
      {/* <h1 className={isRed ? "red": ""}>Change my color</h1>

      <button onClick={increment}>Increment</button>
      <h1>{count}</h1> */}
      {/* <Tweet name="Dev ED" message="This is a random tweet"/>
      <Tweet  name="John Snow" message="I am the true king"/>
      <Tweet  name="Deven ED" message="700k my dudes"/>
      <Tweet  name="Mosh" message="My new course is available"/> */}

    </div>
    );

}

export default App;















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
