import superagend from "superagent";
import jsonp from "superagent-jsonp";


export function incrementCounter() {
    return {type: "INCREMENT"};
}

export function addTodo(title) {
    return {type: "TODO_ADD", title: title};
}

export function wikipediaSearch(keyword) {
    return function (dispatch) {
        let url = "https://de.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + keyword + "&format=json&callback=JSONP_CALLBACK";
        superagend
            .get(url)
            .use(jsonp({
                callbackName: "JSONP_CALLBACK"
            }))
            .end((err, res) => {
                console.log(res);
                dispatch({type: "WIKIPEDIA_SEARCH", keyword: keyword, res: res})
            })


    }
}