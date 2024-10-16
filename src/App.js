import React, {Component} from 'react'
//1- import Todo from './component/Todo';
//2- import Counter from './component/counter'
// 3- import Forms from './component/forms';
import FormsUncontrol from './component/formsWithUncontrol';



class App extends Component{

state={
  myString:"start",
  stringOne:"begin"
}

// 2- handleChange=()=>{
//   this.setState({
//     stringOne:"changed String"
//   })
// }

  //1- render(){1
  //   return(
  //     <div className='App'>
  //       <h1>{ this.state.myString }</h1>
  //       <h1>{ this.state.stringOne }</h1>
  //       <button onClick={this.handleChange}>change Text</button>
  //       <Todo stringOne = {this.state.stringOne} />
  //     </div>
  //   )
  // }




//   2-render (){
// return (
//   <div className='counterEvent'>
//   <h2>Events</h2>
//   <Counter/>
//   </div>
//   // <button >Click Me</button>
// )
//   }



// render(){
//   return (
//     <div className='formComponent'>
// <h1>form component</h1>
// <Forms/>
//     </div>
//   )
// }


render(){
  return (
    <div className='formWIthUncontrol'>
<FormsUncontrol/>
    </div>
  )
}


  }


export default App;
