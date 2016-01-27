angular.module('app').controller('controlador1', function ($scope, DistribuidoresFactory) {
    $scope.distribuidor = null;
    $scope.descripcion = "Descripción del distribuidor";
    $scope.distribuidores = [
        {idDistribuidor: 1, Distribuidor: "Distribuidor 1"},
        {idDistribuidor: 2, Distribuidor: "Distribuidor 2"},
        {idDistribuidor: 3, Distribuidor: "Distribuidor 3"},
        {idDistribuidor: 4, Distribuidor: "Distribuidor 4"}
    ];
    $scope.listado = [
        {id: 1, description: "Distribuidor 1"},
        {id: 2, description: "Distribuidor 2"},
        {id: 3, description: "Distribuidor 3"},
        {id: 4, description: "Distribuidor 4"}
    ];
    $scope.submit = function () {
        var str="Id Distribuidor: "+$scope.distribuidor;
        str +=" "+ $scope.descripcion;
        alert(str);
    };
    
    var getListDistribuidores = function (){
      DistribuidoresFactory.getList();
    };
    getListDistribuidores()
});