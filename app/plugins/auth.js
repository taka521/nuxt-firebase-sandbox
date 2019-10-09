import firebase from '~/plugins/firebase'
import { resolve, reject } from 'q'

function auth() {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(user => { 
      resolve(user || false)
    })
  })
}

export default auth