const express = require('express')

const app = express();

require('./database')
app.use(require('./routes/routes'));

app.listen(3000);
console.log('Server on port ', 3000);