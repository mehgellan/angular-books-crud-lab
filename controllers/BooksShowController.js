angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;
  console.log($routeParams);
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id
  }).then(function successCb(response) {

    console.log(response.data);
    vm.book = response.data;
    console.log(vm.book);
  }, function errorCb(response) {
    console.log('ERROR', response);
  });
}
