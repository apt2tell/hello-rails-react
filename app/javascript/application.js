// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"
import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import messagesReducer from './redux/messagesSlice';
import Greeting from './src/components/Greeting';


const store = configureStore({
  reducer: {
    message: messagesReducer,
  }
})

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </Router>
    </Provider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
