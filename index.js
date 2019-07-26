const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')

app.use(express.static('startbootstrap-freelancer-gh-pages'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './startbootstrap-freelancer-gh-pages', 'index.html'));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
