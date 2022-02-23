// import logo from './logo.svg';
// import './App.css';
// import Button from './components/Button'
// import React from 'react'

// function App() {
//   const [toggle, setToggle] = React.useState(true)
  
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {toggle && <Button sapa = "Hello" />}
//           <button onClick={()=>setToggle(false)}>Hide </button>
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

// import React, { Component } from 'react'
// import Homepage from './pages/Homepage'

// export default class App extends Component {
//   render() {
//     return (
//       <Homepage />
//     )
//   }
// }


// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     count: 0
//   }
//   increment = ()=> {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   decrement = ()=> {
//     this.setState({
//       count: this.state.count - 1
//     })
//   }

//   render() {
//     return (
//       <div className='d-flex vh-100 justify-content-center align-items-center'>
//         <div className='row'>
//           <div className='col'>
//             <button onClick={this.decrement} className='btn btn-primary'>-</button>
//           </div>  
//           <div className='col'>
//             <h1> {this.state.count}</h1>
//           </div>
//           <div className='col'>
//           <button onClick={this.increment} className='btn btn-primary'>+</button>
//           </div> 
//         </div>
//       </div>   
//     )
//   }
// }

import React, { Component } from "react";
// import Home from "./pages/Home";
import Login from "./pages/Login";


export default class App extends Component {
  state = {
    isLogged: false
  }

  render() {
    return (
      <>
      {!this.state.isLogged && <Login isLogin={(value) => this.setState({isLogged: value})} />}
      </>
    )
  }
}

