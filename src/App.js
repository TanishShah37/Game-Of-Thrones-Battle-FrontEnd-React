import React from 'react';
import { Provider } from 'react-redux';
import HomeComponent from './components/HomeComponent';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <HomeComponent />
      </div>
    </Provider>
  );
}

export default App;
