angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id
  }).then(function successCb(response) {
    vm.book = response.data;
    console.log(vm.book);
  }, function errorCb(response) {
    console.log('ERROR', response);
  });

  vm.deleteBook = function() {
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id
    }).then(function successCb(response) {
      vm.book = response.data;
      console.log(vm.book);
      $location.path('https://super-crud.herokuapp.com/books');
    });
  };
}
