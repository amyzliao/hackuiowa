// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue} = require('firebase-admin/firestore');
const proc = require('process');
// const express = require('express');
// const admin = require('firebase-admin');
// const app = express();
const port = proc.env.PORT || 3000; // Use the port defined by the environment or 3000 by default

// const serviceAccount = require('/Users/zhao/Downloads/serviceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   // databaseURL: 'https://your-project-id.firebaseio.com', // Replace with your Firebase project's URL
// });

// // Middleware to parse JSON request bodies
// app.use(express.json());

// // Middleware to parse URL-encoded request bodies
// app.use(express.urlencoded({ extended: false }));

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCru_23cWy3h_0xtwjuTFvEfAq22xAJMzI",
//   authDomain: "whentoschmeet.firebaseapp.com",
//   projectId: "whentoschmeet",
//   storageBucket: "whentoschmeet.appspot.com",
//   messagingSenderId: "109657703445",
//   appId: "1:109657703445:web:c3139a524d4bc31e06ba1c",
//   measurementId: "G-NPSTH1Y3K4"
// };

// const db = getFirestore();

// Note: Use Node 14 to avoid deployment errors

// FIREBASE

const functions = require("firebase-functions");
const admin = require('firebase-admin');
const { getFirestore } = require('firebase-admin/firestore');

if (!admin.apps.length) {
   admin.initializeApp();
} else {
   admin.app(); // if already initialized, use that one
}
const db = getFirestore();

// EXPRESS

const express = require("express");
const cors = require('cors');
const app = express();

// OTHER MODULES

// const fetch = require('node-fetch')

// origin: 'http://localhost:9000',
// origin: 'http://localhost:9000',


app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['POST', 'GET'],
  allowedHeaders: 'Content-Type'
}));
app.options("*", cors({
  origin: '*',
  methods: ['POST', 'GET'],
  allowedHeaders: 'Content-Type'
}));

app.get('/get-groups', async (req, res) => {
  let body = req.body;

  const data = {
    "name": "bye",
  }

  const success = await db.collection("users").add(data);
  res.send(body["user_id"]);
});

app.get('/get-calendars', (req, res) => {
  let body = req.body;
  res.send(body);
});

// const fs = require('fs').promises;
// const path = require('path');
// const process = require('process');
// const {authenticate} = require('@google-cloud/local-auth');
// const {google} = require('googleapis');

// // If modifying these scopes, delete token.json.
// const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
// // The file token.json stores the user's access and refresh tokens, and is
// // created automatically when the authorization flow completes for the first
// // time.
// const TOKEN_PATH = path.join(process.cwd(), 'token.json');
// const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

// /**
//  * Reads previously authorized credentials from the save file.
//  *
//  * @return {Promise<OAuth2Client|null>}
//  */
// async function loadSavedCredentialsIfExist() {
//   try {
//     const content = await fs.readFile(TOKEN_PATH);
//     const credentials = JSON.parse(content);
//     return google.auth.fromJSON(credentials);
//   } catch (err) {
//     return null;
//   }
// }

// /**
//  * Serializes credentials to a file compatible with GoogleAUth.fromJSON.
//  *
//  * @param {OAuth2Client} client
//  * @return {Promise<void>}
//  */
// async function saveCredentials(client) {
//   const content = await fs.readFile(CREDENTIALS_PATH);
//   const keys = JSON.parse(content);
//   const key = keys.installed || keys.web;
//   const payload = JSON.stringify({
//     type: 'authorized_user',
//     client_id: key.client_id,
//     client_secret: key.client_secret,
//     refresh_token: client.credentials.refresh_token,
//   });
//   await fs.writeFile(TOKEN_PATH, payload);
// }

// /**
//  * Load or request or authorization to call APIs.
//  *
//  */
// async function authorize() {
//   let client = await loadSavedCredentialsIfExist();
//   if (client) {
//     return client;
//   }
//   client = await authenticate({
//     scopes: SCOPES,
//     keyfilePath: CREDENTIALS_PATH,
//   });
//   if (client.credentials) {
//     await saveCredentials(client);
//   }
//   return client;
// }

// /**
//  * Lists the next 10 events on the user's primary calendar.
//  * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
//  */
// async function listEvents(auth) {
//   const calendar = google.calendar({version: 'v3', auth});
//   const res = await calendar.events.list({
//     calendarId: 'primary',
//     timeMin: new Date().toISOString(),
//     maxResults: 10,
//     singleEvents: true,
//     orderBy: 'startTime',
//   });
//   const events = res.data.items;
//   if (!events || events.length === 0) {
//     console.log('No upcoming events found.');
//     return;
//   }
//   console.log('Upcoming 10 events:');
//   events.map((event, i) => {
//     const start = event.start.dateTime || event.start.date;
//     const end = event.end.dateTime || event.end.date;
//     console.log("start " + start);
//     console.log("end " + end);
//     // console.log(`${start} - ${event.summary}`);
//   });
// }

// authorize().then(listEvents).catch(console.error);

exports.app = functions.https.onRequest(app);