import firebase from 'firebase'

if(!firebase.apps.length) {

    firebase.initializeApp(
	{
	    apiKey: "AIzaSyD9GXQWgbQ_op9d8aZ7EIFIspp2dlE3wcc",
	    authDomain: "fueoni-online.firebaseapp.com",
	    databaseURL: "https://fueoni-online.firebaseio.com",
	    projectId: "fueoni-online",
	    storageBucket: "fueoni-online.appspot.com",
	    messagingSenderId: "789023926937",
	    appId: "1:789023926937:web:653db607560d61082a2608"
	}
    )
}
export default firebase
