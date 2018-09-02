var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider.when('/',{
    controller: 'MahasiswaController',
    templateUrl: 'views/mahasiswa.html'
  })
  .when('/api/mahasiswa',{
    controller: 'MahasiswaController',
    templateUrl: 'views/mahasiswa.html'
  })
  .when('/api/mahasiswa/detail/:npm',{
    controller: 'MahasiswaController',
    templateUrl: 'views/detail_mahasiswa.html'
  })
  .when('/api/mahasiswa/add',{
    controller: 'MahasiswaController',
    templateUrl: 'views/add_mahasiswa.html'
  })
  .when('/api/mahasiswa/edit/:npm',{
    controller: 'MahasiswaController',
    templateUrl: 'views/edit_mahasiswa.html'
  })
});
