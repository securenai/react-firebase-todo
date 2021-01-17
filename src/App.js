import './App.css';
import {React, useEffect, useState} from 'react';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');
	// when the app loads, we need to listen to the database and fetch new todos as they get added/removed
	useEffect(() => {
		// this code here, fires when the app.js loads
		db.collection('todos')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) => {
				console.log(snapshot.docs.map((doc) => doc.data()));
				setTodos(
					snapshot.docs.map((doc) => ({id: doc.id, todo: doc.data().todo}))
				);
			});
	}, []);

	const addTodo = (e) => {
		e.preventDefault();
		db.collection('todos').add({
			todo: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput('');
	};

	return (
		<div className="App">
			<h1>hello world</h1>
			<form>
				<FormControl>
					<InputLabel>Add todo</InputLabel>
					<Input
						value={input}
						onChange={(event) => setInput(event.target.value)}
					/>
				</FormControl>
				<Button
					type="submit"
					onClick={addTodo}
					variant="contained"
					color="primary"
					disabled={!input}>
					add todo
				</Button>
			</form>
			<ul>
				{todos.map((todo, i) => (
					<Todo todo={todo} key={i.toString()} />
				))}
			</ul>
		</div>
	);
}

export default App;
