import admin from "firebase-admin"

import pk from "./pk.json" assert { type: "json" };;

admin.initializeApp({
  credential: admin.credential.cert(pk),
});

export default admin;
