importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
          apiKey: "AIzaSyDXKulm7wCqIBsJXMq2JhoGw_xRn7iP1Cc",
          authDomain: "sanjanafruits-fe35b.firebaseapp.com",
          projectId: "sanjanafruits-fe35b",
          storageBucket: "sanjanafruits-fe35b.firebasestorage.app",
          messagingSenderId: "361395576356",
          appId: "1:361395576356:web:39ce7e01f1eeba4e1242b1",
          measurementId: "G-1G8K9BX8CZ"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});