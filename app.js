angular.module('libraryApp', ['ngRoute'])
       .config(config);

////////////
// ROUTES //
////////////

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/books/index.html'/* Include the path to the index template */,
      controller:  'BooksIndexController',
      controllerAs: 'indexCtrl'
    })
    // .when({
    //   templateUrl: '/templates/',
    //   controller: '',
    //   controllerAs: ''
    // })
    /* Include the additional route here! */
    .otherwise({
      redirectTo: '/'
    });

  // this just makes it so our URLs don't have /#/ in them.
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
