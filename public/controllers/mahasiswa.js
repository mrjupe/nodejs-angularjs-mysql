var myApp = angular.module('myApp');
myApp.controller('MahasiswaController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){

	$scope.getMahasiswa = function(){
		$http.get('/api/mahasiswa').then(function(data){
			$scope.mahasiswaa = data;
		});
	}

  $scope.getMahasiswaById = function(){
    var npm = $routeParams.npm;
		$http.get('/api/mahasiswa/detail/'+npm).then(function(data){
			$scope.mahasiswa = data;
		});
	}

  $scope.addMahasiswa = function(){
		$http.post('/api/mahasiswa/add', $scope.mahasiswa).then(function(){
			window.location.href='#';
		});
	}

  $scope.editMahasiswa = function(){
    var npm = $routeParams.npm;
		$http.put('/api/mahasiswa/edit/'+npm, $scope.mahasiswa).then(function(data){
			$scope.mahasiswa = data;
			window.location.href='#';
		});
	}

	$scope.removeMahasiswa = function(npm){
		$http.delete('/api/mahasiswa/'+npm, $scope.mahasiswa).then(function(data){
			window.location.href='#';
		});
	}


}]);
