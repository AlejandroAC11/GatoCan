const express = require('expres')

const app = express();

require('./database')
require('./routes/routes')

app.listen(3000);
console.log('Server on port ', 3000);