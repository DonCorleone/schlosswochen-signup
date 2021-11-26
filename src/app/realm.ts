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
		await app.logIn(Realm.Credentials.anonymous()).then(x => {
        sessionStorage.setItem('token', x.accessToken!);
        return x.accessToken;
      }
    );
	} else
		// The logged in user's access token might be stale,
		// Refreshing custom data also refreshes the access token
	{
		await app.currentUser.refreshCustomData().then(x => {
        sessionStorage.setItem('token', x.accessToken!);
        return x.accessToken;
      }
    );
	}

	return app.currentUser?.accessToken!;
}

async function getValidAccessTokenReadWrite(): Promise<string> {
	if (!appReadWrite.currentUser)
		// If no user is logged in, log in an anonymous user
	{
		await appReadWrite.logIn(Realm.Credentials.anonymous()).then(x => {
        sessionStorage.setItem('tokenReadWrite', x.accessToken!);
        return x.accessToken;
      }
    );
	} else
		// The logged in user's access token might be stale,
		// Refreshing custom data also refreshes the access token
	{
		await appReadWrite.currentUser.refreshCustomData().then(x => {
      sessionStorage.setItem('tokenReadWrite', x.accessToken!);
      return x.accessToken;
    });
	}

	return appReadWrite.currentUser?.accessToken!;
}

export {
	graphqlUrl,
	graphqlUrlReadWrite,
	getValidAccessToken,
	getValidAccessTokenReadWrite
};
