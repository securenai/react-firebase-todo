import {useState, React} from 'react';
import './Todo.css';
import db from './firebase';
import {List, ListItem, ListItemText, Modal} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

const Todo = (props) => {
	const [openEdit, setOpenEdit] = useState(false);
	const [editInput, setEditInput] = useState('');

	const updateTodo = () => {
		// update the todo the new input text
		db.collection('todos')
			.doc(props.todo.id)
			.set({todo: editInput}, {merge: true});
		setOpenEdit(!openEdit);
	};

	return (
		<>
			<List className="todo__list">
				<ListItem href="#simple-list">
					{openEdit === false ? (
						<ListItemText primary={props.todo.todo} />
					) : (
						<span>
							<input
								type="text"
								placeholder={props.todo.todo}
								value={editInput}
								onChange={(e) => setEditInput(e.target.value)}></input>
							<button onClick={updateTodo}>save</button>
						</span>
					)}
				</ListItem>
				<EditIcon onClick={(e) => setOpenEdit(!openEdit)}>edit</EditIcon>
				<DeleteForeverIcon
					onClick={(event) =>
						db.collection('todos').doc(props.todo.id).delete()
					}
				/>
			</List>
		</>
	);
};

export default Todo;
