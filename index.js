const http = require('http')

const hostname = "localhost"
const port = 3000

// Routes
// GET '/' - Match two random students and display
// GET '/students' - Get a list of all students
// POST '/students' - Create a new student

const students = ["Natasha", "Joe", "Matt", "Rachel", "Glen", "Dana"]

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        console.log("Matching students")
    } else if (req.method === 'GET' && req.url === '/students') {
        console.log("Getting list of students")
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=UTF-8'
        })
        res.write(JSON.stringify(students))
    } else if (req.method === 'POST' && req.url === '/students') {
        console.log("Adding a student")
    } else {
        console.log('Could not find route')
        res.statusCode = 404
        res.end()
    }
    // console.log(req.method)
    // console.log(req.url)
    res.end()
    // response.statusCode = 200
    // response.setHeader('Content-Type', 'text/plain')
    // response.write('Hello World')
    // // response.write
    // response.end()
})

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})