// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAe4kergjki4fmd4lr9PSgIuomOIaa5itQ",
    authDomain: "community-auth.firebaseapp.com",
    databaseURL: "https://community-auth.firebaseio.com",
    projectId: "community-auth",
    storageBucket: "gs://community-auth.appspot.com",
    messagingSenderId: "1097482511476"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
