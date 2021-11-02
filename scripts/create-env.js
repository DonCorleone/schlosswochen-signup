const fs = require('fs')
fs.writeFileSync('./.env', `CLIENT_ROOT=${process.env.CLIENT_ROOT}\nMAX_NUMBER_OF_WEEKS=${process.env.MAX_NUMBER_OF_WEEKS}\nMAX_NUMBER_OF_RESERVATIONS=${process.env.MAX_NUMBER_OF_RESERVATIONS}\n`)
