import React from 'react';
import './App.css';

//make new context
const MyContext = React.createContext();

// create provider component
class MyProvider extends React.Component {
  state = {
    name:"shekhar",
    age:30,
    cool:true
  }

  // create Provider 
  render(){
    return(
      <MyContext.Provider value = {{
        state:this.state,
        //we can pass functions
        incrementAgebyOne : () => this.setState({
          age: this.state.age +1
        })
        }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = () =>{
  return <div className="family">
    <Person/>
  </div>
}

class Person extends React.Component {
  render () {
    //create consumer
    return (
      <div className="person">
        <MyContext.Consumer>
        {context => (
          <React.Fragment>
            <p>Name: {context.state.name}</p>
            <p>Age: {context.state.age}</p>
            <button onClick={context.incrementAgebyOne}>Increase Age</button>
          </React.Fragment>
        )}
        </MyContext.Consumer>
      </div>
    )
  }
}
//wrap the provider component to the main component from where 
// we need to pass the data
class App extends React.Component {
  render(){
  return (
    <MyProvider>
      <div className="App">
      <h1>I'm App</h1>
      <Family/>
      </div>
    </MyProvider>
  );
}
}

export default App;
