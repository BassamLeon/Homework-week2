

const peopleArray = []

const groupAdultsByAgeRange = (peopleArray) => {
    let _20AndYounger = []
    let _21_30 = []
    let _31_40 = []
    let _41_50 = []
    let _51AndOlder = []
    let groupedObj = {}
    
    _20AndYounger = peopleArray.filter(peopleArray => peopleArray.age >= 18).filter(peopleArray => peopleArray.age <= 20)
    _21_30 = peopleArray.filter(peopleArray => peopleArray.age >= 21).filter(peopleArray => peopleArray.age <= 30)
    _31_40 = peopleArray.filter(peopleArray => peopleArray.age >= 31).filter(peopleArray => peopleArray.age <= 40)
    _41_50 = peopleArray.filter(peopleArray => peopleArray.age >= 41).filter(peopleArray => peopleArray.age <= 50)
    _51AndOlder = peopleArray.filter(peopleArray => peopleArray.age >= 51)
        
    //console.log(peopleArray)
    if (_20AndYounger.length > 0) { groupedObj["20 and younger"] = _20AndYounger }
    if (_21_30.length > 0) { groupedObj["21-30"] = _21_30 }
    if (_31_40.length > 0) { groupedObj["31-40"] = _31_40 }
    if (_41_50.length > 0) { groupedObj["41-50"] = _41_50 }
    if (_51AndOlder.length > 0) { groupedObj["51 and older"] = _51AndOlder }
    
    return groupedObj
}


module.exports = {
    groupAdultsByAgeRange,
}