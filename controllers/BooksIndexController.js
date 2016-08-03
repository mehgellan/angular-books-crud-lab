angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];
function BooksIndexController( $http ) {
  var vm = this;
  vm.newBook = {};

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function successCb(response) {
    vm.books = response.data.books; // vm.books = Array
    // console.log(vm.books);
  }, function errorCb(response) {
    console.log('ERROR', response);
  });

  vm.createBook = function() {
    $http({
      method: 'POST',
      url: 'https://super-crud.herokuapp.com/books',
      data: vm.newBook
    }).then(function successCb(response) {
      vm.books.push(response.data);
      vm.newBook = {};
    }, function errorCb(response) {
      console.log('ERROR', response);
    });
  };

  vm.singleSelect = 'title';


}
