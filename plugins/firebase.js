import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseUrl: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID
  })
}

export default (context, inject) => {
  inject('firebase', firebase)
  inject('firestore', firebase.firestore())
  inject('auth', firebase.auth())
}
