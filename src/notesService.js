const { save, load } = require("./fileManager")

function add({title, content, dateCreated}) {
 const data = load()
 data.push({title, content, dateCreated})
 save(data) 
 console.log("New note added!")
}

function read(title) {
    const data = load()
    const found = data.find(value => value.title === title)
    if(found) return console.log(found)
    return console.log('Note not exists')
}



module.exports = {
    add, load, read, save
}