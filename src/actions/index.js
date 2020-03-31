import superagend from "superagent";
import jsonp from "superagent-jsonp";
import noCache from "superagent-no-cache";


export function incrementCounter() {
    return {type: "INCREMENT"};
}

export function addTodo(title) {
    return {type: "TODO_ADD", title: title};
}

export function wikipediaSearch(keyword) {
    return function (dispatch) {
        let url = "https://de.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + keyword + "&format=json&callback=JSONP_CALLBACK";
        // let url = "https://api.aschenbrenner-media.de/api/notes/" + keyword;
        console.log(url);
        superagend
            .get(url)
            .use(jsonp({
                callbackName: "JSONP_CALLBACK"
            }))
            .end((err, res) => {
                console.log(res);
                console.log(err);
                dispatch({type: "WIKIPEDIA_SEARCH", keyword: keyword, res: res})
            })
    }
}

export function testApiSearch(id) {
    return function (dispatch) {
        let url = "https://api.aschenbrenner-media.de/api/notes/" + id;
        console.log(url);
        superagend
            .get(url)
            .use(noCache)
            .end(function (err, res) {
                console.log(err);
                // console.log(res);
                dispatch({type: "TESTAPI_SEARCH", id: id, res: res})
            });
    }
}