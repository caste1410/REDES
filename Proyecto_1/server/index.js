const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  res.send([hours, minutes, seconds]);
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
