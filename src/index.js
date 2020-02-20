import './styles.css';
import { TodoList } from './classes';
import { crearTodoHtml, sumarPendientes } from './js/componentes';

export const todoList = new TodoList();

//todoList.todos.forEach(todo => {crearTodoHtml(todo)});
todoList.todos.forEach(crearTodoHtml);
sumarPendientes();

