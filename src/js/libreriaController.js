var app = angular.module('librosApp', ['ngMaterial']);

app.controller('AppCtrl', function($scope, $mdDialog, $timeout) {
    $scope.filtername = '';
    $scope.title='Libreria';
    $scope.customFullscreen = false;
    $scope.buttomTitle = 'Agregar libro';
    $scope.nuevoLibro = {};
    $scope.maxlength = 4;
   // $filter.date('medium');

    //Data alumnos
    $scope.libreria = [
        { nombre: "El proyecto de mi vida", editorial:"Esencia", autor: "Megan Maxwell", edicion:"2016" },
        { nombre: "El sanador de caballos", editorial:"Editorial Planeta", autor: "Gonzalo Giner", edicion:"2008" },
        { nombre: "Con un cassette y un BOLI BIC", editorial:"Espasa", autor: "Defreds - Jose Á. Gómez Iglesias", edicion:"2018" },
        { nombre: "Las hijas del Capitán", editorial:"Editorial Planeta", autor: "María Dueñas", edicion:"2011" },
        { nombre: "Me gusta la costa en España", editorial:"GeoPlaneta", autor: "Alexandra Gossink | Geert-Jan Middelkoop", edicion:"2015" },
        { nombre: "Uncharted /El cuarto laberinto", editorial:"Timun Mas Narrativa", autor: "Christopher Golden", edicion:"2015" }
    ];

    //Eliminar registro
    $scope.showConfirm = function(ev,id) {
        var confirm = $mdDialog.confirm()
            .title('Eliminar registro')
            .targetEvent(ev)
            .ok('Ok')
            .cancel('Cancelar');

        $mdDialog.show(confirm).then(function() {
            $scope.libreria.splice(id,1);
            $scope.show = true;
            $scope.mensajeDel = "Registro eliminado exitosamente...";
            $timeout(function(){ $scope.show = false; }, 3000);
        }, function() {
            $timeout(function(){ $scope.show = false; }, 3000);
           //
            //$scope.mensajeDel = "Operación cancelada..";
        });
    };
    //fin

    //Mostrar dialogo
    $scope.showPrerenderedDialog = function(ev) {
        $mdDialog.show({
            contentElement: '#myDialog',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        });
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    //fin

    //Agregar nuevo libro
    $scope.saveLibro = function() {
        $scope.libreria.push({ nombre: $scope.nuevoLibro.nombre, editorial: $scope.nuevoLibro.editorial, autor: $scope.nuevoLibro.autor, edicion: $scope.nuevoLibro.edicion });
        $scope.nuevoLibro = {};
        $mdDialog.cancel();
    };
    //fin
});



