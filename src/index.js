const path = require('path')
const express = require('express')
const dateFns = require('date-fns')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const notes = require('./notesService')
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));


const port = 8000

app.get('/', (req, res) => {
  const listNotes = notes.load()
  console.log(listNotes)
  res.render('home', {
    listNotes: listNotes
  })
})

app.get('/form', (req, res) => {
  res.render('form')
})

app.post('/addNote', (req, res) => {
    const { title, content } = req.body
    
    const note = {
      title,
      content,
      dateCreated: dateFns.format(new Date, 'dd-MM-yyyy')
    }
    notes.add(note)
    return res.redirect('/')
})

app.get('/about', (req, res) => {
  return res.render('about')
})
 
app.listen(port, ()=> {
    return console.log('Listen on port,', port)
})