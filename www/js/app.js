// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    //if (window.cordova && window.cordova.plugins.Keyboard) {
    //  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    //  cordova.plugins.Keyboard.disableScroll(true);
    //}
    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }


    /* Invoke sync with the custom options, which enables user interaction.
     For customizing the sync behavior, see SyncOptions in the CodePush documentation. */
    window.codePush.sync(
        function (syncStatus) {
          console.log('9090909')
          switch (syncStatus) {
            // Result (final) statuses
            case SyncStatus.UPDATE_INSTALLED:
              console.log("The update was installed successfully. For InstallMode.ON_NEXT_RESTART, the changes will be visible after application restart. ");
              break;
            case SyncStatus.UP_TO_DATE:
              console.log("The application is up to date.");
              break;
            case SyncStatus.UPDATE_IGNORED:
              console.log("The user decided not to install the optional update.");
              break;
            case SyncStatus.ERROR:
              console.log("An error occured while checking for updates");
              break;

            // Intermediate (non final) statuses
            case SyncStatus.CHECKING_FOR_UPDATE:
              console.log("Checking for update.");
              break;
            case SyncStatus.AWAITING_USER_ACTION:
              console.log("Alerting user.");
              break;
            case SyncStatus.DOWNLOADING_PACKAGE:
              console.log("Downloading package.");
              break;
            case SyncStatus.INSTALLING_UPDATE:
              console.log("Installing update");
              break;
          }
        });



  });


});
