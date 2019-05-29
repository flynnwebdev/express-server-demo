const express = require('express')
const bodyParser = require('body-parser')

const students = ["Natasha", "Joe", "Matt", "Rachel", "Glen", "Dana"]

const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded())

app.get('/', (req, res) => {
    res.render('layout', {
        view: 'index',
        title: 'Lunchify',
        randomStudents: students.sort(() => Math.random() - 0.5)
    })
})

app.get('/students', (req, res) => {
    // res.send(students)
    res.render('layout', {
        students,
        view: 'students',
        title: 'Students'
    })
})

app.post('/students', (req, res) => {
    console.log(req.body.name)
    students.push(req.body.name)
    res.send(`Added student ${req.body.name}`)
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})