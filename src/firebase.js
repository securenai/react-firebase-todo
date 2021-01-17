import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	apiKey: 'AIzaSyD0CJIX-6ZchAN3ut7JWElQcdkGxjQnwkc',
	authDomain: 'todo-app-cp-8d3dd.firebaseapp.com',
	projectId: 'todo-app-cp-8d3dd',
	storageBucket: 'todo-app-cp-8d3dd.appspot.com',
	messagingSenderId: '773692108199',
	appId: '1:773692108199:web:07b16842a4aabae6cd9a82',
	measurementId: 'G-M84JB430PY',
});

const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();

export default db;
