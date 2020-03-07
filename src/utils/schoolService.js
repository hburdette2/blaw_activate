import tokenService from './tokenService';
const BASE_URL = 'api/schools/';
function create(data) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: new Headers({
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }),
        body: JSON.stringify(data)
    })
        .then(res => {
            if (res.ok) return res.json();
            throw new Error('Are you logged in?');
        })
}
function index() {
    return fetch(BASE_URL)
        .then(res => res.json());
}

function deleteOne(id) {
    return fetch(BASE_URL + `${id}`, {
        method: 'DELETE',

    })

        .then(res => {
            return res.json();

        })
}


export default {
    create,
    index,
    deleteOne
}