import * as Realm from 'realm-web';
import {environment} from '../environments/environment.custom';
import jwtDecode from 'jwt-decode';

const graphqlUrl = `https://realm.mongodb.com/api/client/v2.0/app/${environment.APP_ID_REALM!}/graphql`;
const graphqlUrlReadWrite = `https://realm.mongodb.com/api/client/v2.0/app/${environment.APP_ID_REALM_READWRITE!}/graphql`;

// Connect to your MongoDB Realm app
const app = new Realm.App(environment.APP_ID_REALM!);
const appReadWrite = new Realm.App(environment.APP_ID_REALM_READWRITE!);

// Get a valid Realm user access token to authenticate requests
async function getValidAccessTokenReadWrite(): Promise<string> {
  if (!appReadWrite.currentUser) {
    // If no user is logged in, log in an anonymous user
    await appReadWrite.logIn(Realm.Credentials.anonymous()).then((o) => {

      if (appReadWrite?.currentUser?.accessToken){
        localStorage.setItem('token',  appReadWrite.currentUser.accessToken);
        return appReadWrite.currentUser.accessToken;
      }
      return null;
    });
  }
    // The logged in user's access token might be stale,
  // Refreshing custom data also refreshes the access token
  else {
    let storageKey =
      appReadWrite.storage['storage']['keyPart'] +
      ':' +
      appReadWrite.storage['keyPart'] +
      ':' +
      appReadWrite.currentUser['storage']['keyPart'] +
      ':' +
      'accessToken';
    removeExpiredTokens(storageKey);

    storageKey =
      appReadWrite.storage['storage']['keyPart'] +
      ':' +
      appReadWrite.storage['keyPart'] +
      ':' +
      appReadWrite.currentUser['storage']['keyPart'] +
      ':' +
      'refreshToken';
    removeExpiredTokens(storageKey);

    await appReadWrite.currentUser.refreshCustomData().then((z) => {
      if (appReadWrite?.currentUser?.accessToken){
        localStorage.setItem('token',  appReadWrite.currentUser.accessToken);
        return appReadWrite.currentUser.accessToken;
      }
      return null;
    });
  }

  // Get a valid access token for the current user

  if (appReadWrite?.currentUser?.accessToken){
    localStorage.setItem('token',  appReadWrite.currentUser.accessToken);
    return appReadWrite.currentUser.accessToken;
  }
  return '';
}

async function getValidAccessToken(): Promise<string> {
  if (!app.currentUser) {
    // If no user is logged in, log in an anonymous user
    await app.logIn(Realm.Credentials.anonymous()).then((o) => {
      if (app?.currentUser?.accessToken){
        localStorage.setItem('token',  app.currentUser.accessToken);
        return app.currentUser.accessToken;
      }
      return null;
    });
  }
    // The logged in user's access token might be stale,
  // Refreshing custom data also refreshes the access token
  else {
    let storageKey =
      app.storage['storage']['keyPart'] +
      ':' +
      app.storage['keyPart'] +
      ':' +
      app.currentUser['storage']['keyPart'] +
      ':' +
      'accessToken';
    removeExpiredTokens(storageKey);

    storageKey =
      app.storage['storage']['keyPart'] +
      ':' +
      app.storage['keyPart'] +
      ':' +
      app.currentUser['storage']['keyPart'] +
      ':' +
      'refreshToken';
    removeExpiredTokens(storageKey);

    await app.currentUser.refreshCustomData().then((z) => {
      if (app?.currentUser?.accessToken){
        localStorage.setItem('token',  app.currentUser.accessToken);
        return app.currentUser.accessToken;
      }
      return null;
    });
  }

  // Get a valid access token for the current user
  if (app?.currentUser?.accessToken){
    localStorage.setItem('token',  app.currentUser.accessToken);
    return app.currentUser.accessToken;
  }
  return 'null';
}

function removeExpiredTokens(storageKey: string) {
  let storedToken = localStorage.getItem(storageKey);
  if (storedToken) {
    console.log(`found ${storageKey}`);
    const decoded = jwtDecode(storedToken);
    // @ts-ignore
    const exp = decoded['exp'];
    const expDate = +exp;
    if (expDate < Date.now() / 1000) {
      localStorage.removeItem(storageKey);
      console.log(`expired - removed ${storageKey}`);
    } else {
      console.log('valid');
    }
  }
}

export {
  graphqlUrl,
  graphqlUrlReadWrite,
  getValidAccessToken,
  getValidAccessTokenReadWrite,
};
