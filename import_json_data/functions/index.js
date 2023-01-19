const admin = require('firebase-admin');
const fs = require('fs');
const addFunction = require('./addFunction');
var countries;

admin.initializeApp({
  credential: admin.credential.cert({
      "type": "service_account",
      "project_id": "YOUR_APP",
      "private_key_id": "************************",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIeg==\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-mtb2y@YOUR_APP.iam.gserviceaccount.com",
      "client_id": "*************",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-mtb/YOUR_APP.iam.gserviceaccount.com"
  }
  ),
  projectId: "YOUR_APP"
});

// Read countries.json file
fs.readFile("countries.json", function(err, data) {
  if (err) throw err; // Check for errors
  countries = JSON.parse(data); // Converting to JSON
  console.log(countries); // Print countries 
});

countries.forEach(country => {
  addFunction.addData(country);
});