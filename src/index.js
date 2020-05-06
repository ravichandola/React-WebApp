import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9c1wh0GhpzXX3kHLZkHWWfhJ8evd2GVg",
  authDomain: "cart-system-5e342.firebaseapp.com",
  databaseURL: "https://cart-system-5e342.firebaseio.com",
  projectId: "cart-system-5e342",
  storageBucket: "cart-system-5e342.appspot.com",
  messagingSenderId: "427775766089",
  appId: "1:427775766089:web:463fed256ba017c379d998",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
