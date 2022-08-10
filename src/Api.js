// import firebase  from 'firebase';
// import '../node_modules/firebase/firebase-auth';
// import '../node_modules/firebase/firebase-firestore';

// import firebaseConfig from './firebaseConfig';

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();

// export default {
//     fbPopup:async () => {
//         const provider = new firebase.auth.FacebookAuthProvider();
//         let result = await firebaseApp.auth().signInWithPopup(provider);
//         return result;
//     }
// };

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import firebaseConfig from './firebaseConfig';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {
    fbPopup:async () => {
        const provider = new initializeApp.auth.FacebookAuthProvider(); // error aqui
        let result = await getFirestore.auth().signInWithPopup(provider);
        return result;
    }
};