
app.controller('adminController', function($scope){

	// --------------- Login ---------------

	$(function() {

		$("#usuario_admin").focus(function(event) {
            $scope.estado_usuario_admin = true;
        });

        $("#clave_admin").focus(function(event) {
            $scope.estado_clave_admin = true;
        });

	});

	// --------------- Crear tipo de encuesta ---------------

	$(function() {

		$("#descripcionEncuesta").focus(function(event) {
            $scope.estado_descripcion_encuesta = true;
        });

	});

	// --------------- Crear encuesta ---------------

	$(function() {

		$("#nombreE").focus(function(event) {
            $scope.estado_nombreE = true;
        });

        $("#tipoEncuesta").focus(function(event) {
            $scope.estado_tipoEncuesta = true;
        });

	});

	// --------------- Editar pregunta ---------------

	$(function() {

		$("#pregunta").focus(function(event) {
            $scope.estado_pregunta = true;
        });

	});

});