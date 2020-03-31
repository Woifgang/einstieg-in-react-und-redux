
let initialState = null;

function wikipedia(state = initialState, action) {


    if (action.type === "WIKIPEDIA_SEARCH") {
        return action.res;
    } else {
        return state
    }
}

export default wikipedia;

