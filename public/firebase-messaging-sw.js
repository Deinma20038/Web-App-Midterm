importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');




const firebaseConfig = {
  apiKey: "AIzaSyB7r_HgcgTYYMUiXqxXOSE1H9bOgV4nHSg",
  authDomain: "bon-appetite-386007.firebaseapp.com",
  projectId: "bon-appetite-386007",
  storageBucket: "bon-appetite-386007.appspot.com",
  messagingSenderId: "1054085803466",
  appId: "1:1054085803466:web:15344d4bccd398926b3333",
  measurementId: "G-WNWN0Q322R"

};
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});