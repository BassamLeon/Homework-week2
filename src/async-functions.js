
const request = require('superagent');

const getTatooineResidents = () => {

    // Array variable to hold the residents urls
    let myURLs

    // Make a Request
    request
    .get('https://swapi.co/api/planets/1/')
    .then(res => {
        myURLs = res.body["residents"]
        console.log(res.body, res.status, res.header)
    })
    .catch(err => {
        console.log('Error', err.message)
    });

    // Return a Promise
    return new Promise((resolveFunction, rejectFunction) => {
        if (myURLs) {
            resolveFunction(myURLs)
        } else {
            rejectFunction()
        }
    })
}


const promiseMeAString = (myInput) => {
    return new Promise((resolveFunction, rejectFunction) => {
        if (myInput == "I Promise!") {
            resolveFunction("You kept the Promise!")
        } else {
            rejectFunction("You have failed me!")
        }
    })
}


module.exports = {
    getTatooineResidents,
    promiseMeAString
}
