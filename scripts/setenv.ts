const { writeFile } = require('fs');
const { argv } = require('yargs'); // read environment variables from .env file
require('dotenv').config(); // read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';
const targetPath = `./src/environments/environment.custom.ts`; // we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = isProduction
  ? `export const environment = {
   production: true,
   API_KEY_IMAGE4IO: "${process.env.API_KEY_IMAGE4IO}",
   API_SECRET_IMAGE4IO: "${process.env.API_SECRET_IMAGE4IO}",
   API_URL_IMAGE4IO: "${process.env.API_URL_IMAGE4IO}",
   APP_ID_REALM: "${process.env.APP_ID_REALM}",
   NODE_VERSION: "${process.env.NODE_VERSION}",
   APP_ID_REALM_READWRITE: "${process.env.APP_ID_REALM_READWRITE}",
   MAX_NUMBER_OF_RESERVATIONS: "${process.env.MAX_NUMBER_OF_RESERVATIONS}",
   MAX_NUMBER_OF_WEEKS: "${process.env.MAX_NUMBER_OF_WEEKS}",
   UPCOMING_YEAR: "${process.env.UPCOMING_YEAR}",
   CONTEXT: "${process.env.CONTEXT}",
   OPENINGSOON: "${process.env.OPENINGSOON}"
};`
  : `export const environment = {
   production: false,
   API_KEY_IMAGE4IO: "${process.env.API_KEY_IMAGE4IO}",
   API_SECRET_IMAGE4IO: "${process.env.API_SECRET_IMAGE4IO}",
   API_URL_IMAGE4IO: "${process.env.API_URL_IMAGE4IO}",
   APP_ID_REALM: "${process.env.APP_ID_REALM}",
   NODE_VERSION: "${process.env.NODE_VERSION}",
   APP_ID_REALM_READWRITE: "${process.env.APP_ID_REALM_READWRITE}",
   MAX_NUMBER_OF_RESERVATIONS: "${process.env.MAX_NUMBER_OF_RESERVATIONS}",
   MAX_NUMBER_OF_WEEKS: "${process.env.MAX_NUMBER_OF_WEEKS}",
   UPCOMING_YEAR: "${process.env.UPCOMING_YEAR}",
   CONTEXT: "${process.env.CONTEXT}",
   OPENINGSOON: "${process.env.OPENINGSOON}"
};`; // write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err: any) {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);
});
