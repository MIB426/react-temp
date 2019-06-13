// App.jsx
import React from 'react';

class App extends React.Component {
   constructor(){
      super();
      this.state={
         data: 
         [
            {
               "name":"dogA",
               "age":"1"
            },
            {
               "name":"catB",
               "age":"2"
            },
            {
               "name":"pigC",
               "age":"3"
            }
         ],
         id:"Animal List"
      }

   }

   render() {
      return (
         <div>
        <Header  title = {this.state.id}/>
        <table>
               <tbody>
                  {this.state.data.map((animals, i) => 
                  <TableRow key = {i}  data = {animals} />)}
               </tbody>
            </table>
       </div>
      );
   }
}

class Header extends React.Component {
   render(){
      return (
         <div>
<h1>{this.props.title}</h1>
         </div>
      )
   }
}
class Content extends React.Component {
   render(){
      return (
         <div>
 <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      )
   }
}
class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}
export default App;