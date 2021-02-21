const express = require('express')

const app = exp()
app.use(express.json())

app.listen(8080, () => console.log('Server running on port 8080'))
