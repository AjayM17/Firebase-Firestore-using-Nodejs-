// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

export const helloWorld = functions.https.onRequest((request: any, response: { send: (arg0: string) => void; }) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});


export const addUser = functions.https.onRequest(async (req: string, res :any)  => {
    // Grab the text parameter.
    // const original = req.query.text;
    // Push the new message into Cloud Firestore using the Firebase Admin SDK.
    const writeResult = await admin.firestore().collection('users').doc('1').set({name: 'Ajay'});
    // Send back a message that we've succesfully written the message
    res.json({result: `Message with ID: ${writeResult.id} added.`});
  });

  export const getAllUsers = functions.https.onRequest(async(req: any ,res: any)=>{
       admin.firestore().collection('users').get().then((snapshot:any) =>{
        res.json(snapshot.docs);
       })
     
  });

  export const updateUserName = functions.https.onRequest(()=>{
    admin.firestore().collection('users').doc('1').set({name: 'Mandrawal'});
  })





