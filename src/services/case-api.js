async function getCases(name, docket_number, decision_date) {
    const endpoint = 'https://api.case.law/v1/cases/';
    return fetch(endpoint, {
        mode: 'cors'
    }).then(res => res.json())
}

export default {
    getCases
}