const fs = require('fs')

function loadData() {
    try {
        return JSON.parse((fs.readFileSync('./data.json')).toString())
    } catch (error) {
        return []
    }
}

function saveData(data) {
    if(!data) return
    return fs.writeFileSync('./data.json', JSON.stringify(data))
}

module.exports = {
    load: loadData,
    save: saveData
}