
 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
  import { getFirestore,collection, getDocs, addDoc ,doc, deleteDoc, updateDoc} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
  
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAN1Q1elwfF6btThwMteCU8M9gmdHLZL9c",
    authDomain: "my--tudo-project.firebaseapp.com",
    projectId: "my--tudo-project",
    storageBucket: "my--tudo-project.firebasestorage.app",
    messagingSenderId: "422583877318",
    appId: "1:422583877318:web:d7e9b1001f4ed9c43721c7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  // Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {collection,getDocs, db, addDoc,doc, deleteDoc,updateDoc}






//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyAN1Q1elwfF6btThwMteCU8M9gmdHLZL9c",
//     authDomain: "my--tudo-project.firebaseapp.com",
//     projectId: "my--tudo-project",
//     storageBucket: "my--tudo-project.firebasestorage.app",
//     messagingSenderId: "422583877318",
//     appId: "1:422583877318:web:d7e9b1001f4ed9c43721c7"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

// <h2>${user?.age}</h2>
            // <h2>${user?.email}</h2>
            // <h2>${user?.address}</h2>
