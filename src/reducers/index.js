let initialState = {
    counter: 0,
    todos: [
        {id: 5, title: "hallo welt"},
        {id: 10, title: "hallo welt10"}
    ]
}

function counter(state, action) {
    if (action.type == "INCREMENT") {
        return state + 1;
    } else {
        return state
    }
}

function todos(state, action) {
    return state;
}

function reduce(state = initialState, action) {
    return {
        counter: counter(state.counter, action),
        todos: todos(state.todos, action)
    }
}

export default reduce;