import React from "react";
import Header from './Header';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SwipingCards from "./SwipingCards";
import ChatScreen from "./ChatScreen";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats"
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header /> 
            <SwipingCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
