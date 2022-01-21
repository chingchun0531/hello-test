const express = require("express");
const db = require("./server");
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port,() => {
    console.log(`RUN http://localhost:${port}`)
});

db.query('select * from User', function(err, rows) {
    if (err) throw err;
    console.log('Response: ', rows);
  });