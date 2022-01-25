const express = require("express");
const db = require("./server");
const app = express();
const port = 5000;

const cors = require('cors');
const corsOptions ={
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port,() => {
    console.log(`RUN http://localhost:${port}`)
});

// 後端獲取參數
  app.post("/", function(req, res) {
    const { user_name, user_password } = req.body;
    console.log(`${user_name}`,`${user_password}`)
    db.query(
      `SELECT * FROM userdata WHERE user_name='${user_name}' AND user_password='${user_password}'`,
      function(err, rows, fields) {
        if (rows.length === 0) {
          return res.status(500).send({ error: 'ACCOUNT_NOT_EXIST' });
        };
        return res.send({ message: 'LOGIN_SUCCESSFULLY' });
      }
    );
  });

  app.post("/SignUp", function(req, res) {
    const {user_name,user_password,user_mail,user_birth,user_sex,user_phone} = req.body;
    console.log(`${user_name}`,`${user_password}`,`${user_mail}`,`${user_birth}`,`${user_sex}`,`${user_phone}`)
    db.query(
      `INSERT INTO userdata(user_name,user_password,user_mail,user_birth,user_sex,user_phone) VALUES ('${user_name}','${user_password}','${user_mail}','${user_birth}','${user_sex}','${user_phone}')`,
      function(err, rows, fields){
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(500).send({ error: "ACCOUNT_ALREADY_EXISTS" });
        };
          return res.send({message: 'REGISTER_SUCCESSFULLY' });
      }
    );
  });

