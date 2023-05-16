import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const useFirebase = () => {
  const [firebaseInstance, setFirebaseInstance] = useState(null);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyAtHrrTA7dzZkDuKQjXdilATyRn-jzhsKI",
      authDomain: "genius-gamecp2.firebaseapp.com",
      projectId: "genius-gamecp2",
      storageBucket: "genius-gamecp2.appspot.com",
      messagingSenderId: "153224481741",
      appId: "1:153224481741:web:386b2b01882664168f5284"
    };

    const app = firebase.initializeApp(firebaseConfig);
    setFirebaseInstance(app);

    
    return () => {
      
    };
  }, []);

  return firebaseInstance;
};

export default useFirebase;

{/*
import React from 'react';
import useFirebase from './useFirebase';

const (componente) = () => {
  const firebase = useFirebase();

  // Usar instancia do Firebase.

  return (
    // Conteudo do componente
  );
};

export default (componente);
*/}
