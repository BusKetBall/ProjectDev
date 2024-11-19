// Import the functions you need from the SDKs you need
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-WpdKD5Q8JPDZYJLH0ez2TOvsnKgiDU4",
  authDomain: "webapp-3dab2.firebaseapp.com",
  projectId: "webapp-3dab2",
  storageBucket: "webapp-3dab2.firebasestorage.app",
  messagingSenderId: "329286405865",
  appId: "1:329286405865:web:248729ab6e6551f3d42a78",
  measurementId: "G-TTL8LSGMDH"
};

// การตั้งค่าการเชื่อมต่อ Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ฟังก์ชันสำหรับดึงข้อมูลจาก Firestore
async function fetchData() {
  const querySnapshot = await getDocs(collection(db, "your-collection"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

export { db, collection, getDocs, fetchData };
