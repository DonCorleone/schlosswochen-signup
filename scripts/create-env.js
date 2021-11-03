const fs = require('fs')
fs.writeFileSync('./.env', `CLIENT_ROOT=${process.env.CLIENT_ROOT}\nMAX_NUMBER_OF_WEEKS=${process.env.MAX_NUMBER_OF_WEEKS}\nMAX_NUMBER_OF_RESERVATIONS=${process.env.MAX_NUMBER_OF_RESERVATIONS}\nAPP_ID_REALM=${process.env.APP_ID_REALM}\nAPP_ID_REALM_READWRITE=${process.env.APP_ID_REALM_READWRITE}\n`)

