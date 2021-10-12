import * as Realm from 'realm-web';

const graphqlUrl = `https://realm.mongodb.com/api/client/v2.0/app/${process.env.APP_ID_REALM!}/graphql`;
const graphqlUrlReadWrite = `https://realm.mongodb.com/api/client/v2.0/app/${process.env.APP_ID_REALM_READWRITE!}/graphql`;

// Connect to your MongoDB Realm app
const app = new Realm.App(process.env.APP_ID_REALM!);
const appReadWrite = new Realm.App(process.env.APP_ID_REALM_READWRITE!);

// Get a valid Realm user access token to authenticate requests
async function getValidAccessToken(): Promise<string> {
	if (!app.currentUser)
		// If no user is logged in, log in an anonymous user
	{
		await app.logIn(Realm.Credentials.anonymous());
	} else
		// The logged in user's access token might be stale,
		// Refreshing custom data also refreshes the access token
	{
		await app.currentUser.refreshCustomData();
	}

	// Get a valid access token for the current user
	localStorage.setItem('token', app.currentUser?.accessToken!);
	return app.currentUser?.accessToken!;
}

async function getValidAccessTokenReadWrite(): Promise<string> {
	if (!appReadWrite.currentUser)
		// If no user is logged in, log in an anonymous user
	{
		await appReadWrite.logIn(Realm.Credentials.anonymous());
	} else
		// The logged in user's access token might be stale,
		// Refreshing custom data also refreshes the access token
	{
		await appReadWrite.currentUser.refreshCustomData();
	}

	// Get a valid access token for the current user
	localStorage.setItem('tokenReadWrite', appReadWrite.currentUser?.accessToken!);
	return appReadWrite.currentUser?.accessToken!;
}

export {
	graphqlUrl,
	graphqlUrlReadWrite,
	getValidAccessToken,
	getValidAccessTokenReadWrite
};
