const express = require('express')
const app = express()
const db =require('./db');

const bodyParser = require('body-parser')
app.use(bodyParser.json()); //req.body


//get used to acess data and permission from server
app.get('/', function (req, res) {
  res.send('Welcome to my hotel... How can i help you?')
})
// // res.send - response is send
// app.get('/idli', (req, res) =>{
//     var customized_idli = {
//         name: 'rava idli',
//         size: '10cm diameter',
//         is_sambhar: true,
//         is_chutney: false
//     }
//     res.send(customized_idli);
// })
// POST route to add a person

// post for menu items


// Import the router files
const personRoutes = require('./router/personRouter')
const menuRoutes = require('./router/menuRouter')

// to use module
app.use('/person', personRoutes)
app.use('/menu', menuRoutes)

app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})
// server is active at port no. 3000
//localhost:3000/idli show the get of idli