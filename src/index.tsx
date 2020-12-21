import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import App from './components/app/App'
import ErrorBoundry from './components/error-boundry'
import FirebaseService from './services/firebase-service'
import {FirebaseServiceProvider} from './components/firebase-service-context'

import store from './store'

const fbs = new FirebaseService()

ReactDOM.render(
  <Provider store = {store}>
    <ErrorBoundry>
        <FirebaseServiceProvider value = {fbs}>
          <Router>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </Router>
          </FirebaseServiceProvider>
    </ErrorBoundry>
  </Provider>
 ,
  document.getElementById('root')
);