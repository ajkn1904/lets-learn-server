
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Lets Learn API running!');
});

app.listen(port, () => {
  console.log('Lets Learn Server running on port', port)
})
