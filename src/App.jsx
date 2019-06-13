// App.jsx
import React from 'react';

class App extends React.Component {
   constructor(){
      super();
      this.state={
         "name":"RayRayddddd"
      }

   }

   render() {
      return (
         <div>
        <Header/>
        <Content/>
        <p>by {this.state.name}</p>
        </div>
      );
   }
}

class Header extends React.Component {
   render(){
      return (
         <div>
<h1>Header</h1>
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
export default App;