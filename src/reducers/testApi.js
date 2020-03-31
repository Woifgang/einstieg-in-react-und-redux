
let initialState = null;

function testApi(state = initialState, action) {


    if (action.type === "TESTAPI_SEARCH") {
        return action.res;
    } else {
        return state
    }
}

export default testApi;
