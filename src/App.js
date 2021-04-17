import React from 'react';
import Form from './components/Form/Form';
import UserRegister from './components/UserRegister/UserRegister'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {

  
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/" component={Form}></Route>
          <Route path="/user" component={UserRegister}></Route>
          <Route path="/:id" component={Form}></Route>
      </Switch>

      </Router>
     
   
    </>
  );
}

export default App;
