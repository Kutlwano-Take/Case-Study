const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2004',
    database: 'inventory'
})

db.connect((err) => {
    if(err){
        console.log("Error connection: ", err.stack)
    } console.log("Connection Successful!")
})

app.get('/produts', (req,res) => {
    q = "SELECT * FROM products"
    db.query(q, (err, results) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.json(results)
        }
    })
})

app.listen(3000, () =>{
    console.log(`Server running on port `, 3000)
})