const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json()); // to parse JSON-encoded bodies

// to connect to the database
const db = mysql.createPool({
 host: 'localhost',
 user: 'root',
 password: '',
 database: 'regsys',
});


app.post("/signup", (req, res) => {
 const username = req.body.username;
 const email = req.body.email;
 const password = req.body.password;

 const sqlInsert = "INSERT INTO student (username, email, password) VALUES (?,?,?)";
 db.query(sqlInsert, [username, email, password], (err, data) => {
  if(err) {
   return res.json({error: err});
  }
  return res.json(data)
 });
});


app.post("/signin", (req, res) => {
 const email = req.body.email;
 const password = req.body.password;

 const sqlInsert = "SELECT * FROM student WHERE email = ? AND password = ?";
 db.query(sqlInsert, [email, password], (err, data) => {
  if(err) {
   return res.json({error: err});
  }
  if (data.length > 0) {
   return res.json({message: "success"});
  } else {
   return res.json({message: "error"});
  }
 });
}); 


app.listen(8081, () => {
 console.log('running on port 8081');
});

