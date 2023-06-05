    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
    import { getFirestore, getDocs, collection} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";

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
const db = getFirestore(app);
firebase.initializeApp(firebaseConfig);
const db2 = firebase.firestore();  // Function for Database Firestore 

// Get the count of locations
const locationsCount = querySnapshot.size;

// Create a bar chart
const ctx = document.getElementById('chartDiv').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Total Locations'],
    datasets: [{
      label: 'Count',
      data: [locationsCount],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: locationsCount + 1 // Adjust the maximum value to leave space for labels
      }
    }
  }
});
