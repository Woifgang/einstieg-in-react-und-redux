let initialState = {
    counter: 0,
    todos: [
        {id: 5, title: "hallo welt"},
        {id: 10, title: "hallo welt10"}
    ]
}

function counter(state = initialState, action) {
    if (action.type == "INCREMENT") {
        return {
            counter: state.counter + 1
        }
    } else {
        return state
    }
}

export default counter;