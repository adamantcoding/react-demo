import React, { Component } from 'react';
import './App.css';
import Counter from "./components/Counter";
import store from "./store/store";
import {Provider} from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
          <Provider store={store}>
              <Counter/>
          </Provider>
      </div>
    );
  }
}

export default App;