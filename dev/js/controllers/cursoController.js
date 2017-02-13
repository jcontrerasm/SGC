
app.controller('cursoController', function($scope){

	$scope.btn_ampliar = true;
	$scope.btn_reducir = false;
	$scope.menu_curso = true;

	$(function(){
  		$('[data-toggle="tooltip"]').tooltip();
	});

	$scope.opcion_pantalla = function(_accion) {

		var accion_btn = _accion;

		if(accion_btn == 'ampliar'){
			$scope.btn_ampliar = false;
			$scope.btn_reducir = true;
			$scope.menu_curso = false;
			$(function() {
				$("#seccion-curso").removeClass("col-md-9");
				$("#seccion-curso").addClass("col-md-12");
			});
		}

		if(accion_btn == 'reducir'){
			$scope.btn_ampliar = true;
			$scope.btn_reducir = false;
			$scope.menu_curso = true;
			$(function() {
				$("#seccion-curso").removeClass("col-md-12");
				$("#seccion-curso").addClass("col-md-9");
			});
		}

	}



});