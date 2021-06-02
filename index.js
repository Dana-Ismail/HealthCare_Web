const express = require('express')
const add = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const database = require('./database')
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

add.use(cors(corsOptions))
add.use(bodyParser.json())
add.listen(8000, () => {
    console.log('Server started!')
})

// get (display)
// post (add)
// put (update)
// delete (remove)

app.post('/add-unit', async(req, res) => {
    let sql = "INSERT INTO units (unit_name,unit_value) VALUES (?,?)"
    let [result, row] = await database.connection.execute(sql, [req.body.unit], [req.body.value])
    res.status(200).json([result, row])
})

app.put('/update-unit', async(req, res) => {
    let sql = "UPDATE units SET unit_name = ?, unit_value = ? WHERE id_unit = ?"
    await database.connection.execute(sql, [req.body.unit], [req.body.value], [req.body.value])
    res.status(200).json("unit updated")
})

app.delete('/delete-unit', async(req, res) => {
    let sql = "DELETE units SET unit_name = ?, unit_value = ? WHERE id_unit = ?"
    await database.connection.execute(sql, [req.body.unit], [req.body.value], [req.body.value])
    res.status(200).json("unit deleted")
})

app.get('/show-unit', async(req, res) => {
    let sql = "SELECT unit_name = ?, unit_value = ? WHERE id_unit = ?"
    let [result, row] = await database.connection.execute(sql, [req.body.unit], [req.body.value])
    res.status(200).json([result, row])
})