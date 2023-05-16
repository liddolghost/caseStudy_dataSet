// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, connectFirestoreEmulator } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzf803qRjCMmK9wGhzPs68WLUZKr-M42M",
  authDomain: "casestudy-1c77a.firebaseapp.com",
  projectId: "casestudy-1c77a",
  storageBucket: "casestudy-1c77a.appspot.com",
  messagingSenderId: "743404711750",
  appId: "1:743404711750:web:fffdbd353973f645397f47",
  measurementId: "G-YX6H49NVFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app);
//connect to Firestore emulator
const db = getFirestore(); 
connectFirestoreEmulator(db, 'localhost', 8080);

const saveBtn = document.querySelector(".save")
saveBtn.addEventListener("click", async () => {
  const collectionRef = collection(db, 'covidTests')
  try {
    const covidTestsRef = await addDoc(covidTestsCollectionRef, {
      Country: countrybox.value,
      Code: codebox.value,
      Year: yearbox.value,
      Total:totalbox.value
    })
    console.log(`data stored successfully: ${covidTestsRef.id}`)
  } catch(error) {
    console.log(error)
  }
})