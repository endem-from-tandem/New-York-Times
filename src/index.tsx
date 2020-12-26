import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import App from './components/app/'
import ErrorBoundry from './components/error-boundry'
import FirebaseService from './services/firebase-service'
import {FirebaseServiceProvider} from './components/firebase-service-context'
import NyapiService from './services/nyapi-service'
import { NyapiServiceProvider } from './components/nyapi-service-context';
import store from './store'

const fbs = new FirebaseService()
const nys = new NyapiService()

ReactDOM.render(
  <Provider store = {store}>
    <ErrorBoundry>
        <FirebaseServiceProvider value = {fbs}>
          <NyapiServiceProvider value = {nys}>
            <Router>
              <React.StrictMode>
                <App />
              </React.StrictMode>
            </Router>
            </NyapiServiceProvider>
        </FirebaseServiceProvider>
    </ErrorBoundry>
  </Provider>
 ,
  document.getElementById('root')
);