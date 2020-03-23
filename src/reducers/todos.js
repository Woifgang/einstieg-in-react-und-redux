let initialState = [
    {id: 5, title: "hallo welt"},
    {id: 10, title: "hallo welt10"}
];

function todos(state = initialState, action) {
    if (action.type === "TODO_ADD") {


        let maxTodoId = 0;
        for (let todo of state) {
            if (todo.id > maxTodoId) {
                maxTodoId = todo.id;
            }
        }

        return [].concat(state, [
            {id: maxTodoId + 1, title: action.title}
        ]);


    }
    return state;
}

export default todos;