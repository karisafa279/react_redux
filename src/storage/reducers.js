import { CREATE_TODO, MARK_COMPLETED, REMOVE_TODO } from "./actions";

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type){
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text,
                isComplete: false,
            };
            return state.concat(newTodo);
        }
        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter(todo => todo.text !== text);
        }

        case MARK_COMPLETED: {
            const { text } = payload;
            //return<h3 style="text-decoration-line: line-through">{text}</h3>
            return (todo => todo.text.style  = 'text-decoration-line: line-through');
        }
        default: {
            return state;
        }
    }
}