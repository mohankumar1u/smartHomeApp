import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import LoadingPage from './LoadingPage';
import Goodbye from './Goodbye';
import { IonReactRouter } from '@ionic/react-router';
import { IonApp, IonPage, IonButton, IonIcon, IonRouterOutlet } from '@ionic/react';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <IonApp>
        <IonReactRouter>
            <IonRouterOutlet>
              <Route exact path="/" component={LoadingPage}/>
            </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    );
  }
}

render(<App />, document.getElementById('root'));
