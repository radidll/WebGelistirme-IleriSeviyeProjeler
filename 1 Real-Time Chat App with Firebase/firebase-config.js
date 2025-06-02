// Firebase Config ayarlarını buraya girin (proje oluşturduktan sonra)
const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "YOUR_DOMAIN.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID"
};

// Firebase'i başlat
firebase.initializeApp(firebaseConfig);
const database = firebase.database();