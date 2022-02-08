const { writeFile } = require('fs');

// Your environment.custom.ts file. Will be ignored by git.
const targetPath = './src/environments/environment.custom.ts';

// Load dotenv to work with process.env
require('dotenv').config();

// environment.ts file structure

const envConfigFile = `
function getApiBasePath(): string {
	return (window as any).config.API_BASE_PATH  || 'default-url';
}
export const environment = {
   production: false,
   API_KEY_IMAGE4IO: "${process.env.API_KEY_IMAGE4IO}",
   API_SECRET_IMAGE4IO: "${process.env.API_SECRET_IMAGE4IO}",
   API_URL_IMAGE4IO: "${process.env.API_URL_IMAGE4IO}",
   APP_ID_REALM: "${process.env.APP_ID_REALM}",
   NODE_VERSION: "${process.env.NODE_VERSION}",
   APP_ID_REALM_READWRITE: "${process.env.APP_ID_REALM_READWRITE}",
   MAX_NUMBER_OF_RESERVATIONS: "${process.env.MAX_NUMBER_OF_RESERVATIONS}",
   MAX_NUMBER_OF_WEEKS: "${process.env.MAX_NUMBER_OF_WEEKS}"
};
`; // write the content to the respective file
writeFile(targetPath, envConfigFile, function (err:any) {
	if (err) {
		throw console.error(err);
	} else {
		console.log('Using custom environment');
	}
});
