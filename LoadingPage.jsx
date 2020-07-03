import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent, IonLoading, IonButton, useIonViewWillEnter } from '@ionic/react';

const Tab3Page = () => {

  const [showLoading, setShowLoading] = useState(false);

  const loadProducts = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  useIonViewWillEnter(() => {
    setShowLoading(true);
    loadProducts().then(() => {
      setShowLoading(false);
    })
  });



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Loading Sample</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonButton onClick={() => setShowLoading(true)}>Show Loading</IonButton>
      <IonLoading
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Loading...'}
        duration={5000}
      />
        </IonContent>
    </IonPage>
  );
};

export default Tab3Page;
